import React from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Meal from "./components/Meal";
import { IngredientProvider } from "./components/MyContext";

import "./App.css";

function App() {
  return (
    <IngredientProvider>
      <div className="App">
        <Header />
        <Input />
        <Meal />
      </div>
    </IngredientProvider>
  );
}

export default App;
