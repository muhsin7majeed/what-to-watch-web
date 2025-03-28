import { Button, Field, Fieldset, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface LoginInputs {
  username: string;
  password: string;
}

export interface RegisterInputs extends LoginInputs {
  confirmPassword: string;
}

type AuthFormProps =
  | {
      onSubmit: SubmitHandler<RegisterInputs>;
      type: 'register';
    }
  | {
      onSubmit: SubmitHandler<LoginInputs>;
      type: 'login';
    };

const AuthForm = ({ onSubmit, type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginInputs | RegisterInputs>();

  const isRegister = type === 'register';
  const password = watch('password');

  const registerErrors = errors as Record<string, { message?: string }>;

  return (
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<LoginInputs | RegisterInputs>)}>
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Fieldset.Content>
            <Field.Root invalid={!!errors.username}>
              <Input
                type="text"
                {...register('username', { required: 'Username is required' })}
                placeholder="Username"
              />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                })}
                placeholder="Password"
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            {isRegister && (
              <Field.Root invalid={!!registerErrors.confirmPassword}>
                <Input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === password || 'Passwords do not match',
                  })}
                  placeholder="Confirm Password"
                />
                <Field.ErrorText>{registerErrors.confirmPassword?.message}</Field.ErrorText>
              </Field.Root>
            )}
          </Fieldset.Content>

          <Button type="submit" variant="surface">
            {isRegister ? 'Register' : 'Login'}
          </Button>
        </Fieldset.Content>
      </Fieldset.Root>
    </form>
  );
};

export default AuthForm;
