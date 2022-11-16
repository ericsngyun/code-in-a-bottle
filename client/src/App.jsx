import React from 'react';
// import { BrowserRouter as Router,  Routes} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import bottleimg from './images/message-in-a-bottle.png';
import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';

function App() {
  return (
    <Container maxWidth = "xl">
      <img src = {bottleimg} alt = "bottle" height = "60" />
    </Container>
  )
}

export default App;