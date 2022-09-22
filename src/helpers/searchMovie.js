import SearchResult from "../data/MovieData.json"
import MostPopularMovie from "../data/MostPopularMovies.json"
import MostPopularTvShow from "../data/MostPopularTvShow.json"
import MovieDetail from "../data/MovieDetail.json"

export const searchMovie = (text) => {
   return Promise.resolve(SearchResult)
    
}

 export const WatchOnlineMovie = (text) => {
    return Promise.resolve(MostPopularMovie)
     
 }

 export const searchMovieDetail = (id) => {
    return Promise.resolve(MovieDetail)
 }

 export const WatchOnlineTvShow = (text) => {
    return Promise.resolve(MostPopularTvShow)
 }

