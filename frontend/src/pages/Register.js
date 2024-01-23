import React from "react";

const Register = () => {
  return (
    <>
      <form className="flex h-[320px] w-[500px] flex-col items-start justify-between rounded-lg bg-neutral-200 p-4">
        <h1 className="text-3xl font-bold">Register</h1>
        <div className="-mt-4 flex w-full flex-col gap-2">
          <div className="flex flex-col items-start justify-center gap-1">
            <label className="font-semibold">Email:</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 w-full rounded-lg bg-neutral-900 px-2 py-1 text-white"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <label className="font-semibold">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="h-10 w-full rounded-lg bg-neutral-900 px-2 py-1 text-white"
            />
          </div>
        </div>
        <button className="w-full rounded-lg bg-green-400 py-2 hover:bg-green-500">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
