import {useEffect, useState}from 'react'
import ItemsContainer from './ItemsContainer'
import { MostPopularTvShowCollection } from '../helpers/api'

const WatchOnlineTvShows = () => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const promise = MostPopularTvShowCollection()
    promise.then(results => {
      setTvShows(results)
    })

  },[])

  return (
    <>
        <h1>Watch Online Series</h1>
        <ItemsContainer results={tvShows}/>
    </>
    
  )
}

export default WatchOnlineTvShows