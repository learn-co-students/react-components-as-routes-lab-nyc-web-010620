import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(director => {
      return <div> 
        {director.name}
        <ul> 
          {director.movies.map(movie => <li> {movie} </li>)} 
        </ul> 
      </div>
      })}
    </div>
  );
};

export default Actors;
