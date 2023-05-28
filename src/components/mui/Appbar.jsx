import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const pages = [
<Link to="/" style={{ textDecoration: 'none', color:'black'}}>Home</Link>,
<Link to="/about" style={{ textDecoration: 'none', color:'black'}}>About</Link>,
<Link to="/contact" style={{ textDecoration: 'none', color:'black'}}>Contact</Link>];

const settings = ["Logout"];

function ResponsiveAppBar({ cartItemCount }) {
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
    <AppBar position="sticky" sx={{ background: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingBagIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-COM
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Stack direction="row" spacing={2} sx={{ border: 1 }}>
              <Link to="/login">
                <Button
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  startIcon={<LoginIcon />}
                >
                  Login
                </Button>
              </Link>
              <Link to="/cart">
                <Button
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  startIcon={<ShoppingCartOutlinedIcon />}
                >
                  Cart ({cartItemCount})
                </Button>
              </Link>
              </Stack>
            </Menu>
          </Box>
          <ShoppingBagIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-COM
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block"}}
                style={{background:"transparent"}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} style={{ display: "flex" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", sm: "block" }, marginRight: "2rem" }}
            >
              <Link to="/login">
                <Button
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  startIcon={<LoginIcon />}
                >
                  Login
                </Button>
              </Link>
              <Link to="/cart">
                <Button
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  startIcon={<ShoppingCartOutlinedIcon />}
                >
                  Cart ({cartItemCount})
                </Button>
              </Link>
            </Stack>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
export default ResponsiveAppBar;
