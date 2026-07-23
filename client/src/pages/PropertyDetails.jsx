import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPropertyById, getProperties } from "../api/propertyApi";
import { addToWishlist } from "../api/wishlistApi";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [saved, setSaved] = useState(false);
const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchProperty();
    fetchProperties();
  }, []);


const fetchProperty = async () => {
  try {
    const res = await getPropertyById(id);

    setProperty(res.data);

    if (res.data.images && res.data.images.length > 0) {
      setSelectedImage(
        `http://localhost:5000${res.data.images[0]}`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchProperties = async () => {
  try {
    const res = await getProperties();
    setProperties(res.data);
  } catch (err) {
    console.log(err);
  }
};


  const handleWishlist = async () => {
    try {
      await addToWishlist(property._id);
      setSaved(true);
      alert("Property added to Wishlist ❤️");
    } catch (err) {
      console.log(err);

      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to add property to wishlist");
      }
    }
  };

  if (!property) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Loading...
      </h1>
    );
  }

  const similarProperties = properties.filter(
    (item) => item._id !== property._id
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <div>

  <img
    src={selectedImage || "/images/house.jpg"}
    alt={property.title}
    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
  />

  {property.images && property.images.length > 1 && (
    <div className="grid grid-cols-5 gap-4 mt-5">
      {property.images.map((img, index) => (
        <img
          key={index}
          src={`http://localhost:5000${img}`}
          alt={`Property ${index + 1}`}
          onClick={() =>
            setSelectedImage(
              `http://localhost:5000${img}`
            )
          }
          className={`h-24 w-full object-cover rounded-xl cursor-pointer border-2 transition ${
            selectedImage === `http://localhost:5000${img}`
              ? "border-blue-600"
              : "border-transparent hover:border-blue-400"
          }`}
        />
      ))}
    </div>
  )}

</div>
      <h1 className="text-5xl font-bold mt-8">
        {property.title}
      </h1>

      <div className="flex gap-3 mt-4 flex-wrap">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          ✅ Verified Property
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          🏠 For Sale
        </span>
      </div>

      <p className="text-blue-600 text-3xl font-bold mt-6">
        ₹ {Number(property.price).toLocaleString("en-IN")}
      </p>

      <p className="text-xl mt-4">
        📍 {property.location}
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-gray-100 rounded-xl p-5 text-center">
          <h3 className="text-3xl">🛏</h3>
          <p className="font-bold mt-2">
            {property.bedrooms} Bedrooms
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-5 text-center">
          <h3 className="text-3xl">🛁</h3>
          <p className="font-bold mt-2">
            {property.bathrooms} Bathrooms
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-5 text-center">
          <h3 className="text-3xl">📐</h3>
          <p className="font-bold mt-2">
            {property.area} sq.ft
          </p>
        </div>

      </div>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold">
        Description
      </h2>

      <p className="text-gray-600 text-lg mt-5 leading-8">
        {property.description}
      </p>

      <hr className="my-10" />

<h2 className="text-3xl font-bold mb-6">
  📍 Property Location
</h2>

<div className="rounded-2xl overflow-hidden shadow-lg">
  <iframe
    src={property.mapLocation}
    title="Google Map"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  />
</div>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold mb-6">
        👤 Owner Information
      </h2>

      <div className="bg-white shadow-lg rounded-2xl p-8 border">

        <h3 className="text-2xl font-bold">
          {property.ownerName}
        </h3>

        <p className="mt-4">
          📞 {property.phone}
        </p>

        <p className="mt-2">
          💬 {property.whatsapp}
        </p>

        <p className="mt-2">
          📧 {property.email}
        </p>

        <div className="flex gap-4 flex-wrap mt-8">

          <a
            href={`tel:${property.phone}`}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            📞 Call
          </a>

          <a
            href={`https://wa.me/${property.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            💬 WhatsApp
          </a>

          <a
            href={`mailto:${property.email}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            📧 Email
          </a>

          <button
            onClick={handleWishlist}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            {saved ? "❤️ Saved" : "🤍 Save Property"}
          </button>

        </div>

      </div>

      <hr className="my-12" />

      <h2 className="text-3xl font-bold mb-8">
        Similar Properties
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {similarProperties.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
           <img
  src={
    item.images && item.images.length > 0
      ? `http://localhost:5000${item.images[0]}`
      : "/images/house.jpg"
  }
  alt={item.title}
  className="h-56 w-full object-cover"
/>

            <div className="p-5">

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                ₹ {Number(item.price).toLocaleString("en-IN")}
              </p>

              <Link
                to={`/property/${item._id}`}
                className="block mt-5 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default PropertyDetails;