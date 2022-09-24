import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Buttons from '../components/Buttons'
import Category from '../components/Category';
import MovieCategory from '../components/MovieCategory';


const MovieCategoryPage = () => {
    const {category} = useParams()
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
              <MovieCategory category={category}/>
              <Buttons/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MovieCategoryPage