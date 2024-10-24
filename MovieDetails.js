import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=your_api_key&i=${id}`);
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError('Movie not found.');
        }
      } catch (err) {
        setError('Movie details could not be loaded.');
        console.error("Error fetching movie details:", err); 
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Genre: {movie.Genre}</p>
    </div>
  );
};

export default MovieDetails;
