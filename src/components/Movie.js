function Movie({id, title, year, medium_cover_image, genres}) {
    return (
        <div>
            <a href={id}>
                <h2>{title}({year})</h2>
            </a>
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