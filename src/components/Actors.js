import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors=actors.map((actor, index) => {
    return <div key={index}>
      <h3>Name: {actor.name}</h3>
      Movies: <ul>
        {actor.movies.map((movie, index)=>{
          return <li key={index}>{movie}</li>
        })}
      </ul>
    </div>
  })
  return <div>
    <h1>Actors Page</h1>
    {renderActors}
  </div>;
}

export default Actors;
