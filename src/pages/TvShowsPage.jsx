import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Buttons from '../components/Buttons'
import Category from '../components/Category';
import OnlineTvShows from '../components/OnlineTvShows'

const TvShowsPage = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: 'rgb(5, 30, 52)' }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
              <Category/>
        </Grid>
        <Grid item xs={10}>
            <Box sx={{ 
              width: '100%'}}>
              <OnlineTvShows/>
              <Buttons/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default TvShowsPage