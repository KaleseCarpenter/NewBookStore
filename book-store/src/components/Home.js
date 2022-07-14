import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

//This is the Home Page
const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button 
        LinkComponent={Link} 
        to="/books" 
        sx={{marginTop: 15, background:"#B37D4E"}} 
        variant="contained"
        >
          <Typography variant="h3">
          Welcome to Pink Robin's Book Store

          </Typography>
        </Button>

      </Box>
    </div>
  )
}

export default Home;