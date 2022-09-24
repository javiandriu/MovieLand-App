import {Routes,Route,} from "react-router-dom";
import InTheatersPage from "../pages/InTheatersPage";
import MainPage from "../pages/MainPage";
import MovieByLetterPage from "../pages/MovieByLetterPage";
import MovieCategoryPage from "../pages/MovieCategoryPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviesPage from "../pages/MoviesPage";
import TvShowsPage from "../pages/TvShowsPage";


const MovieLandRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/movies" element={<MoviesPage/>} />
                <Route path="/tvshows" element={<TvShowsPage/>} />
                <Route path="/intheaters" element={<InTheatersPage/>} />
                <Route path="/movies/:movieId" element={<MovieDetailPage />} />
                <Route path="/movies/genres/:category" element={<MovieCategoryPage />} />
                <Route path="/movies/letter/:letter" element={<MovieByLetterPage />} />
            </Routes>
    )
}

export default MovieLandRouter