import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { searchMovieDetail } from '../helpers/api';

const MovieDetails = () => {
    const [detailsMovie, setDetailsMovie] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const movies= searchMovieDetail(id)
        movies.then(response => {
            setDetailsMovie(response)
        })
    },[id])
    
  return (
    <>
        <section>
            <div>
                <h1>{detailsMovie.title}</h1>
                <ul>
                    <li>{detailsMovie.year}</li>
                    <li>{detailsMovie.contentRating}</li>
                    <li>{detailsMovie.runtimeStr}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>{detailsMovie.imDbRating}</li>
                    
                </ul>
            </div>
        </section>

        <section>
            <img src= {detailsMovie.image} alt= {detailsMovie.title}></img>
        </section>


    </>
  )
}

export default MovieDetails