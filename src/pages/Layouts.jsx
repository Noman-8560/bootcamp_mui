import React, { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        E-Com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album({ products, onAddToCart }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <main>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
            width="100%"
          />

          <Container sx={{ py: 8 }} maxWidth="lg">
            <Box sx={{ textAlign: "center" }}>
              <TextField
                sx={{ marginBottom: "2rem", width: "50%" }}
                fullWidth
                label="Search Product"
                id="fullWidth"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>

            {/* End hero unit */}
            <Grid container spacing={4}>
              {products
                .filter((product) => {
                  return search.toLowerCase() === ""
                    ? product
                    : product.title.toLowerCase().includes(search);
                })
                .map((product) => (
                  <Grid item key={product} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: "56.25%",
                        }}
                        image={product.imgs}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.title}
                        </Typography>
                        <Typography gutterBottom>{product.price}</Typography>
                        <Typography>{product.content}</Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center", mb: "5px" }}>
                        <Link to="/details">
                          <Button
                            variant="outlined"
                            sx={{ color: "black", borderColor: "black" }}
                            startIcon={<DisplaySettingsOutlinedIcon />}
                            to="/details"
                            // onClick={() => onAddToCart(product)}
                          >
                            Details
                          </Button>
                        </Link>
                        
                        <Button
                          variant="outlined"
                          sx={{ color: "black", borderColor: "black",marginLeft:'2px' }}
                          startIcon={<ShoppingCartOutlinedIcon />}
                          onClick={() => onAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>

        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
