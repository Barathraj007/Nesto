import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPropertyById,
  updateProperty,
} from "../api/propertyApi";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    images: [],
  });

const [previews, setPreviews] = useState([]);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await getPropertyById(id);

      setFormData({
        title: res.data.title,
        location: res.data.location,
        price: res.data.price,
        bedrooms: res.data.bedrooms,
        bathrooms: res.data.bathrooms,
        area: res.data.area,
        description: res.data.description,
        images: res.data.images || [],
      });

      setPreviews(
  res.data.images
    ? res.data.images.map(
        (img) => `http://localhost:5000${img}`
      )
    : []
);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Failed to load property");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("location", formData.location);
      data.append("price", formData.price);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);
      data.append("area", formData.area);
      data.append("description", formData.description);

      formData.images.forEach((image) => {
  data.append("images", image);
});
      await updateProperty(id, data);

      alert("Property Updated Successfully");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Property
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Property Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="number"
            placeholder="Bedrooms"
            value={formData.bedrooms}
            onChange={(e) =>
              setFormData({
                ...formData,
                bedrooms: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="number"
            placeholder="Bathrooms"
            value={formData.bathrooms}
            onChange={(e) =>
              setFormData({
                ...formData,
                bathrooms: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="number"
            placeholder="Area (sq.ft)"
            value={formData.area}
            onChange={(e) =>
              setFormData({
                ...formData,
                area: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            rows="5"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg mb-6"
          />

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

  {previews.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className="h-28 w-full object-cover rounded-xl"
    />
  ))}

</div>

          <label className="block font-semibold mb-2">
            Change Property Image
          </label>

          <input
  type="file"
  multiple
  accept="image/*"
  onChange={(e) => {
    const files = [...e.target.files];

    setFormData({
      ...formData,
      images: files,
    });

    setPreviews(
      files.map((file) =>
        URL.createObjectURL(file)
      )
    );
  }}
  className="mb-6"
/>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Update Property
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditProperty;