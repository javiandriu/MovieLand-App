const APIKEY = process.env.APIKEY

export const searchMovie = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/Search/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
     
 }
 
 
  export const searchMostPopularMovie = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
      
  }
 
  export const searchMostPopularTvShow = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
  }


  export const searchMovieDetail = async(id) => {
    const data = await fetch(`https://imdb-api.com/en/API/Title/${APIKEY}//${id}`)
    const {results} = await data.json()
    return results
  }
 
  
 
  export const searchTop10PopularMovies = async (title) => {
    const data = await fetch(`https://imdb-api.com/en/API/Top250Movies/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
 }
 
 export const searchTop10TvShows = async(title) => {
    const data = await fetch(`https://imdb-api.com/en/API/Top250TVs/${APIKEY}/${title}`)
    const {results} = await data.json()
    return results
 }