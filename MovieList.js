import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import SearchBar from './SearchBar';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=your_api_key&s=${query}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError('No movies found for your search query.');
      }
    } catch (err) {
      console.error("Error fetching movies:", err); 
      setError('Something went wrong, please try again.');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    searchMovies('trending');
  }, []);
  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>} 
      <div className="movie-list">
        {movies && movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
