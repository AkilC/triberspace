import { Flex } from '@aws-amplify/ui-react';
import { Authenticator } from "@aws-amplify/ui-react";

const AuthenticatorWrapper = ({ authLoading }) => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
      <Flex 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        padding="24px 12px" 
        maxWidth="500px"
        style={{ width: '80%', backgroundColor: '#F5F5F5', borderRadius: '12px' }}
      >
        {authLoading ? (
          <div style={{ width: '100%', fontSize: '20px', color: 'black', textAlign: 'center' }}>Loading...</div> // Your loading indicator here
        ) : (
          <Authenticator style={{ width: '100%' }}/>
        )}
      </Flex>
    </Flex>
  );
};

export default AuthenticatorWrapper;
