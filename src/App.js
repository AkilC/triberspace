import React, { useEffect } from "react";
import "./index.css";
import Dashboard from "./ui-containers/Dashboard";
import "@aws-amplify/ui-react/styles.css";
import { GlobalProvider } from "./contexts/GlobalStore";
import { Authenticator } from "@aws-amplify/ui-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Hub } from "aws-amplify/utils";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = (data) => {
      const { payload } = data;
      if (payload.event === "signedIn") {
        console.log("user has signed in");
        navigate("/");
      }
      if (payload.event === "signedOut") {
        console.log("user has signed out");
      }
    };

    // Start listening for auth events
    const hubListenerCancel = Hub.listen("auth", listener);

    // Return a function to stop listening for auth events
    return () => {
      hubListenerCancel(); // Cleanup
    };
  }, [navigate]);

  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Dashboard width="100%" />} />
          <Route path="/authenticate" element={<Authenticator />} />
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
