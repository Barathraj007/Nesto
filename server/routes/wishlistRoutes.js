const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

router.post("/:propertyId", auth, addToWishlist);

router.get("/", auth, getWishlist);

router.delete("/:propertyId", auth, removeFromWishlist);

module.exports = router;