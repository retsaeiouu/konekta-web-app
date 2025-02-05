import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="page-container">
      <div className="w-full p-4 px-12 lg:px-96 mb-48 lg:mb-28">
        <div className="font-cherry max-md:text-center lg:mr-auto text-3xl text-primary">
          Konekta
        </div>
        {/* TODO: add description, sign in/up navigation */}
        {/* TODO: add a validator that checks if request is already authenticated */}
      </div>
      <div className="w-full px-12 md:w-3/5 lg:w-1/3">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
