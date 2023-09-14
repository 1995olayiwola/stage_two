import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  const [movie,setMovie] = React.useState({
    
  })
  React.useEffect(()=>{
    const process = ()=>{
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b979c372517159d668828895180769d').then((data)=>{
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
    <div className="App">
      <Container>
      <Row>
        <Col sm={12} md={4}>
        <Card style={{ width: '18rem' }} data-testid="movie-card">
          {movie?.results?.map((item)=>{
            return (
              <div key={item.id}>
<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path
}`} data-testid="movie-poster" />
      <Card.Body>
        <Card.Title data-testid="movie-title">{item.title}</Card.Title>
        <Card.Text data-testid="movie-release-date">
          {item.release_date}
        </Card.Text>
        
      </Card.Body>
      </div>
            )
          })}
      
    </Card>
        </Col>
        
      </Row>
      
    </Container>
      <div>
      
      </div>
     </div>
  );
}

export default App;
