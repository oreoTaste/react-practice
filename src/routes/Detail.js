import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const id = useParams()["id"];
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((val) => val.json())
      .then((json) => {
        if (json.status === "ok") {
          setMovie(() => json.data.movie);
          console.log(json.data.movie);
          setLoading(false);
        }
      });
  }, []);

  return (
    <>
      <h1>Movie Cinema {!movie ? `(ok)` : null}</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <h1>
            {movie.title}({movie.year}) - {movie.rating}/10
          </h1>
          <img src={movie.background_image} />
          <ul>
            {movie.genres.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
          <span>{movie.description_full}</span>
          <div>
            <a href={movie.url}>링크</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
