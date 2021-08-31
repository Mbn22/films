
import '../App.css';
import AddMovie from './AddMovie';
import MoviesList from './MoviesList'
import Filter from './Filter';
import {  useState } from 'react';
import MovieDescription from './MovieDescription';

function Home(props) {
    const[movies,setmovies]=useState(props.Movies)
    const [filterText,setfilterText]= useState('') ;  
    const moviesfilter = movies.filter(el=>el.title.includes(filterText));
    const [title,settitle]= useState('')
    const [description,setdescription]= useState('')
    const [posterURL,setposterURL]= useState('')
    const [rating,setrating]= useState('')
    console.log(title,description,posterURL,rating)
    const addMovie=() => {
      if((title==='')||(description==='')||(posterURL==='')||(rating===''))
      alert("merci de  bien remplisre le formulaire")
      else
      setmovies(movies.concat({title:title,description:description,posterURL:posterURL,rating:rating}));
  }
     return (
     <div className="App">
     <Filter movies={movies} searchfonction={(e)=> {setfilterText(()=>e.target.value) }} />
    
     <div className="listMovies">
     <MoviesList movies={moviesfilter}  />
     <AddMovie settitle={(e)=>settitle(e.target.value)} setdescription={(e)=>setdescription(e.target.value)} setposterURL={(e)=>setposterURL(e.target.value)} setrating={(e)=>setrating(e.target.value)} addMovie={addMovie} />
     </div>
  

{/* <MovieDescription rating="⭐" setdescription="ssqsd" title="test" posterURL= "https://www.youtube.com/embed/sY1S34973zA" /> */}

  
     </div>
    );
  }
  export default Home;
