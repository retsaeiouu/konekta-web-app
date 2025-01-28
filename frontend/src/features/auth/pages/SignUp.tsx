import axios from 'axios';
import { SignUp } from '../models/SignUp';
import { useSignUpForm } from '../hooks/useSignUpForm';

// TODO: refactor
// TODO: setup tanstack query
// TODO: setup global axios instance
// TODO: setup nginx container and serve built static files

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useSignUpForm();
  const onSubmit = (data: SignUp) => {
    axios
      .post('http://localhost:3000/api/auth/sign-up', data, {
        withCredentials: true,
      })
      .then((response) => console.log(response));
  };

  // TODO: fix ui
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <label htmlFor="username">Username</label>
      <input id="username" {...register('username')} />
      <p>{errors?.username && errors.username.message}</p>
      <label htmlFor="password">Password</label>
      <input id="password" {...register('password')} />
      <p>{errors?.password && errors.password.message}</p>
      {/* TODO: add confirm password */}
      <label htmlFor="first-name">First name</label>
      <input id="first-name" {...register('name')} />
      <p>{errors?.name && errors.name.message}</p>
      <label htmlFor="last-name">Last name</label>
      <input id="last-name" {...register('surname')} />
      <p>{errors?.surname && errors.surname.message}</p>
      <button type="submit">sign up</button>
    </form>
  );
};

export default SignUpForm;
