import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Carousel from '../components/Carousel';
import Top10PopularMovies from '../components/Top10PopularMovie';
import MovieItems from '../components/MovieItems';
import SeriesItems from '../components/SeriesItems';



const MainPage = () =>  {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Carousel/>
        <Top10PopularMovies/>
        <MovieItems/>
        <SeriesItems/> 
      </Stack>
    </Box>
  );
}

export default MainPage