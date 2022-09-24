import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WatchOnlineMovies from '../components/WatchOnlineMovies';
import WatchOnlineTvShows from '../components/WatchOnlineTvShows';
import Category from '../components/Category';
import WatchInTheaters from '../components/WatchInTheaters';
import LetterButtons from '../components/LetterButtons';


const MainPage = () =>  {
  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: 'rgb(5, 30, 52)' }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
              <Category/>
              <LetterButtons/>
        </Grid>
        <Grid item xs={10}>
            <Box sx={{ 
              width: '100%'}}>
              <WatchInTheaters/>
              <WatchOnlineMovies/>
              <WatchOnlineTvShows/> 
          </Box>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default MainPage
