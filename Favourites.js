import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(MovieContext);

  return (
    <div className="favorites">
      <h2>Favorite Movies</h2>
      {favorites.length === 0 && <p>No favorite movies yet!</p>}
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => removeFromFavorites(movie.imdbID)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
