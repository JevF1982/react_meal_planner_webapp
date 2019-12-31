import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IngredientsList from "./IngredientList";
import uuid from "react-uuid";
import { IngredientContext } from "./MyContext";

const styles = () => ({
  buttonPadding: {
    margin: "20px"
  },
  inputMargin: {
    marginRight: "20px"
  }
});

const Input = props => {
  const [ingredientsValue, setIngredientsValue] = useState("");
  const [ingredientsQuantity, setIngredientsQuantity] = useState("");

  const [ingredientsList, setIngredientsList] = useContext(IngredientContext);
  const [errors, setErrors] = useState([]);

  const handleChange = e => {
    setIngredientsValue(e.target.value);
  };
  const handleAlternateChange = e => {
    setIngredientsQuantity(e.target.value);
  };

  const handleDelete = e => {
    const newList = ingredientsList.filter(item => e !== item.id);

    setIngredientsList(newList);
  };

  function validate(ingredientsValue, ingredientsQuantity) {
    const errors = [];

    if (!ingredientsValue) {
      errors.push("Ingredient field cannot be empty");
    } else if (isNaN(ingredientsQuantity)) {
      errors.push("Quantity field must be a number");
      document.getElementById("filled-textarea2").value = "";
    } else {
      setErrors([]);
    }

    return errors;
  }

  const handleEdit = e => {
    setIngredientsValue(e.Ingredient);
    setIngredientsQuantity(e.Quantity);
    handleDelete(e.id);
    document.getElementById("filled-textarea").value = e.Ingredient + "";
    document.getElementById("filled-textarea2").value = e.Quantity + "";
  };

  const handleSubmit = e => {
    e.preventDefault();

    const ingredient = {
      value: ingredientsValue,
      quantity: ingredientsQuantity,
      id: uuid(),
      delete: false,
      edit: false,
      addToMeal: false
    };

    const errors = validate(ingredientsValue, ingredientsQuantity);
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    setIngredientsList([...ingredientsList, ingredient]);
    setIngredientsValue("");
    setIngredientsQuantity("");

    console.log(ingredient);

    document.getElementById("filled-textarea").value = "";
    document.getElementById("filled-textarea2").value = "";
  };

  const handleAlternateSubmit = e => {
    e.preventDefault();
    console.log("meal");
  };

  const { classes } = props;
  return (
    <div>
      <h1>Add ingredients</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonPadding}
          type="submit"
          name="ingredientsList"
        >
          Add to shopping list
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonPadding}
          onClick={handleAlternateSubmit}
          name="mealList"
        >
          Add to meal
        </Button>

        <div>
          <TextField
            id="filled-textarea"
            label="Add Ingredient"
            multiline
            placeholder=""
            variant="filled"
            onChange={handleChange}
            className={classes.inputMargin}
          />
          <TextField
            id="filled-textarea2"
            placeholder=""
            label="Add quantity"
            multiline
            variant="filled"
            onChange={handleAlternateChange}
          />
        </div>
      </form>
      {errors.map(error => (
        <p key={error}> {error}</p>
      ))}

      {ingredientsList.map((item, index) => {
        return (
          <IngredientsList
            Ingredient={item.value}
            key={item.id}
            id={item.id}
            Quantity={item.quantity}
            handleDelete={e => handleDelete(e)}
            handleEdit={e => handleEdit(e)}
            ingredientsList={ingredientsList}
          />
        );
      })}
    </div>
  );
};

export default withStyles(styles)(Input);
