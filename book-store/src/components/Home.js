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
        sx={{marginTop: 15, background:"#DE3886"}} 
        variant="contained"
        >
          <Typography variant="h3">
          Welcome to Pink Robin Book Store

          </Typography>
        </Button>

      </Box>
    </div>
  )
}

export default Home;