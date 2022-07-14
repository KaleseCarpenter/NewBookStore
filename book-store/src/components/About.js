import { Box, Typography } from "@mui/material";
import React from "react";
import aboutuslogo from "../../src/images/PinkRobinAbout.png"

const About = () => {
  return (
    <div>
        <img src={aboutuslogo} alt="logo" className="center" />
 
        {/* <Typography display="flex" flexDirection="column" alignItems="center" sx={{fontFamily:"fantasy", color:"#FDA4BA",  marginTop: 8, marginBottom: 5 }} variant="h1">
          About Pink Robin
        </Typography> */}
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <Typography sx={{fontFamily:"fantasy", color:"#001B3A",  margin: "auto", px: 20 }} variant="h3">
          Pink Robin Book Store was created in July 2022 by Kalese Carpenter. The name Pink Robin stems from her love of beautiful birds.
          Waking up to read a book in her garden while listening to the birds chirp is apart of her daily morning routine. Since childhood, Kalese has always been 
          a book worm and plans to write her own book someday. 
        </Typography>
        <br />
        <br />
        <br />
        <Typography sx={{fontFamily:"fantasy", color:"#DE3886",  margin: "auto", px: 20 }} variant="h4">
          Fun Fact: Male Pink Robins do not display the confident breeding antics of most birds but rather rely mostly on their lurid pink chest and belly to lure in a mate.
        </Typography>
        </Box>
    </div>
  )
}

export default About;