import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [ isDarkMode, setIsDarkMode ] = useState(false); // state to track whether dark mode is enabled



  const appClass = isDarkMode ? "App dark" : "App light"; // determines the className based on the state


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

  }




  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
