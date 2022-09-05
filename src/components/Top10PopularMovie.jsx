import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { searchTop10PopularMovies } from '../helpers/searchMovie'

const Top10PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const promise = searchTop10PopularMovies()
    promise.then(results => {
      setPopularMovies(results.items)
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