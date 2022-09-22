import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { WatchInTheaters  } from '../helpers/api'

const InTheaters = () => {
  const [popularTvShows, setPopularTvShows] = useState([])

  useEffect(() => {
    const promise = WatchInTheaters()
    promise.then(results => {
        setPopularTvShows(results)
    })

  },[])

  return (
    <>
      <h1>Coming Soon</h1>
      <ItemsContainer results={popularTvShows}/>
    
    </>
  )
}

export default InTheaters