import MovieDetails from '../components/MovieDetails'
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const {movieId} = useParams()
  return (
    <>
     <MovieDetails id={movieId}/>
    </>
  )
}

export default MovieDetailPage