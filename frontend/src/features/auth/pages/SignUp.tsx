import axios from 'axios';
import { SignUp } from '../models/SignUp';
import { useSignUpForm } from '../hooks/useSignUpForm';

// TODO: navigate to personal page after signing up

// TODO: setup tanstack query
// TODO: setup global axios instance
// TODO: setup nginx container and serve built static files

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useSignUpForm();
  const onSubmit = (data: SignUp) => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
    instance
      .post('/auth/sign-up', data, {
        withCredentials: true,
      })
      .then((response) => console.log(response));
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
      {/* TODO: leading button */}
      <button
        type="submit"
        className="text-base lg:text-lg mt-4 bg-primary text-background p-2 rounded-3xl font-semibold"
      >
        sign up
      </button>
    </form>
  );
};

export default SignUpForm;
