import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fomulaire (props) {
 
 
return (<div>  <h1>ajouter un film </h1>
  <div>
  <label> Titre : </label>
  <input onChange={props.settitle} ></input>
   </div>
  <div>
  <label> Description : </label>
  <textarea onChange={props.setdescription} ></textarea>
  </div>
  <div>
  <label> PosterURL : </label>
  <input onChange={props.setposterURL} ></input>
  </div>
  <div>
 <label>Note : </label>
 <select  onChange={props.setrating} >
  <option      value='' >-</option>
   <option    value='⭐' >⭐</option>
   <option    value='⭐⭐' >⭐⭐</option>
   <option    value='⭐⭐⭐' >⭐⭐⭐</option>
   <option    value='⭐⭐⭐⭐' >⭐⭐⭐⭐</option>
   <option    value='⭐⭐⭐⭐⭐' >⭐⭐⭐⭐⭐</option>
 </select>
</div>
 
<Button variant="primary"  onClick={props.addMovie} > Ajouter</Button>
<Button variant="primary"  onClick= {props.changeValue}   > Annuler</Button>
</div> );

}



function useVisible(initialvalue=false){
  const [visibleF, setvisible]= useState(initialvalue)
  const changeValue = ()=> setvisible((v)=>!v);
  return [visibleF,changeValue]
}



function AddMovie(props ){
  const [visibleF, changeValue ]=useVisible(false)
  
   return (
      <Card style={{ width: '18rem', border:'solid' , textAlign:'center' }}>
      <Card.Body>  
      {(!visibleF)? <Button variant="primary" onClick= {changeValue}  >Ajouter Un film</Button> : <Fomulaire changeValue={changeValue}  settitle={props.settitle} setdescription={props.setdescription} setposterURL={props.setposterURL} setrating={props.setrating} addMovie={props.addMovie} />}
      </Card.Body>
      </Card> );
    
  }
  
  export default AddMovie;

  