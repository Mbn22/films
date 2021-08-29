import MovieCard from "./MovieCard";
import React from "react";
function MoviesList ({movies}){



    return(
        <React.Fragment  >{movies.map( (el,index)=> < MovieCard className="listMoviesItems"  key={index} title={el.title} description={el.description} posterURL={el.posterURL} rating={el.rating}  />)}</React.Fragment>
         );
}



export default MoviesList;