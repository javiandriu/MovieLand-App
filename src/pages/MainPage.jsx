import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Carousel from '../components/Carousel';
import Top10PopularMovies from '../components/Top10PopularMovie';
import MovieItem from '../components/MovieItem';
import SeriesItem from '../components/SeriesItem';



const MainPage = () =>  {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Carousel/>
        <Top10PopularMovies/>
        <MovieItem/>
        <SeriesItem/> 
      </Stack>
    </Box>
  );
}

export default MainPage