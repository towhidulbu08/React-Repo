import { useReducer, useState } from "react";
import "./App.css";

import Page from "./Components/Cine/Page";
import { MovieContext, ThemeContext } from "./Context";
import CartReducers, { initialState } from "./Reducers/CartReducers";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducers, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page></Page>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
