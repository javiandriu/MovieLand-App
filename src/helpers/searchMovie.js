import SearchResult from "../data/MovieData.json"
import ComingSoon from "../data/ComingSoon.json"
import MostPopularMovie from "../data/MostPopularMovies.json"
import MostPopularTvShow from "../data/MostPopularTvShow.json"
import Top10PopularMovies from "../data/Top10PopularMovies.json"
import Top10TvShows from "../data/TOP10TvShows.json"
import MovieDetail from "../data/MovieDetail.json"

export const searchMovie = (text) => {
   return Promise.resolve(SearchResult)
    
}

export const searchComingSoonMovie = (text) => {
    return Promise.resolve(ComingSoon)
     
 }
 export const searchMostPopularMovie = (text) => {
    return Promise.resolve(MostPopularMovie)
     
 }

 export const searchMovieDetail = (id) => {
    return Promise.resolve(MovieDetail)
 }

 export const searchMostPopularTvShow = (text) => {
    return Promise.resolve(MostPopularTvShow)
 }

 export const searchTop10PopularMovies = (text) => {
   return Promise.resolve(Top10PopularMovies)
}

export const searchTop10TvShows = (text) => {
   return Promise.resolve(Top10TvShows)
}