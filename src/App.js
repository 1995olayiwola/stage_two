import React from 'react';
import './App.css';


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
      <h1>{movie.title}</h1>
      <div>
      
      </div>
     </div>
  );
}

export default App;
