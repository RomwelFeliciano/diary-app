import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuBook, MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useRegister } from "../hooks/useRegister";
import Spinner from "../components/Spinner";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
  };

  return (
    <div className="flex w-full flex-col items-center animate-fade-in-up">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-sm">
        <MdMenuBook className="h-6 w-6" />
      </span>

      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Start writing your own diary, privately.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="register-email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <div className="relative">
              <MdOutlineEmail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="register-password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <div className="relative">
              <MdLockOutline className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Create a strong password"
                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? (
                  <IoEyeOffOutline className="h-5 w-5" />
                ) : (
                  <IoEyeOutline className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Use 8+ characters with a mix of letters, numbers &amp; symbols.
            </p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          <button
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-500 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading && <Spinner className="h-4 w-4" />}
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-brand-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
