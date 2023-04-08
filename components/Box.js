import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Box1 = () => {
  return (
    <div>
      <Box mt={5}>
        <Typography variant="h1" component="h2" gutterBottom align="center">
          hello world
        </Typography>
        <Typography variant="subtitle" align="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vel ad
          eius doloremque quo exercitationem quaerat animi quod dolorum nisi
          laboriosam mollitia delectus eaque iste explicabo cum quam facere,
          nam, tenetur corrupti! Itaque dolorem animi incidunt iusto adipisci
          deserunt dignissimos necessitatibus et, dolores similique vitae
          reprehenderit commodi quo reiciendis rem.
        </Typography>
      </Box>
    </div>
  );
};

export default Box1;
