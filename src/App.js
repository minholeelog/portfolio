import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Router from "./routes/Router";
import "./assets/styles/global.css";

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Router />
      <AppFooter />
    </div>
  );
}

export default App;
