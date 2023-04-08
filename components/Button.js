import React from "react";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const inter = Inter({ subsets: ["latin"] });

const Button = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} mt={2}>
        <Button variant="contained">Hello World</Button>
        <Button variant="contained" mt={2} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default Button;
