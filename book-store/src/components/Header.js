import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";

// Navigation Bar
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: "#83D9DC"}} position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color: "#438496"}}> {/* figure out how to change logo color*/}
                    <Typography>
                        <MenuBookIcon />
                    </Typography> 
                </NavLink>
                <Tabs 
                sx={{ ml: "auto" }}// moves margin of tabs to the right, add css inline
                textColor="inherit" 
                indicatorColor="primary" 
                value={value} 
                onChange={(e, val) => setValue(val)} //*This is to change the blue underline when selecting tab
                >
                    <Tab LinkComponent={NavLink} to="/books" label="Books" />{/* This Link Component changes the route in index.js when clicked on */}
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                </Tabs>
            </Toolbar> 
        </AppBar>
    </div>
  );
}

export default Header;