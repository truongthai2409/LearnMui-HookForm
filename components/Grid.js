import React from "react";
import { Typography, Grid } from "@mui/material";
import Accordions from "@/components/Accordion";
import Form from "@/components/Form";

const Grid1 = () => {
  return (
    <div>
      <Grid container spacing={2} p={5} mb={3}>
        <Grid xs={6}>
          <Typography mb={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vel
            ad eius doloremque quo exercitationem quaerat animi quod dolorum
            nisi laboriosam mollitia delectus eaque iste explicabo cum quam
            facere, nam, tenetur corrupti! Itaque dolorem animi incidunt iusto
            adipisci deserunt dignissimos necessitatibus et, dolores similique
            vitae reprehenderit commodi quo reiciendis rem.
          </Typography>
          <Form></Form>
        </Grid>
        <Grid xs={6}>
          <Typography mb={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vel
            ad eius doloremque quo exercitationem quaerat animi quod dolorum
            nisi laboriosam mollitia delectus eaque iste explicabo cum quam
            facere, nam, tenetur corrupti! Itaque dolorem animi incidunt iusto
            adipisci deserunt dignissimos necessitatibus et, dolores similique
            vitae reprehenderit commodi quo reiciendis rem.
          </Typography>
          <Accordions mt={2}></Accordions>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grid1;
