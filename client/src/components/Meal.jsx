import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import uuid from "react-uuid";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MealContext } from "./MyContext";

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

const Meal = () => {
  const classes = useStyles();
  const [mealValue, setMealValue] = useState("");
  const [mealTitle, setMealTitle] = useState("");
  const [meal, setMeal] = useContext(MealContext);

  const handleSubmit = e => {
    e.preventDefault();

    const mealobj = {
      title: mealValue,
      id: uuid()
    };
    setMealTitle(mealobj.title);
    setMeal([...meal, mealobj]);
    console.log(mealobj);
  };

  const handleChange = e => {
    setMealValue(e.target.value);
  };

  return (
    <div>
      <h1 className={classes.h1}>Meal</h1>

      <form onSubmit={handleSubmit}>
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
          id="filled-textarea3"
          label="Create meal"
          multiline
          placeholder=""
          variant="filled"
          onChange={handleChange}
          className={classes.inputMargin}
        />
        <div>
          <InputLabel id="label" className={classes.buttonPadding}>
            Select Meal
          </InputLabel>
          <Select labelId="label" id="select" value="0">
            <MenuItem value="0">None Selected</MenuItem>
            <MenuItem value="1">Pasta</MenuItem>
            <MenuItem value="2">lasagne</MenuItem>
          </Select>
        </div>
      </form>
      <h1>{mealTitle}</h1>
    </div>
  );
};

export default Meal;
