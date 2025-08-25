import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';

import './Popup.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ef6c00',
    },
    secondary: {
      main: '#0097a7',
    },
  },
});

const Popup = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Paper sx={{ paddingX: 2, paddingY: 1 }}>
        <div className='rx-popup'>
          <p>Your popup data</p>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default Popup;
