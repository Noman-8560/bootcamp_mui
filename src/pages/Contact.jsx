import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const ContactPage = () => {
  return (
    <Container>
      <Grid container spacing={3} marginTop={5}>
        {/* Contact Info */}
        <Grid item xs={12} md={6} style={{ textAlign: "center" }} marginTop={5}>
          <Box marginBottom={3}>
            <Typography variant="h4" component="h1">
              Contact Us
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography variant="body1">
              <strong>Email:</strong> ecom@gmail.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +92 3008497902
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> G9 (4), Islamabad, Pakistan
            </Typography>
          </Box>
        </Grid>

        {/* Map */}
        <Grid item xs={12} md={6}>
          <Box height={300} marginBottom={3}>
            {/* Replace the map embed code with your own */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.9995060271!2d72.75575818185712!3d33.6162491186797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1685260759514!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
