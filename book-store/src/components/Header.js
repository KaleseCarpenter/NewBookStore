import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
            <Toolbar>
                <Typography>
                    <MenuBookIcon />
                </Typography>  
                <Tabs 
                sx={{ ml: "auto" }}// moves margin of tabs to the right, add css inline
                textColor="inherit" 
                indicatorColor="primary" 
                value={value} 
                onChange={(e, val) => setValue(val)}
                >
                    <Tab label="Books" />
                    <Tab LinkComponent={ NavLink } label="Add Product" />
                    <Tab label="About Us" />
                </Tabs>
            </Toolbar> 
        </AppBar>
    </div>
  );
}

export default Header;