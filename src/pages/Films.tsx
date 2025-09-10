import { useEffect, useState } from "react";

type Movie = {
    Title: string;
    ReleaseDate: string;
    YT_Link: string;
    Directors: string;
    Runtime: string;
};

function Films() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(`http://localhost:3000/films/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response was not ok');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setMovies(data.movies)
            })
            .catch(error => setError(error.message));
    }, [])

    if (error) return <h2>Error: {error}</h2>;
    if (!movies) return <h2> Loading..</h2>

    return (
        <div>
            <h1>Films</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <strong>{movie.Title}</strong> —{" "}
                        {new Date(movie.ReleaseDate).toDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Films;