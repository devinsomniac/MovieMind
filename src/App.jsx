import React from "react";
import bg from "./assets/bg.jpg";
import { useState } from "react";
import Search from "./Components/Search";
import SearchButton from "./Components/SearchButton";
import MyCard from "./Components/MyCard";

const App = () => {


  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="form py-5 my-10 h-10  flex flex-col items-center sm:flex-row">
        <Search />
        <SearchButton />
      </div>
      <div className="my-10 recommendation flex flex-1 flex-wrap justify-center items-center">
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>


      </div>
    </div>
  );
};

export default App;
