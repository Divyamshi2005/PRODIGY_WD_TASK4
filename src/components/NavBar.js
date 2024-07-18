import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="nav-title">
          CH_PADMAJA_DIVYAMSHI
          </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
