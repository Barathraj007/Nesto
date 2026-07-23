console.log("Property controller loaded");

const Property = require("../models/Property");

// =========================
// Add Property
// =========================
exports.addProperty = async (req, res) => {
  try {
   const {
  title,
  location,
  type,
  status,
  mapLocation,
  price,
  bedrooms,
  bathrooms,
  area,
  description,
  ownerName,
  phone,
  whatsapp,
  email,
} = req.body;
    const images = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    const property = await Property.create({
      title,
      location,
      type,
      mapLocation,
      price,
      bedrooms,
      bathrooms,
      area,
      description,
      ownerName,
      phone,
      whatsapp,
      email,
      images,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Property added successfully",
      property,
    });
  } catch (err) {
    console.error("Add Property Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// =========================
// Get All Properties
// =========================
exports.getProperties = async (req, res) => {
  try {
    const { location, type, price, bedrooms } = req.query;

    let filter = {};

    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    if (type) {
      filter.type = type;
    }

    if (price) {
      filter.price = {
        $lte: Number(price),
      };
    }

    if (bedrooms) {
      filter.bedrooms = Number(bedrooms);
    }

    const properties = await Property.find(filter);

    res.status(200).json(properties);
  } catch (err) {
    console.error("Get Properties Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// =========================
// Get Property By ID
// =========================
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(property);
  } catch (err) {
    console.error("Get Property Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// =========================
// Update Property
// =========================
exports.updateProperty = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      location: req.body.location,
      type: req.body.type,
      mapLocation: req.body.mapLocation,
      price: req.body.price,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      area: req.body.area,
      description: req.body.description,
      ownerName: req.body.ownerName,
      phone: req.body.phone,
      whatsapp: req.body.whatsapp,
      email: req.body.email,
    };

    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(
        (file) => `/uploads/${file.filename}`
      );
    }

    const property = await Property.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.id,
      },
      updateData,
      {
        new: true,
      }
    );

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json({
      message: "Property updated successfully",
      property,
    });
  } catch (err) {
    console.error("Update Property Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// =========================
// Delete Property
// =========================
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (err) {
    console.error("Delete Property Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

// =========================
// Get My Properties
// =========================
exports.getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      owner: req.user.id,
    });

    res.status(200).json(properties);
  } catch (err) {
    console.error("Get My Properties Error:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};