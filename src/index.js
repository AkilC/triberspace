import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import { DataStore, AuthModeStrategyType } from 'aws-amplify/datastore';
import awsExports from './aws-exports';
import { GlobalProvider } from "./contexts/GlobalStore";
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { CookieStorage } from 'aws-amplify/utils';
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates", 
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#1f1f1f"
                    },
                },
            },
        },
    },
}, studioTheme)

Amplify.configure(awsExports);

// Set the auth mode strategy for DataStore
DataStore.configure({
  authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
});
console.log(DataStore)

cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage({
  domain: '.localtest.me', // Notice the dot at the beginning
  // This is important for localhost testing; cookies for localhost may not behave as expected
  secure: process.env.NODE_ENV === "production" // Use secure cookies in production
}));

const root = ReactDOM.createRoot(document.getElementById('root'));

/* document.addEventListener(
  'touchmove',
  function (event) {
    if (!event.target.classList.contains('allow-scrolling')) {
      event.preventDefault();
    }
  },
  { passive: false }
); */


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider theme={updatedTheme}>
          <App />
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
