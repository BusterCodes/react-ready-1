import React from "react";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import TopNav from "./TopNav";

function Layout({ children }) {
  return (
    <>
      <TopNav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "90vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
