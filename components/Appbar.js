import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";

const Appbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <HomeIcon fontSize="large" />
          <Typography variant="h5" pl={2} sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
