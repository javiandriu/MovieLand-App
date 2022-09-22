import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import { TvShowsCollectionPage } from '../helpers/api'


const OnlineTvShows = () => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const promise = TvShowsCollectionPage()
    promise.then(results => {
      setTvShows(results)
    })

  },[])

  return (
    <>
        <h1>Online TV Shows</h1>
        <ItemsContainer results={tvShows}/>
    </>
    
  )
}

export default OnlineTvShows