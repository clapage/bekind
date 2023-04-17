/*
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink className="nav-link" to="/" exact activeClassName="nav-link-active">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/register" activeClassName="nav-link-active">
        Register
      </NavLink>
      <NavLink className="nav-link" to="/login" activeClassName="nav-link-active">
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;
*/


import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BeKind
        </Typography>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
