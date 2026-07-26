import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import LoadingSpinner from "../components/LoadingSpinner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form
      className="relative flex h-[320px] w-full flex-col items-start justify-between rounded-lg bg-neutral-200 p-4 md:w-[500px]"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="-mt-4 flex w-full flex-col gap-2">
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-semibold">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="h-10 w-full rounded-lg bg-neutral-900 px-2 py-1 text-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <label className="font-semibold">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="h-10 w-full rounded-lg bg-neutral-900 px-2 py-1 text-white"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <button className="w-full rounded-lg bg-green-400 py-2 hover:bg-green-500">
        Login
      </button>
      {error && (
        <div className="fixed left-0 top-28 flex w-full items-center justify-center">
          <span className="rounded-lg bg-neutral-800 px-4 py-2 font-bold text-red-500">
            {error}
          </span>
        </div>
      )}
    </form>
  );
};

export default LoginPage;
