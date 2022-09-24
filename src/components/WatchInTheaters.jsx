import {useEffect,useState} from 'react'
import ItemsContainer from './ItemsContainer'
import { WatchOnlineInTheaters  } from '../helpers/api'

const WatchInTheaters = () => {
  const [inTheatersMovie, setInTheatersMovie] = useState([])

  useEffect(() => {
    const promise = WatchOnlineInTheaters()
    promise.then(results => {
        setInTheatersMovie(results)
    })

  },[])

  return (
    <>
      <h1>In Theaters</h1>
      <ItemsContainer results={inTheatersMovie}/>
    
    </>
  )
}

export default WatchInTheaters