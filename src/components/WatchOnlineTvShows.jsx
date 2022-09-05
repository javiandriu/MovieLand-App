import {useEffect, useState}from 'react'
import ItemsContainer from './ItemsContainer'
import { searchMostPopularTvShow } from '../helpers/searchMovie'

const WatchOnlineTvShows = () => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const promise = searchMostPopularTvShow()
    promise.then(results => {
      setTvShows(results.items)
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