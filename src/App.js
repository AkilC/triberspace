import React, { useEffect, useState, useContext } from "react";
import "./index.css";
import Dashboard from "./ui-containers/Dashboard";
import "@aws-amplify/ui-react/styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Hub } from "aws-amplify/utils";
import { getCurrentUser, fetchAuthSession, signOut } from "aws-amplify/auth";
import ProfileSetup from "./ui-containers/Profile/ProfileSetup";
import { GlobalContext } from "./contexts/GlobalStore";
import AuthenticatorWrapper from "./ui-containers/Authenticator/AuthenticatorWrapper";

const App = () => {
  const { checkUserProfile, deleteMultipleProfiles } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  async function currentAuthenticatedUser() {
    try {
      const user = await getCurrentUser();
    } catch (err) {
      console.log(err);
    }
  }

  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};

      /* if (accessToken) {
        console.log(accessToken)
      } */
    } catch (err) {
      console.log("Error" + err);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  useEffect(() => {
    currentAuthenticatedUser();
    currentSession();
  });

  useEffect(() => {
    const listener = async (data) => {
      const { payload } = data;
      if (payload.event === "signedIn") {
        //set loading to true while we run checkUserProfiles
        setAuth(true);
        setAuthLoading(true);
        // Call the context function to check if the user has a profile
        const profileExists = await checkUserProfile();
        setAuthLoading(false);
        if (!profileExists) {
          navigate('/profilesetup');
        } else {
          navigate('/'); // Navigate to home or dashboard
        }
      }
      if (payload.event === "signedOut") {
        console.log("user has signed out");
        setAuth(false);
      }
    };
  
    // Start listening for auth events
    const hubListenerCancel = Hub.listen("auth", listener);

    // Return a function to stop listening for auth events
    return () => {
      hubListenerCancel(); // Cleanup
    };
  }, [navigate, checkUserProfile]); // Add navigate as a dependency

  return (
    <>
          <Routes>
            <Route path="/authenticate" element={<AuthenticatorWrapper authLoading={authLoading}/>} />
            <Route path="/profilesetup" element={<ProfileSetup />} />
            <Route path="/*" element={<Dashboard isAuth={isAuth} width="100%"/>} />
          </Routes>
    </>
  );
};

export default App;
