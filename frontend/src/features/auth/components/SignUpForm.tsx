import { SignUp } from '../models/SignUp';
import { useSignUpForm } from '../hooks/useSignUpForm';
import { useSignUpMutation } from '../hooks/useSignUpMutation';
import { useNavigate } from 'react-router';

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useSignUpForm();
  const {
    mutateAsync,
    // error, TODO: add display for submit error
    isPending,
  } = useSignUpMutation();
  const nav = useNavigate();

  const onSubmit: (data: SignUp) => Promise<void> = async (data) => {
    await mutateAsync(data, {
      // 'message' is the returned value of the mutationfn
      onSuccess: (message: string) => {
        // TODO: maybe store this message globally and display this after the user has logged in
        console.log(message);
        nav('/profile');
      },
    });
  };

  // TODO: fix ui
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input id="username" {...register('username')} className="form-input" />
      <p className="form-error">
        {errors?.username && errors.username.message}
      </p>
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input id="password" {...register('password')} className="form-input" />
      <p className="form-error">
        {errors?.password && errors.password.message}
      </p>
      {/* TODO: add confirm password */}
      <label htmlFor="first-name" className="form-label">
        First name
      </label>
      <input id="first-name" {...register('name')} className="form-input" />
      <p className="form-error">{errors?.name && errors.name.message}</p>
      <label htmlFor="last-name" className="form-label">
        Last name
      </label>
      <input id="last-name" {...register('surname')} className="form-input" />
      <p className="form-error">{errors?.surname && errors.surname.message}</p>
      {/* TODO: add better loading ui */}
      <button
        type="submit"
        disabled={isPending}
        className="text-base lg:text-lg mt-4 bg-primary text-background p-2 rounded-3xl font-semibold"
      >
        {isPending ? 'Loading...' : 'sign up'}
      </button>
    </form>
  );
};
