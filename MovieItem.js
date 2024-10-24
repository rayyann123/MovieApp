import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired, 
    Year: PropTypes.string.isRequired,  
    imdbID: PropTypes.string.isRequired,
  }).isRequired, 
};

export default MovieItem;
