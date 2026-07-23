import API from "./api";

// Get all properties (with search filters)
export const getProperties = (search = {}) => {
  return API.get("/property", {
    params: search,
  });
};

// Get property by ID
export const getPropertyById = (id) =>
  API.get(`/property/${id}`);

// Add property
export const addProperty = (formData) => {
  const token = localStorage.getItem("token");

  return API.post("/property/add", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update property
export const updateProperty = (id, formData) => {
  const token = localStorage.getItem("token");

  return API.put(`/property/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete property
export const deleteProperty = (id) => {
  const token = localStorage.getItem("token");

  return API.delete(`/property/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Get logged-in user's properties
export const getMyProperties = () => {
  const token = localStorage.getItem("token");

  return API.get("/property/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};