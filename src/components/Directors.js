import React from 'react';
import { directors } from '../data';


const renderDirectors = () => {
  return (
    directors.map((director, index) => {
      return <div key={index}>
      <h3>Naem: {director.name}</h3>
      <p>Movies: </p>
      {director.movies.map((movie, index) => {
        return <li key={index}>{movie}</li>
      })}
      </div>
    })
  )
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
