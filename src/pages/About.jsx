import React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        E-COM{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AboutPage = () => {
  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: "3rem" }}>
        {/* Content */}
        <Grid item xs={12} md={6}>
          <Box marginBottom={3} marginTop={5}>
            <Typography variant="body1">
              Welcome to our eCommerce store! We strive to provide high-quality
              products and exceptional customer service.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </Typography>
          </Box>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom={3}
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
              alt="About"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
    </Container>
  );
};

export default AboutPage;
