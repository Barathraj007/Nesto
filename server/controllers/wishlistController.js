const Wishlist = require("../models/Wishlist");
const Property = require("../models/Property");

// ==========================
// Add Property to Wishlist
// ==========================
exports.addToWishlist = async (req, res) => {
  try {
    const { propertyId } = req.params;

    // Check property exists
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    // Check if already in wishlist
    const existing = await Wishlist.findOne({
      user: req.user.id,
      property: propertyId,
    });

    if (existing) {
      return res.status(400).json({
        message: "Property already exists in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user: req.user.id,
      property: propertyId,
    });

    res.status(201).json({
      message: "Property added to wishlist",
      wishlist,
    });
  } catch (err) {
    console.error("Add Wishlist Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// ==========================
// Get Logged-in User Wishlist
// ==========================
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.user.id,
    }).populate({
      path: "property",
      model: "Property",
    });

    res.status(200).json(wishlist);
  } catch (err) {
    console.error("Get Wishlist Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// ==========================
// Remove Property From Wishlist
// ==========================
exports.removeFromWishlist = async (req, res) => {
  try {
    const { propertyId } = req.params;

    const wishlist = await Wishlist.findOneAndDelete({
      user: req.user.id,
      property: propertyId,
    });

    if (!wishlist) {
      return res.status(404).json({
        message: "Property not found in wishlist",
      });
    }

    res.status(200).json({
      message: "Property removed from wishlist",
    });
  } catch (err) {
    console.error("Remove Wishlist Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};