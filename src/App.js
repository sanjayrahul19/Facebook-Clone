import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from "./store/reducer";
const App = () => {
  const rootReducers = combineReducers({
    userData: userReducer,
  });
  const store = createStore(rootReducers);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
