import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {Fragment, PureComponent} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../images/pinkrobinbird.png"
import clickmebutton from "../images/click_pink.png"

//This is the Home Page
const Home = () => {
  return (
    <div className="">
      <NavLink to="/books" className="home-button">
        <a href="" className="logo">
          <img className="clickMe" id="clickMe" src={clickmebutton} alt="clickMeButton"/>
          <img className="logo" id="logo" src={logo} alt="pinkRobinLogo"/>
          
      
        </a>

      </NavLink>

      {/* <Box display="flex" flexDirection="column" alignItems="center">
        <Button 
        LinkComponent={Link} 
        to="/books" 
        sx={{marginTop: 15, background:"#DE3886"}} 
        variant="contained"
        >
          <Typography variant="h3">
          Welcome to Pink Robin Book Store

          </Typography>
        </Button>

      </Box> */}
    </div>
  )
}

export default Home;