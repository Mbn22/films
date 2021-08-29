
import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList'
import Filter from './components/Filter';
import {  useState } from 'react';


function useVisible(initialvalue=false){
  const [visibleF, setvisible]= useState(initialvalue)
  const changeValue = ()=> setvisible((v)=>!v);
  return [visibleF,changeValue]
}






function App() {
  const[movies,setmovies]=useState([{title:"12film1",description:"film1",posterURL:"film1",rating:"film1" },{title:"film2",description:"film2",posterURL:"film2",rating:"film2" }])
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
   <button variant="primary"  onClick={addMovie} > Ajouter</button>
   </div>
  );
}

export default App;
