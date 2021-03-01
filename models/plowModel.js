// ANCHOR -- Require Modules --
const mongoose = require("mongoose");

// ANCHOR -- Create Tour Schema --
const plowSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "cancelled"],
      default: "pending",
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
      required: [true, "A plow must have a location"],
    },
    resident: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A plow must have a residemt"],
    },
    plower: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A plow must have a plower"],
    },
    // transaction: {
    // type: mongoose.Schema.ObjectId,
    // ref: "Transaction",
    // required: [true, "A plow must have a transaction"],
    // },
  },
  {
    // Schema Options
    toJSON: { virtuals: true }, // this tells the schema to include virtual properties when outputted to JSON
    toObject: { virtuals: true }, // this tells the schema to include virtual properties when outputted to objects
  }
);

// SECTION == Create Indexes ==
// !SECTION

// SECTION == Virtual Properties ==
// !SECTION

// SECTION == Document Middle-Ware ==
// !SECTION

// SECTION == Query Middle-Ware ==
// !SECTION

// SECTION == Aggregation Middle-Ware ==
// !SECTION

// SECTION == Instance Methods ==
// !SECTION

// ANCHOR -- Create Tour Model --
const Plow = mongoose.model("Plow", plowSchema);

// ANCHOR -- Export Model --
module.exports = Plow;
