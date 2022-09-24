import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Buttons from '../components/Buttons'
import Category from '../components/Category';
import MovieByLetterCategory from '../components/MovieByLetterCategory';


const MovieByLetterPage = () => {
    const {letter} = useParams()
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
                <MovieByLetterCategory letter={letter.toUpperCase()}/>
                <Buttons/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
}

export default MovieByLetterPage