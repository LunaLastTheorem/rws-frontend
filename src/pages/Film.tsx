import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Movie = {
    Title: string;
    ReleaseDate: string;
    YT_Link: string;
    Directors: string;
    Runtime: string;
};

function Film() {
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(`http://localhost:3000/films/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response was not ok');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                if(Array.isArray(data) && data.length > 0){
                    setMovie(data[0])
                }else{
                    setMovie(null)
                }
            })
            .catch(error => setError(error.message));
    }, [id])

    if (error) return <h2>Error: {error}</h2>;
    if (!movie) return <h2>No movie Found...</h2>

    return (
        <>
            <h2>{movie.Title}</h2>
            <h3>Release: {new Date(movie.ReleaseDate).toDateString()}</h3>
            <p>Director: {movie.Directors}</p>
            <p>Runtime: {movie.Runtime}</p>
            <a href={movie.YT_Link}>Watch Trailer</a>
        </>
    );
}

export default Film;