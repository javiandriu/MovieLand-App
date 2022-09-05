import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import { searchMostPopularMovie } from '../helpers/searchMovie'


const WatchOnlineMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      const promise = searchMostPopularMovie()
      promise.then(results => {
         setMovies(results.items)
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