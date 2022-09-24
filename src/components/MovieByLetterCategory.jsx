import {useEffect, useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { searchMovieByLetter } from '../helpers/api';

const MovieByLetterCategory = ({letter}) => {
    const [movieByLetter, setMovieByLetter] = useState([])

    useEffect(() => {
        const movies= searchMovieByLetter(letter)
        movies.then(response => {
            setMovieByLetter(response)
        })
    },[letter])
  return (
    <>
        <h1>MOVIES BY THE LETTER: {letter}</h1>
        <ItemsContainer results={movieByLetter}/>
    </>
  )
}

export default MovieByLetterCategory