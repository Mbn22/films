import MovieCard from "./MovieCard";
import React from "react";
import { Link } from "react-router-dom";
function MoviesList ({movies}){



    return(
        <React.Fragment  >{
            
            movies.map( (el,index)=>{return( 
            <Link to={`/MovieDescription/${el.id}`}>
            <MovieCard className="listMoviesItems"  key={index} title={el.title} description={el.description} posterURL={el.posterURL} rating={el.rating}  />
            </Link>)})}
            </React.Fragment>
            
         );
}



export default MoviesList;