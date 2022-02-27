import * as React from "react";
//
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        bottom: 0,
        height: "10vh",
      }}
    >
      <Copyright sx={{ my: 5 }} />
    </Box>
  );
};

export default Footer;
