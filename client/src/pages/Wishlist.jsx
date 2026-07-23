import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getWishlist,
  removeFromWishlist,
} from "../api/wishlistApi";

function Wishlist() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await getWishlist();
      setProperties(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (propertyId) => {
    try {
      await removeFromWishlist(propertyId);
      fetchWishlist();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          ❤️ My Wishlist
        </h1>

        {properties.length === 0 ? (
          <div className="text-center text-gray-600 text-xl">
            No properties in wishlist.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {properties.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >

                <img
                  src={`http://localhost:5000${item.property.image}`}
                  alt={item.property.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {item.property.title}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    📍 {item.property.location}
                  </p>

                  <p className="text-blue-600 text-xl font-bold mt-2">
                    ₹ {item.property.price}
                  </p>

                  <div className="flex gap-3 mt-6">

                    <Link
                      to={`/property/${item.property._id}`}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        handleRemove(item.property._id)
                      }
                      className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
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

export default Wishlist;