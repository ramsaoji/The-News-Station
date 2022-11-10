import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

function NavBar(props) {
  const { setCategory, setArticles, setcategoryClickedIndex } = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      {/* The News Station */}
      <Typography
        variant="h5"
        component="h6"
        sx={{
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          margin: 2,
        }}
      >
        <NewspaperIcon
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 2,
          }}
        />
        THE NEWS STATION
      </Typography>

      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* For Desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {categories.map((c, i) => (
                <Button
                  key={c}
                  onClick={() => {
                    setArticles([]);
                    setCategory(c);
                    setcategoryClickedIndex({ i });
                  }}
                  sx={{
                    // my: 1,
                    color: "inherit",
                    display: "block",
                  }}
                >
                  {c}
                </Button>
              ))}
            </Box>

            {/* For Mobile*/}

            <NewspaperIcon
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="h6"
              sx={{
                display: { xs: "flex", md: "none", justifyContent: "center" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              THE NEWS STATION
            </Typography>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuIcon onClick={handleOpenNavMenu} color="inherit" />
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
                  textTransform: "uppercase",
                }}
              >
                {categories.map((c, i) => (
                  <MenuItem
                    key={c}
                    onClick={() => {
                      setArticles([]);
                      setCategory(c);
                      setcategoryClickedIndex({ i });
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{c}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
export default NavBar;
