import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


function MovieDescription (props){
    let { id } = useParams();
    console.log(id );
    const {Movies} = props
    // const movie = Movies.find((item)=>{item.id})
    return (
    
        <Card  style={{}}>
        
        <Card.Body>
          <Card.Title >{props.title}</Card.Title>
          <Card.Text>
            Discrption: {props.description}
          </Card.Text>
          <Card.Link>{props.posterURL}</Card.Link>
          <Card.Text>{props.rating}</Card.Text>
          <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={props.posterURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
         </div>
          
        </Card.Body>
      </Card> );
}

export default MovieDescription;