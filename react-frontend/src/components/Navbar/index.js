import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Contact'];
const pageLinks = ['/products', '/pricing', '/blog'];
const settings = ['Orders', 'Logout'];
const loggedIn = true;

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{background:'#ffffff', boxShadow:'none', padding: 0, maxWidth: '100% !important'}}>
      <Container maxWidth="false">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", padding: 0}}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' },
              fontFamily: 'Montserrat',
              fontWeight:700,
              color: '#2F3E46',
              fontSize:'36px',
              textDecoration: 'none',
              padding: '32px 0',
              width: '100%',
              lineHeight: '1.2',
              "&:hover": {
                color: '#52796f',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in',
              },
            }}
          >
            CarbonAltDel
          </Typography>
 {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#2E3E46'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              
               <MenuItem key={'Products'} 
              //  onClick={handleCloseUserMenu}
              component={Link} href="/products"
               >
                  <Typography textAlign="center">Products</Typography>
                </MenuItem>
        
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', flexDirection: 'row', alignItems: 'start', justifyContent: 'start'},
              flexGrow: 1,
              fontFamily: 'montserrat',
              fontWeight: 600,
              letterSpacing: '0rem',
              color: '#2E3E46',
              textDecoration: 'none',
            }}
          >
            CarbonAltDel
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: "row",    justifyContent: "end" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#07060A', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button
                key={'products'}
                href="/products"

                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#07060A', display: 'block', "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Products
              </Button>
              <Button
                key={'cart'}
                href="/cart"

                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#07060A', display: 'block', textAlign: 'center', mx:0, px: 0, "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'} }}
              >
                <ShoppingCartIcon sx={{color: '#07060A'}}/>
              </Button>
          </Box>
          
{/* End mobile */}
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              {loggedIn ? (
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Kai Mayfair" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'#52796f'}}/>
              </IconButton>
              ) : (<></>)}
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right-start',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right-start',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock={true}
            >
              <MenuItem key='profile' onClick={handleCloseUserMenu} component={Link} href='/account'>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} href='/account'>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
