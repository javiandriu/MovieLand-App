import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { searchTop10TvShows } from '../helpers/searchMovie'

const Top10TvShows = () => {
  const [popularTvShows, setPopularTvShows] = useState([])

  useEffect(() => {
    const promise = searchTop10TvShows()
    promise.then(results => {
        setPopularTvShows(results.items)
    })

  },[])

  return (
    <>
      <h1>Top 10 Tv Shows in ZaqueLand</h1>
      <ItemsContainer results={popularTvShows}/>
    
    </>
  )
}

export default Top10TvShows