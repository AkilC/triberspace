import React from 'react';
import { CreateProfileSettings } from '../../ui-components';
import { Flex } from '@aws-amplify/ui-react';
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const navigate = useNavigate();

  // Function to handle successful profile creation
  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <Authenticator>
      <Flex direction="column" alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
        <Flex 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          padding="24px 12px" 
          maxWidth="500px"
          style={{ width: '80%', backgroundColor: '#F5F5F5', borderRadius: '12px' }}
        >
          <h1 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold' }}>Setup Profile</h1>
          <CreateProfileSettings onSuccess={handleSuccess} style={{ width: '100%' }}/>
        </Flex>
      </Flex>
    </Authenticator>
  );
};

export default ProfileSetup;
