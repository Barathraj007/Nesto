import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-6xl mx-auto px-6">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-36 h-36 rounded-full bg-blue-600 text-white flex items-center justify-center text-6xl font-bold shadow-lg">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div className="flex-1">

              <h1 className="text-4xl font-bold">
                {user?.name}
              </h1>

              <p className="text-gray-500 mt-2">
                {user?.email}
              </p>

              <div className="flex gap-4 flex-wrap mt-6">

                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Dashboard
                </Link>

                <Link
                  to="/wishlist"
                  className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
                >
                  ❤️ Wishlist
                </Link>

                <Link
                  to="/add-property"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  + Add Property
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              🏠
            </div>

            <h2 className="text-4xl font-bold mt-4">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              My Properties
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              ❤️
            </div>

            <h2 className="text-4xl font-bold mt-4">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Wishlist
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              ⭐
            </div>

            <h2 className="text-4xl font-bold mt-4">
              Premium
            </h2>

            <p className="text-gray-500 mt-2">
              Account
            </p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-8">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link
              to="/add-property"
              className="bg-blue-50 rounded-2xl p-6 text-center hover:bg-blue-100 transition"
            >
              <div className="text-5xl">🏡</div>
              <p className="mt-4 font-semibold">
                Add Property
              </p>
            </Link>

            <Link
              to="/dashboard"
              className="bg-green-50 rounded-2xl p-6 text-center hover:bg-green-100 transition"
            >
              <div className="text-5xl">📊</div>
              <p className="mt-4 font-semibold">
                Dashboard
              </p>
            </Link>

            <Link
              to="/wishlist"
              className="bg-pink-50 rounded-2xl p-6 text-center hover:bg-pink-100 transition"
            >
              <div className="text-5xl">❤️</div>
              <p className="mt-4 font-semibold">
                Wishlist
              </p>
            </Link>

            <Link
              to="/"
              className="bg-yellow-50 rounded-2xl p-6 text-center hover:bg-yellow-100 transition"
            >
              <div className="text-5xl">🏠</div>
              <p className="mt-4 font-semibold">
                Home
              </p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;