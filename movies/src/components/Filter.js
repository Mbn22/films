import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Filter(props){
 
 
 
 
    return (
      <div className="Filter"  >
          <Navbar style={{backgroundColor:'#0000FF' , border:'solid black'}} expand="lg"   >
  <Container className="container " >
    <h1 style={{color:'white'}} > Liste des film </h1>
    <Navbar.Toggle  />
    <input   onChange={props.searchfonction}></input>
  </Container>
</Navbar>
          
          
     </div>
  );  
}
export default Filter ;