import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-700"
        >
          🏠 Nesto
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">

          <Link
            to="/"
            className="hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition font-medium"
          >
            Buy
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition font-medium"
          >
            Rent
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition font-medium"
          >
            About
          </Link>

          {user && (
            <>
              <Link
                to="/wishlist"
                className="hover:text-blue-600 font-medium"
              >
                ❤️ Wishlist
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-blue-600 font-medium"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="hover:text-blue-600 font-medium"
              >
                Profile
              </Link>

              <Link
                to="/add-property"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Add Property
              </Link>

              <span className="font-semibold text-gray-700">
                👋 {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link
                to="/login"
                className="hover:text-blue-600 transition font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-4">

          <Link to="/">🏠 Home</Link>
          <Link to="/">🏡 Buy</Link>
          <Link to="/">🏢 Rent</Link>
          <Link to="/">ℹ️ About</Link>

          {user ? (
            <>
              <Link to="/wishlist">
                ❤️ Wishlist
              </Link>

              <Link to="/dashboard">
                📊 Dashboard
              </Link>

              <Link to="/profile">
                👤 Profile
              </Link>

              <Link to="/add-property">
                ➕ Add Property
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;