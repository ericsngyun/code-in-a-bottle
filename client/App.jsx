import React, { useEffect } from 'react';
// import { BrowserRouter as Router,  Routes} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, createTheme, ThemeProvider} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './src/actions/posts';

import bottleimg from './src/images/message-in-a-bottle.png';
import Posts from './src/components/Posts/Posts';
import Form from './src/components/Form/Form';
import { orange } from '@mui/material/colors';

// import './styles.css';

const theme = createTheme({
  status: {
    danger: 'orange'
  },
  palette: {
    type: 'light',
    primary: {
      main: '#64b5f6',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#eeeeee',
    },
  },
})


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch])

  return (
    <ThemeProvider theme = {theme}>
      <div>
        <AppBar  position = "fixed" sx = {{
            paddingLeft: 3,
            marginBottom: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '75px'}}>
            <img src = {bottleimg} alt = "bottle" height = "60" width = "60" sx = {{marginLeft: '15px'}}/>
            <Typography variant = "h2" sx ={{fontSize : 40}}> code in a bottle</Typography>
          </AppBar>
        <Container maxWidth = "xl" sx = {{paddingTop: '75px'}}>
          <Grow in>
            <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
              <Grid item xs = {12} sm = {7}>
                <Posts />
              </Grid>
              <Grid item xs = {12} sm = {4}>
                <Form />
              </Grid>
            </Grid>
          </Grow>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App;