
import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList'
import Filter from './components/Filter';
import Home from './components/Home';
import {  useState } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import MovieCard from './components/MovieCard';
import MovieDescription from './components/MovieDescription'

function App() {
  
   const Movies=[
      {id : 1,
         title:"Forrest Gump",
      description:"Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
      posterURL:"https://www.youtube.com/watch?v=bLvqoHBptjg&ab_channel=ParamountMovies",
      rating:"⭐⭐⭐⭐⭐" 
      },
      {id : 2,
         title:"La Liste de Schindler",
      description:"Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.",
      posterURL:"https://www.youtube.com/watch?v=ONWtyxzl-GE&ab_channel=UniversalPicturesFrance",
      rating:"⭐⭐⭐⭐"
       },
   {id : 3,
      title:"Le Parrain",
   description:"En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, " ,
   parrain:" de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...",
   posterURL:"https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers",
   rating:"⭐⭐⭐⭐⭐" 
}]
   return (
   <BrowserRouter>
   <Switch>
   <Route path="/" >
      <Home Movies={Movies}/>
      </Route>
   <Route path="/Ajouter-un-film" component={AddMovie} />
   <Route path="/Rechercher" component={Filter} />
   <Route path="/MovieCard" component={MovieCard} />
   <Route path="/MovieDescription/:id" component={MovieDescription}/>
      {/* <MovieDescription Movies={Movies} />
      </Route> */}
  </Switch>
   </BrowserRouter>
   );
}

export default App;
