import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import Navbar from './Components/Navbar';

const App = () => {
  const [movie,setMovie]=React.useState({});
  React.useEffect(()=>{
    const process = ()=>{
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9b979c372517159d668828895180769d').then((data)=>{
        return data.json()
        }).then(result=>{
          console.log(result)
          setMovie(result)
        })
    }
    process()
  },[])
  console.log(movie)
  return (
    <div>
      <Navbar/>
      <container>
        <Row>
        {
        movie?.results?.map((item,index)=>{
          return(
          <Col xs={12} sm={4} md={4} key={index}>
            <card>
            <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path
    }`} data-testid="movie-poster"/>
              <Card.Body>
  <Card.Title data-testid="movie-title">{item.title}</Card.Title>
              </Card.Body>
            </card>
   <Card.Text data-testid="movie-release-date">{item.release_date}</Card.Text>
   
          </Col>
              
           
         
        
          )
        })
      }
        
        </Row>
      </container>
     
    </div>
  )
}

export default App