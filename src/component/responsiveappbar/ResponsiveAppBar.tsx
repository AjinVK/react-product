import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/Huewine_LOGO.svg';
import '../responsiveappbar/style.css'
import { Zoom } from '@mui/material';

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
            // href="#"
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
            <Tooltip
              title="Open settings"
              // arrow
              enterDelay={150}
              leaveDelay={0}
              slots={{
                transition: Zoom,
              }}
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 0],
                      },
                    },
                  ],
                },
                tooltip: {
                  sx: {
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    fontSize: '0.875rem',
                    borderRadius: 2,
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.2s ease-in-out',
                  },
                },
                arrow: {
                  sx: {
                    color: 'white',
                  }
                }
              }}
            >
              <IconButton
                size="large"
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0.5,
                }}
                aria-label="Open user menu"
              >
                <Avatar
                  src="/default-avatar.png"
                  alt="User Avatar"
                  sx={{
                    width: 40,
                    height: 40,
                  }}
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
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === 'Logout') {
                      navigate('/');
                    }
                  }}
                  sx={{
                    justifyContent: 'flex-start',
                    gap: 1.5,
                    px: 2.5,
                    py: 1,
                    borderRadius: 3,
                    transition: 'background-color 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {setting === 'Logout' && (
                    <LogoutIcon fontSize="small" color="action" />
                  )}
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="text.primary"
                  >
                    {setting}
                  </Typography>
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
