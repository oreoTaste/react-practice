import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import styles from "./Detail.module.css";

function Detail() {
  const {id} = useParams();
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const fetchUrl = async (url) => {
    const {status, data: {movie}} = await (await fetch(url)).json();
    if (status === "ok") {
      setMovie(() => movie);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUrl(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h1 className={styles.title}>Loading...</h1>
      ) : (
        <Description url={movie.url} year={movie.year} rating={movie.rating} genres={movie.genres} title={movie.title} medium_cover_image={movie.medium_cover_image} description_full={movie.description_full} background_image={movie.background_image} />
      )}
    </>
  );
}

export default Detail;
