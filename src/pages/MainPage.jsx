import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WatchOnlineMovies from '../components/WatchOnlineMovies';
import WatchOnlineTvShows from '../components/WatchOnlineTvShows';
import CategoryList from '../components/Category';
import InTheaters from '../components/InTheaters';


const MainPage = () =>  {
  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: 'rgb(5, 30, 52)' }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
              <CategoryList/>
        </Grid>
        <Grid item xs={10}>
            <Box sx={{ 
              width: '100%'}}>
              <InTheaters/>
              <WatchOnlineMovies/>
              <WatchOnlineTvShows/> 
          </Box>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default MainPage
