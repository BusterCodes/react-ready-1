import * as React from "react";
//
import Link from "@mui/material/Link";

const MuiLink = ({ href, children }) => {
  return (
    <Link
      variant="button"
      color="text.primary"
      href={href}
      sx={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

export default MuiLink;
