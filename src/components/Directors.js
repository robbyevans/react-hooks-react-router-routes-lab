import React from "react";
import { directors } from "../data";


function Directors() {

  const renderDirectors=directors.map((director, index) => {
    return <div key={index}>
      <h3>Name: {director.name}</h3>
      Movies: <ul>
        {director.movies.map((movie, index)=>{
          return <li key={index}>{movie}</li>
        })}
      </ul>
    </div>
    })

  return <div>
    <h1>Diretors Page</h1>
    {renderDirectors}
  </div>;
}

export default Directors;
