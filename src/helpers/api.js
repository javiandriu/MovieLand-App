const APIKEY = process.env.REACT_APP_APIKEY

export const searchMovie = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/Search/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
     
 }
 
 
  export const MostPopularMovieCollection = async () => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 20)
      
  }
 
  export const MostPopularTvShowCollection = async () => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 20)
  }


  export const searchMovieDetail = async(id) => {
    const data = await fetch(`https://imdb-api.com/en/API/Title/${APIKEY}/${id}`)
    return data.json()
  }
 
  
 
  export const Top10PopularMoviesCollection = async () => {
    const data = await fetch(`https://imdb-api.com/en/API/Top250Movies/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 10)
 }
 
 export const Top10TvShowsCollection = async() => {
    const data = await fetch(`https://imdb-api.com/en/API/Top250TVs/${APIKEY}`)
    const {items} = await data.json()
    return items.slice(0, 10)
 }