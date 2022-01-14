import { Link } from "react-router-dom";

function Movie({id, title, year, medium_cover_image, genres}) {
    return (
        <div>
            <Link to={`/movie/${id}`}>
                <h2>{title}({year})</h2>
            </Link>
            <img src={medium_cover_image}/>
            <ul>
                {genres ? genres.map((val, ind) => (
                    <li key={ind}>{val}</li>
                )) : null}
            </ul>
        </div>
    );
}

export default Movie;