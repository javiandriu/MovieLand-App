import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import { MostPopularMovieCollection } from '../helpers/api'


const WatchOnlineMovies = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
      const promise = MostPopularMovieCollection()
      promise.then(results => {
        console.log(results)
         setMovies(results)
         
      })
  
    },[])
  

  return (
    <>
    <h1>Watch Online Movies</h1>
    <ItemsContainer results={movies}/>
    

    </>
  )
}

export default WatchOnlineMovies