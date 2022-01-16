import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import propTypes from "prop-types";

function Movie({id, title, year, medium_cover_image, genres, description_full}) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={medium_cover_image} alt="영화 커버이미지"/>
            <div className={styles.movie__content}>
                <Link to={`/movie/${id}`}>
                    <h2>{title}</h2>
                    <h5>{year}</h5>
                    <h5 className={styles.movie__content__story}>{description_full.length > 500 ? `${description_full.slice(0,500)}...` : description_full}</h5>
                    <h5>
                        {genres ? genres.map((val, ind) => (
                            <span className={styles.movie__genres} key={ind}>{val}</span>
                        )) : null}
                    </h5>
                </Link>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    genres: propTypes.array,
    description_full: propTypes.string.isRequired
}
export default Movie;