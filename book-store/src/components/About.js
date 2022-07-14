import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
 
        <Typography display="flex" flexDirection="column" alignItems="center" sx={{fontFamily:"fantasy", color:"#FDA4BA",  marginTop: 8, marginBottom: 5 }} variant="h2">
          About Pink Robin's Book Store
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" >
          <Typography sx={{fontFamily:"fantasy", color:"#83D9DC",  margin: "auto", px: 20 }} variant="h3">
         Pink Robin's was created in July 2022 by Kalese Carpenter. The name Pink Robin stems from her love of beautiful birds.
        Waking up to read a book in her garden while listening to the birds chirp is apart of her daily morning routine. Since childhood, Kalese has always been 
        a book worm and plans to write her own book someday. 
        </Typography>
        </Box>
    </div>
  )
}

export default About;