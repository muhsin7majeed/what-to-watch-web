import { Box, Text } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';
import AuthForm from './AuthForm';
import { LoginInputs } from './AuthForm';

const Login = () => {
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box>
        <AuthForm onSubmit={onSubmit} type="login" />

        <Text mt={4} fontSize="sm" color="gray.500" textAlign="center">
          Don't have an account?{' '}
          <Text as="span" color="purple.400">
            <Link to="/auth/register">Register</Link>
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Login;
