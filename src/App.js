import React from "react";
import "./index.css";
import Dashboard from "./ui-containers/Dashboard";
import "@aws-amplify/ui-react/styles.css";
import { GlobalProvider } from "./contexts/GlobalStore";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
// import awsExports from "./aws-exports";


const App = () => {
  return (
    <>
      <GlobalProvider>
        <Authenticator>
          <Dashboard width="100%" />
        </Authenticator>
      </GlobalProvider>
    </>
  );
};

export default App;
