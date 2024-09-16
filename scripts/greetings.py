from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)


# Endpoint to accept input from Node.js and return a greeting
@app.route('/greet', methods=['POST'])
def greet():
    data = request.json
    name = data.get('name')
    greeting = f"Hello, {name}!"
    return jsonify({"greeting": greeting})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Running on port 5001