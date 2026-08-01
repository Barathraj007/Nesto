import API from "./api";

export const getWishlist = () => {
  const token = localStorage.getItem("token");

  return API.get("/wishlist", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addToWishlist = (propertyId) => {
  const token = localStorage.getItem("token");

  return API.post(
    `/wishlist/${propertyId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFromWishlist = (propertyId) => {
  const token = localStorage.getItem("token");

  return API.delete(`/wishlist/${propertyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};