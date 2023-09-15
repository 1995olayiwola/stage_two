import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col,Card} from 'react-bootstrap';
import '../App.css';


function NavScrollExample() {
    const [movies,setMovies]=React.useState([]);
    const [formValues,setFormValues] = React.useState({
        search:""
    });
    const search = ''
    const handleChange=(e)=>{
setFormValues((fv)=>{
    return {
...fv,[e.target.name]:e.target.value
    }
})
    }
 const handleSearch = async()=>{
try{
const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formValues.search}&api_key=9b979c372517159d668828895180769d`);
if(!response.ok){
    throw new Error('Data was not found')
}
const data = await response.json();
setMovies(data.results);
}
catch(err){
alert(err.message)
}
 }
  return (
    <div className='container-nav'>

   
    <Navbar expand="lg" className="navbar-with-bg" >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              value={formValues.search}
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <div>
      <container>
        <Row>
{
    movies.map((item,index)=>{
        return (
          
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
    </Navbar>
    </div>
   
  );
}

export default NavScrollExample;