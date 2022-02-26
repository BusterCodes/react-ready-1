import * as React from "react";
//
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
import logo from "../../assets/images/react-icon.png";

const NavItem = ({ href, text }) => {
  return (
    <Link
      variant="button"
      color="text.primary"
      href={href}
      sx={{ my: 1, mx: 1.5 }}
    >
      {text}
    </Link>
  );
};

const topNavLinks = [
  { href: "/", text: "Home" },
  { href: "/add-student", text: "Add Student" },
  { href: "/about", text: "About Us" },
];

const TopNav = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Avatar
          alt="logo"
          src={logo}
          sx={{ width: 75, height: 75, m: "5px auto 5px 0" }}
        />
        <nav>
          {topNavLinks.map((item) => (
            <NavItem href={item.href} text={item.text} />
          ))}
        </nav>
        {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
