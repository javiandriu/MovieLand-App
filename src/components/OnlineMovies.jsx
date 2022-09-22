import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import {MoviesCollectionPage} from '../helpers/api'


const OnlineMovies = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
      const promise = MoviesCollectionPage()
      promise.then(results => {
        console.log(results)
         setMovies(results)
         
      })
  
    },[])
  

  return (
    <>
    <h1>Online Movies</h1>
    <ItemsContainer results={movies}/>
    

    </>
  )
}

export default OnlineMovies