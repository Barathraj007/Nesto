const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: [
        "House",
        "Apartment",
        "Villa",
        "Commercial",
        "Office",
        "Land",
      ],
    },

    // Google Maps Link
    mapLocation: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    bedrooms: {
      type: Number,
      required: true,
    },

    bathrooms: {
      type: Number,
      required: true,
    },

    area: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    // Multiple Images
    images: [
      {
        type: String,
      },
    ],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    status: {
  type: String,
  enum: ["For Sale", "For Rent", "Sold"],
  default: "For Sale",
},
type: {
  type: String,
  required: true,
  enum: [
    "House",
    "Apartment",
    "Villa",
    "Commercial",
    "Office",
    "Land",
  ],
},

status: {
  type: String,
  enum: ["For Sale", "For Rent", "Sold"],
  default: "For Sale",
},

mapLocation: {
  type: String,
  required: true,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);