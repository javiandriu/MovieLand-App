import {useEffect, useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { searchCategoryMovie } from '../helpers/api';

const MovieCategory = ({category}) => {
    const [categoryMovie, setCategoryMovie] = useState([])
    
    useEffect(() => {
        const movies= searchCategoryMovie(category)
        movies.then(response => {
            console.log(response)
            setCategoryMovie(response)
        })
    },[category])
    
  return (
    <>
        <h1>{category} Movies</h1>
        <ItemsContainer results={categoryMovie}/>
    </>
  )
}

export default MovieCategory