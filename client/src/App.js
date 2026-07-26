import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import Navbar from "./components/Navbar";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="App min-h-screen bg-slate-50">
      <BrowserRouter>
        <Navbar />
        <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-start px-4 pb-16 pt-24 md:px-10 md:pt-28">
          <Routes>
            <Route
              path="/"
              element={user ? <DiaryPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <RegisterPage /> : <Navigate to="/" />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
