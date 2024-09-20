import React from "react";
import bg from "./assets/bg.jpg";
import { useState } from "react";
import Search from "./Components/Search";
import SearchButton from "./Components/SearchButton";
import MyCard from "./Components/MyCard";
import axios from "axios";

const App = () => {
  const [query,setQuery] = useState('')
  const [error,setError] = useState()
  const [recommendation,setRecommendation] = useState([])
  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3001/recommend', { userQuery: query });
      setRecommendation(response.data);
    } catch (error) {
      setError(error.message); // Store the error message in state
      console.error("There has been an error recommendation:", error);
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="form py-5 my-10 h-10  flex flex-col items-center sm:flex-row">
        <Search
          query ={query}
          setQuery = {setQuery}
        />
        <SearchButton 
        handleSearch = {handleSearch}/>
      </div>
      <div className="my-10 recommendation flex flex-1 flex-wrap justify-center items-center">
      {recommendation.map((movie, index) => (
          <MyCard
            key={index}
            title={movie.title}
            poster_path={movie.poster_path}
            genres={movie.genres}
            vote_average={movie.vote_average}
          />
        ))}


      </div>
    </div>
  );
};

export default App;
