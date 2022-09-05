import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from '../components/Carousel';
import Top10PopularMovies from '../components/Top10PopularMovie';
import Top10TvShows from '../components/Top10TvShows';
import WatchOnlineMovies from '../components/WatchOnlineMovies';
import WatchOnlineTvShows from '../components/WatchOnlineTvShows';

const MainPage = () =>  {
  return (
    <Box sx={{ width: '100%' }}>
        <Carousel/>
        <Top10PopularMovies/>
        <Top10TvShows/>
        <WatchOnlineMovies/>
        <WatchOnlineTvShows/> 
    </Box>
  );
}

export default MainPage