import React, { useState, createContext } from "react";

export const IngredientContext = createContext();
export const MealContext = createContext();

export const IngredientProvider = props => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [meal, setMeal] = useState([]);

  return (
    <IngredientContext.Provider value={[ingredientsList, setIngredientsList]}>
      <MealContext.Provider value={[meal, setMeal]}>
        {props.children}
      </MealContext.Provider>
    </IngredientContext.Provider>
  );
};
