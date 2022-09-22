import {Routes,Route,} from "react-router-dom";

import MainPage from "../pages/MainPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviesPage from "../pages/MoviesPage";
import TvShowDetailPage from "../pages/TvShowDetailPage";
import TvShowsPage from "../pages/TvShowsPage";


const MovieLandRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/movies" element={<MoviesPage/>} />
                <Route path="/tvshows" element={<TvShowsPage/>} />
                <Route path="movies/:id" element={<MovieDetailPage />} />
                <Route path="tvshows/:id" element={<TvShowDetailPage />} />
            </Routes>
    )
}

export default MovieLandRouter