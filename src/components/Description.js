import movieStyles from "../components/Movie.module.css";
import styles from "./Description.module.css";
import star from "../img/star.png";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Description({url, year, rating, genres, title, medium_cover_image, description_full, background_image}) {
return (
      <div className={styles.movie}>
      <div className={styles.movie__wrapper}>
        <img className={styles.movie__img} src={medium_cover_image} alt="영화 커버이미지"/>
        <div>
          <h1>
            <Link to={url}>{title}</Link>
          </h1>
          <div>
            {genres.map((val, ind) => (
              <span className={movieStyles.movie__genres} key={ind}>{val}</span>
            ))}
          </div>
          <h4>{year}</h4> 
          <h4>
          {
            Array.from(Array(Math.floor(rating / 2)), (_,i) => <img key={i} className={styles.star} src={star} alt="별"/>)
          }
          {<img className={styles.star} src={star} alt="별"
                style={{
                  "clipPath": `polygon(0% 0%, 
                                      ${(Math.ceil(rating/2) - rating/2).toFixed(2) * 100}% 0%,
                                      ${(Math.ceil(rating/2) - rating/2).toFixed(2) * 100}% 100%,
                                      0 100%)`
                }}
            />
          }
          </h4>
        </div>
      </div>
      <div className={styles.description}>{description_full}</div>
      <img src={background_image} alt="영화 배경화면"/>
    </div>   
    );
}
Description.prototypes = {
    url: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    rating: propTypes.number.isRequired,
    genres: propTypes.string,
    title: propTypes.string.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    description_full: propTypes.string.isRequired,
    background_image: propTypes.string.isRequired,
}
export default Description;