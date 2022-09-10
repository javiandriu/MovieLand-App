import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { Top10TvShowsCollection } from '../helpers/api'

const Top10TvShows = () => {
  const [popularTvShows, setPopularTvShows] = useState([])

  useEffect(() => {
    const promise = Top10TvShowsCollection()
    promise.then(results => {
        setPopularTvShows(results)
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