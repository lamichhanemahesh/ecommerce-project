import {AppBar,Badge,Toolbar,Typography,Switch, List, ListItem,IconButton, Box} from "@mui/material";
import {mid_links,right_links} from '../../static-data-arrays';
import Link from "next/link";
import React, { useState } from "react";
import {ShoppingCart } from "@mui/icons-material";


interface Props{
  darkMode: boolean,
  handleThemeChange: () => void;
}

const navStyles = {
  color: "inherit",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};


function Header({darkMode,handleThemeChange}:Props) {

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography variant="h6">
            <Link href="/">RE-STORE</Link>
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {mid_links.map(({ title, path }) => (
            <ListItem
              // component={ListItemComponent}
              // to={path}
              key={path}
              sx={navStyles}
            >
              <Link href={path}>{title.toUpperCase()}</Link>
            </ListItem>
          ))}
        </List>
        <Box display='flex' alignItems='center'>
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {right_links.map(({ title, path }) => (
              <ListItem
                // component={ListItemComponent}
                // to={path}
                key={path}
                sx={navStyles}
              >
                <Link href={path}>{title.toUpperCase()}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
