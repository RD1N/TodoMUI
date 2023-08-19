import './App.css';
import BottomAppBar from "./BottomAppBar";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ListTasks from "./ListTasks";
import {ThemeProvider, createTheme} from '@mui/material'


const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
        },
        secondary: {
            main: '#ED6C03',
        },
    },
});

function App() {
  return (
      <React.Fragment>
          <ThemeProvider theme={theme}>
              <BottomAppBar/>
                  <CssBaseline />
                  <Paper square sx={{ pb: '50px' }}>
                      <Typography
                          variant="h4"
                          gutterBottom
                          component="div"
                          sx={{ p: 4, pb: 2 }}
                          color="primary"
                      >
                          TODO
                      </Typography>
                      <ListTasks/>
                  </Paper>

          </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
