import React, { useState, createContext } from "react";

export const IngredientContext = createContext();

export const IngredientProvider = props => {
  const [ingredientsList, setIngredientsList] = useState([]);

  return (
    <IngredientContext.Provider value={[ingredientsList, setIngredientsList]}>
      {props.children}
    </IngredientContext.Provider>
  );
};
