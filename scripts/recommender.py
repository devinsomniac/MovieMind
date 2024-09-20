from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import linear_kernel
from fuzzywuzzy import process


app = Flask(__name__)

# Load dataset once at startup
top_250 = None
cosine_sim = None

try:
    top_250 = pd.read_csv('Top_250_Pre-processed.csv')
    count_vector = CountVectorizer(stop_words='english')
    count_matrix = count_vector.fit_transform(top_250['soup'])
    cosine_sim = linear_kernel(count_matrix, count_matrix)
except Exception as e:
    print(f"Error loading dataset: {e}")

def content_based(query, top_250, cosine_sim):
    print(f"Query received: {query}")
    choices = top_250['soup'].tolist()
    print(f"Choices available: {len(choices)}")

    best_match = process.extractOne(query, choices)
    print("Best match:", best_match)

    if best_match:
        match_string, score = best_match
        idx = choices.index(match_string)
        print("Matched index:", idx)
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:15]  # Exclude the first match (itself)
        movie_indices = [i[0] for i in sim_scores]

        recommended_movies = []
        for i in movie_indices:
            recommended_movies.append({
                'title': top_250['title'].iloc[i],
                'poster_path': top_250['poster_path'].iloc[i],
                'genres': top_250['genres'].iloc[i],
                'vote_average': top_250['vote_average'].iloc[i]
            })
        print(recommended_movies)
        return recommended_movies

    return "No matches found for your query."

@app.route('/recommend', methods=['POST'])
def recommend():
    global top_250, cosine_sim

    if top_250 is None or cosine_sim is None:
        print("Dataset not loaded.")
        return jsonify({"message": "Dataset not loaded."}), 500

    query = request.json.get('query')

    if not query:
        print("No query provided.")
        return jsonify({"message": "No query provided."}), 400

    try:
        recommended_movies = content_based(query, top_250, cosine_sim)

        if isinstance(recommended_movies, list):
            return jsonify(recommended_movies)

        return jsonify({"message": recommended_movies}), 404
    except Exception as e:
        print(f"Error during recommendation: {e}")
        return jsonify({"message": "An error occurred during recommendation."}), 500

if __name__ == '__main__':
    app.run(port=5000)
