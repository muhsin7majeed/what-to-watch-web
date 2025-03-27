import { Box, Text } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';
import AuthForm, { RegisterInputs } from './AuthForm';

const Register = () => {
  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box>
        <AuthForm onSubmit={onSubmit} type="register" />

        <Text mt={4} fontSize="sm" color="gray.500" textAlign="center">
          Already have an account?{' '}
          <Text as="span" color="purple.400">
            <Link to="/auth/login">Login</Link>
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Register;
