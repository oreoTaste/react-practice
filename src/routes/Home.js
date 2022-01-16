import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      <h1 className={styles.title}>Movie Cinema {movieList.length > 0 ? `(${movieList.length})` : null}</h1>
      {isLoading ? <h3 className={styles.title}>Loading...</h3> : null }
      <div className={styles.wrapper}>
        {movieList.map(({title, year, id, medium_cover_image, genres, description_full}, ind) => (
          <Movie key={id} id={id} title={title} year={year} medium_cover_image={medium_cover_image} genres={genres} description_full={description_full}/>
        ))}
      </div>
      </>
    );
  }
  
  export default Home;