import React from "react";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

function SignUpComponent() {
  const { handleRegister, errors } = useAuthContext();
  return (
    <div className="flex flex-col  gap-5 justify-center items-center h-screen bg-gray-100">
      <img src="./images/DriveriA.png" alt="logo" width={250} />
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      >
        {errors ? (
          <ul className="text-red-500 mb-10">
            {errors.map((err, i) => (
              <li className="list-disc py-2" key={i}>
                {err?.message}
              </li>
            ))}
          </ul>
        ) : null}
        <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Username:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="Enter your username"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            name="confirmpassword"
            required
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <span className="text-gray-600">
          Already have an Account?{" "}
          <Link to="/signin">
            <button className="text-blue-500"> Sign in</button>
          </Link>
        </span>
        </div>
        
      </form>
    </div>
  );
}

export default SignUpComponent;
