import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  console.log(user);

  return (
    <header className="fixed top-0 z-10 flex h-24 w-full items-center justify-between bg-neutral-900 px-20 text-white">
      <Link to="/">
        <h2 className="text-2xl font-bold">My Diary</h2>
      </Link>
      <nav className="flex items-center gap-10">
        {user && (
          <>
            <h2 className="text-xl text-green-400">Hello, {user.email}</h2>
            <button
              className="rounded-lg border-2 border-green-400 px-4 py-1 text-lg transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
        {!user && (
          <div className="flex items-center gap-4">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Signup</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
