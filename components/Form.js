import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

const Form = () => {
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel>Choose</FormLabel>
        <RadioGroup row defaultValue="male">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>Have nice day!</FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default Form;
