import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const LetterButtons = () => {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Grid container spacing={1}>
      {
          letters.map(letter => (
            <Grid item xs={4}>
                <div>
                  <Button component="a" href={`movies/letter/${letter.toLowerCase()}`}  variant="contained" size="small">
                      {letter}
                  </Button> 
                </div>
            </Grid>
        ))
      }
      </Grid>
    </Box>
  )
}

export default LetterButtons