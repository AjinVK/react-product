import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/Huewine_LOGO.svg';
import '../responsiveappbar/style.css'

const settings = ['Logout'];

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="appBar">
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: 80, px: 2, justifyContent: 'space-between' }}>

          <Box
            component="a"
            href="#huewine"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
          >
            <Box
              component="img"
              src={logo}
              alt="Huewine Logo"
              sx={{ height: 150, width: 'auto' }}
            />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 2 }}
          >
            <Box
              component="img"
              src={logo}
              alt="Huewine Logo"
              sx={{ height: 120 }}
            />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton size='large' onClick={handleOpenUserMenu}>
                <Avatar
                  src='/default-avatar.png'
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '48px' }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  handleCloseUserMenu();
                  if (setting === 'Logout') {
                    navigate('/login');
                  }
                }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
