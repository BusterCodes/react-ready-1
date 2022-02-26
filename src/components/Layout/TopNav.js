import * as React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../app/features/counter/counterSlice.js";
// components - MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
// components - internal
// import MuiLink from "../Nav/MuiLink";
// assets
import logo from "../../assets/images/react-icon.png";

const NavLink = ({ href, children }) => {
  return (
    <Link
      variant="button"
      color="text.primary"
      href={href}
      sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

const topNavLinks = [
  { href: "/", text: "Home" },
  { href: "/add-student", text: "Add Student" },
  { href: "/about", text: "About Us" },
];

const TopNav = () => {
  const count = useSelector(selectCount);
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
          <h3>{count}</h3>
          {topNavLinks.map((item) => (
            <NavLink href={item.href} children={item.text} />
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
