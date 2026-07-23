import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-[32px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Image Section */}
      <div className="p-4">
        <div className="relative bg-white rounded-[28px] shadow-md">
<img
  src={
    property.images && property.images.length > 0
      ? `http://localhost:5000${property.images[0]}`
      : "/images/house.jpg"
  }
  alt={property.title}
  className="w-full h-72 object-cover rounded-[24px] rounded-br-[70px] transition duration-500 hover:scale-105"
/>
          {/* Featured Badge */}
          <span className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Featured
          </span>

          {/* Wishlist */}
          <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-red-500 hover:text-white transition duration-300">
            ❤️
          </button>

          {/* Property Type */}
          <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow">
            {property.type || "Property"}
          </span>

        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">

        <h2 className="text-2xl font-bold">
          {property.title}
        </h2>

        <p className="text-gray-500 mt-2 flex items-center gap-2">
          📍 {property.location}
        </p>

        <h3 className="text-4xl font-extrabold text-blue-600 mt-4">
          ₹ {Number(property.price).toLocaleString("en-IN")}
        </h3>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="bg-gray-50 rounded-2xl py-4 text-center shadow-sm hover:shadow-md transition">
            <div className="text-2xl">🛏</div>
            <p className="font-bold mt-2">
              {property.bedrooms}
            </p>
            <p className="text-xs text-gray-500">
              Bedrooms
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl py-4 text-center shadow-sm hover:shadow-md transition">
            <div className="text-2xl">🛁</div>
            <p className="font-bold mt-2">
              {property.bathrooms}
            </p>
            <p className="text-xs text-gray-500">
              Bathrooms
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl py-4 text-center shadow-sm hover:shadow-md transition">
            <div className="text-2xl">📐</div>
            <p className="font-bold mt-2">
              {property.area}
            </p>
            <p className="text-xs text-gray-500">
              sq.ft
            </p>
          </div>

        </div>

        {/* Button */}
        <Link
          to={`/property/${property._id}`}
          className="block mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-4 rounded-2xl font-bold transition duration-300 shadow-lg"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}

export default PropertyCard;