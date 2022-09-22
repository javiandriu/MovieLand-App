const APIKEY = process.env.REACT_APP_APIKEY

export const searchMovie = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/Search/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
     
 }

 export const searchMovieDetail = async(id) => {
  const data = await fetch(`https://imdb-api.com/en/API/Title/${APIKEY}/${id}`)
  return data.json()
}
 
export const WatchInTheaters= async () => {
  const data = await fetch(`https://imdb-api.com/en/API/InTheaters/${APIKEY}`)
  const {items} = await data.json()
  return items.slice(0, 16)
}


export const WatchOnlineMovie = async () => {
  const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`)
  const {items} = await data.json()
  return items.slice(0, 16) 
}
export const WatchOnlineTvShow = async () => {
  const data = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${APIKEY}`)
  const {items} = await data.json()
  return items.slice(0, 16)
}

  export const MoviesCollectionPage = async () => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 30) 
  }
  export const TvShowsCollectionPage = async () => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 50)
  }