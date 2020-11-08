import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ShishaContainer from "./components/Shisha/ShishaContainer";
import HookahContainer from "./components/Hookah/HookahContainer";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/shisha" render={() => <ShishaContainer />} />
         
          <Route path="/hookah" render={() => <HookahContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
