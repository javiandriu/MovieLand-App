import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Buttons = () => {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" size="medium">
          Previous
        </Button>
        <Button variant="contained" size="medium">
          Next
        </Button>
      </div>
    </Box>
  );
}

export default Buttons
