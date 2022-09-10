import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { Top10PopularMoviesCollection } from '../helpers/api'

const Top10PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const promise = Top10PopularMoviesCollection()
    promise.then(results => {
      setPopularMovies(results)
    })

  },[])

  return (
    <>
      <h1>Top 10 Movies in MovieLand</h1>
      <ItemsContainer results={popularMovies}/>
    
    </>
  )
}

export default Top10PopularMovies