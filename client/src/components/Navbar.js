import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuth();

  const initial = user?.email?.charAt(0).toUpperCase();

  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
            <MdMenuBook className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            My Diary
          </span>
        </Link>

        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
              {initial}
            </span>
            <span className="hidden max-w-[10rem] truncate text-sm text-slate-600 sm:inline">
              {user.email}
            </span>
            <button
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/login"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-600"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
