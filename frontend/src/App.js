import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default App;
