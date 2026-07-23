import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMyProperties,
  deleteProperty,
} from "../api/propertyApi";

function Dashboard() {
  const [properties, setProperties] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const res = await getMyProperties();
      setProperties(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this property?")) return;

    try {
      await deleteProperty(id);
      fetchMyProperties();
      alert("Property deleted successfully");
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 p-10">
    <div className="max-w-7xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Total Properties</h3>
    <p className="text-4xl font-bold text-blue-600 mt-2">
      {properties.length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Total Value</h3>
    <p className="text-3xl font-bold text-green-600 mt-2">
      ₹{" "}
      {properties
        .reduce((sum, item) => sum + Number(item.price), 0)
        .toLocaleString("en-IN")}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Account</h3>
    <p className="text-xl font-bold text-purple-600 mt-2">
      Active
    </p>
 

</div>
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Welcome,
              <span className="font-bold text-blue-600">
                {" "}{user?.name}
              </span>
            </p>

            <p className="text-gray-500 mt-1">
              Total Properties : {properties.length}
            </p>
          </div>

          <Link
            to="/add-property"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Property
          </Link>
        </div>

        {properties.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center">
            <h2 className="text-3xl font-bold">
              No Properties Yet
            </h2>

            <p className="text-gray-500 mt-4">
              Start by adding your first property.
            </p>

            <Link
              to="/add-property"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Add Property
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {properties.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
              <img
  src={
    property.images && property.images.length > 0
      ? `http://localhost:5000${property.images[0]}`
      : "/images/house.jpg"
  }
  alt={property.title}
  className="w-full h-56 object-cover"
/>
                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {property.title}
                  </h2>

                 <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
  🏠 {property.type}
</span>

                <p className="text-blue-600 text-xl font-bold mt-3">
  ₹ {Number(property.price).toLocaleString("en-IN")}
</p>
                  <div className="flex gap-2 mt-5">

                    <Link
                      to={`/edit-property/${property._id}`}
                      className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-center hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(property._id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;