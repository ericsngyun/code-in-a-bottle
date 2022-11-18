import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router,  Routes} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, createTheme, ThemeProvider, Card, Avatar} from '@mui/material';
import { useDispatch} from 'react-redux';
import { getPosts } from './src/actions/posts';
import CustomizedDialogs from './src/components/Modal';

import bottleimg from './src/images/message-in-a-bottle.png';
import Posts from './src/components/Posts/Posts';
import Form from './src/components/Form/Form';
import { maxWidth } from '@mui/system';

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
    third: {
      main: '#ff9800'
    },
    background: {
      default: '#eeeeee',
    },
  },
})


function App() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
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
            <Typography variant = "h2" sx ={{fontSize : 40, marginRight: '20px'}}> code in a bottle</Typography>
          <CustomizedDialogs>
            <Form/>
          </CustomizedDialogs>

        </AppBar>
        <Container maxWidth = 'false' sx = {{paddingTop: '100px'}}>
          <Grid container sx = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <Grid item>
              <Grow in>
                <Card >
                  <Typography variant = 'h4' > Filter by : </Typography>
                </Card>
              </Grow>
            </Grid>
            <Grid item>
              <Grow in>
                <Grid container justify = "space-between" alignItems = "stretch" spacing = {3} gridTemplateRows = '3' >
                  <Grid item>
                    <Posts />
                  </Grid>
                </Grid>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App;