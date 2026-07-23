const express = require("express");
const router = express.Router();

const upload = require("../config/multerConfig");
const auth = require("../middleware/authMiddleware");

const {
  addProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getMyProperties,
} = require("../controllers/propertyController");

// =========================
// Add Property (Multiple Images)
// =========================
router.post(
  "/add",
  auth,
  upload.array("images", 10),
  addProperty
);

// =========================
// Get All Properties
// =========================
router.get("/", getProperties);

// =========================
// Get Logged-in User Properties
// =========================
router.get("/my", auth, getMyProperties);

// =========================
// Get Property By ID
// =========================
router.get("/:id", getPropertyById);

// =========================
// Update Property (Multiple Images)
// =========================
router.put(
  "/:id",
  auth,
  upload.array("images", 10),
  updateProperty
);

// =========================
// Delete Property
// =========================
router.delete(
  "/:id",
  auth,
  deleteProperty
);

module.exports = router;