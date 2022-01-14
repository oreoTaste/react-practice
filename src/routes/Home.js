import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [isLoading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
      fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year").then((val) => val.json()).then((json) => {
        if(json.status === 'ok') {
          setLoading(false);
          setMovieList(() => json.data.movies)
        }
      });  
    }, [])
  
    return (
      <>
      <h1>Movie Cinema {movieList.length > 0 ? `(${movieList.length})` : null}</h1>
      {isLoading ? "Loading..." : null }
      <div>
        {movieList.map(({title, year, id, medium_cover_image, genres}, ind) => (
          <Movie key={id} id={id} title={title} year={year} medium_cover_image={medium_cover_image} genres={genres}/>
        ))}
      </div>
      </>
    );
  }
  
  export default Home;