import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  h1: {
    marginTop: "70px"
  },
  buttonPadding: {
    margin: "20px"
  },
  inputMargin: {
    marginRight: "20px"
  }
}));

const Meal = props => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.h1}>Meal</h1>

      <form>
        {" "}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          name="makeMeal"
          className={classes.buttonPadding}
        >
          Create meal
        </Button>
        <TextField
          id="filled-textarea"
          label="Create meal"
          multiline
          placeholder=""
          variant="filled"
          className={classes.inputMargin}
        />
      </form>
    </div>
  );
};

export default Meal;
