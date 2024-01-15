import React from 'react';
import "./index.css";
import Dashboard from "./ui-containers/Dashboard";
import '@aws-amplify/ui-react/styles.css'
import { GlobalProvider } from './contexts/GlobalStore';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Dashboard width="100%"/>
      </GlobalProvider>
    </>
  );
};

export default App;
