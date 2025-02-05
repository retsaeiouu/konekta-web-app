import { useMutation } from '@tanstack/react-query';
import { SignUp } from '../models/SignUp';
import { ResponseObjectZodSchema } from '../../../shared/models/Response';
import api from '../../../shared/axios/init';

export const useSignUpMutation = () => {
  const { mutateAsync, error, isPending } = useMutation({
    mutationFn: signUp,
  });
  return { mutateAsync, error, isPending };
};

const signUp: (payload: SignUp) => Promise<string> = async (payload) => {
  // this throws an error if the response status code falls out of 200 range
  const { data: response } = await api.post('/auth/sign-up', payload, {
    withCredentials: true,
  });
  const parsed = ResponseObjectZodSchema.safeParse(response);
  // if response schema did not matched the expected schema
  // all errors will be thrown in the 'error' return property of useMutation
  if (!parsed.success) throw new Error('Invalid response structure.');
  return parsed.data.message;
};
