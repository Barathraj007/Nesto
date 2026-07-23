import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../api/propertyApi";

function AddProperty() {
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({

  title: "",
  location: "",
  type: "",
  status: "For Sale",
  mapLocation: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  area: "",
  description: "",
  ownerName: "",
  phone: "",
  whatsapp: "",
  email: "",
  images: [],
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImages = (e) => {
    setFormData({
      ...formData,
      images: [...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("location", formData.location);
    data.append("type", formData.type);
    data.append("status", formData.status);
    data.append("mapLocation", formData.mapLocation);
    data.append("price", formData.price);
    data.append("bedrooms", formData.bedrooms);
    data.append("bathrooms", formData.bathrooms);
    data.append("area", formData.area);
    data.append("description", formData.description);
    data.append("ownerName", formData.ownerName);
    data.append("phone", formData.phone);
    data.append("whatsapp", formData.whatsapp);
    data.append("email", formData.email);

    formData.images.forEach((image) => {
      data.append("images", image);
    });

    try {
      await addProperty(data);

      alert("Property Added Successfully!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to add property");
    }
  };

    return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          🏠 Add Property
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">Select Property Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
            <option value="Office">Office</option>
            <option value="Land">Land</option>
          </select>

          <select
  name="status"
  value={formData.status}
  onChange={handleChange}
  className="w-full border rounded-xl p-4"
>
  <option value="For Sale">For Sale</option>
  <option value="For Rent">For Rent</option>
  <option value="Sold">Sold</option>
</select>

          <input
            type="text"
            name="mapLocation"
            placeholder="Google Maps Link"
            value={formData.mapLocation}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

            <input
              type="number"
              name="bathrooms"
              placeholder="Bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

            <input
              type="number"
              name="area"
              placeholder="Area (sq.ft)"
              value={formData.area}
              onChange={handleChange}
              className="border rounded-xl p-4"
              required
            />

          </div>

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <hr />

          <h2 className="text-2xl font-bold">
            Owner Details
          </h2>

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <hr />

          <h2 className="text-2xl font-bold">
            Property Images
          </h2>

          <input
  type="file"
  multiple
  accept="image/*"
  onChange={handleImages}
  className="w-full border rounded-xl p-4"
  required
/>

          {formData.images.length > 0 && (

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {formData.images.map((image, index) => (

                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-28 w-full object-cover rounded-xl shadow"
                />

              ))}

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
          >
            🚀 Add Property
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddProperty;