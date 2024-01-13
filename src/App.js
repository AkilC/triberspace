import React from "react";
import "./index.css";
import Dashboard from "./ui-containers/Dashboard";
import '@aws-amplify/ui-react/styles.css'

const App = () => {
  return (
    <>
      <Dashboard width="100%"/>
    </>
  );
};

export default App;
