import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import { WatchOnlineMovie } from '../helpers/api'


const WatchOnlineMovies = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
      const promise = WatchOnlineMovie()
      promise.then(results => {
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