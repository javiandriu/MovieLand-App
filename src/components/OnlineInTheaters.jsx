import { useState,useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import {InTheatersCollectionPage} from '../helpers/api'


const OnlineIntheaters = () => {
    const [inTheatersCollection, setInTheatersCollection] = useState([])


    useEffect(() => {
      const promise = InTheatersCollectionPage()
      promise.then(results => {
        console.log(results)
         setInTheatersCollection(results)
         
      })
  
    },[])
  

  return (
    <>
    <h1>In Theaters</h1>
    <ItemsContainer results={inTheatersCollection}/>
    

    </>
  )
}

export default OnlineIntheaters