import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Hero(props) {
  const { hero } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${hero.image})`,
        height: "80vh",
        borderRadius: 0,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={hero.image}
          alt={hero.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />

      <Box
        sx={{
          position: "relative",

          textAlign: "center",
          maxWidth: 750,
          m: "auto",
          p: "30vh 0",
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          {hero.title.toUpperCase()}
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          {hero.description.toUpperCase()}
        </Typography>
        <Link variant="subtitle1" href="#">
          {hero.linkText}
        </Link>
      </Box>
    </Paper>
  );
}

Hero.propTypes = {
  hero: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
