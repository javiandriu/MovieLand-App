import {Routes,Route,} from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import MainPage from "../pages/MainPage";
import MoviesPage from "../pages/MoviesPage";
import TvShowsPage from "../pages/TvShows";

const MovieLandRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/movies" element={<MoviesPage/>} />
                <Route path="/tvshows" element={<TvShowsPage/>} />
                <Route path="movies/:id" element={<MovieDetails />} />
            </Routes>
    )
}

export default MovieLandRouter