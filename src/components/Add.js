import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './add.css';
import ResultCard from "./ResultCard";

const Add = () => {
  const [searchValue , setSearchValue]=useState("");
  const [movies , setMovies]=useState([]);

  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=eefbb944`)
    .then((response)=>{
   if(response.data.Search){
   setMovies(response.data.Search);
   }
    }).catch((error)=>console.log(error));

  },[searchValue]);
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input type="text" placeholder="search for amovie"
                    value={searchValue}
                    onChange={(e)=> setSearchValue(e.target.value)}/>
                    
                </div>
                {/* (ul)لو الافلام التي تم البحث عنها أكبر من صفر ضيف ال */}
                {movies.length>0 &&(
                <ul className='results'>
                  {movies.map((movie)=>(
                  <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>))}
                
            </ul>)}
          
            </div>
            </div>  

    </div>
  )
}

export default Add
