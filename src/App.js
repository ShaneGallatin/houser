import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {HashRouter} from "react-router-dom";
import routes from "./routes"

function App() {
  return (
    <HashRouter>

    <div>
      
      <Header />
      {routes}
    </div>

    </HashRouter>
  );
}

export default App;
