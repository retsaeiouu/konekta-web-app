import { useForm } from 'react-hook-form';
import { SignUp, SignUpZodSchema } from '../models/SignUp';
import { zodResolver } from '@hookform/resolvers/zod';

export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    defaultValues: { username: '', password: '', name: '', surname: '' },
    resolver: zodResolver(SignUpZodSchema),
    mode: 'onChange',
  });
  return { register, handleSubmit, errors };
};
