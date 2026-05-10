const mongoose = require('mongoose');
const connectDB = require('./db');

connectDB();

/* =========================
   SUBDOCUMENT SCHEMA
========================= */
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: {
    type: String,
    default: 'cm'
  }
});

/* =========================
   MAIN PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  description: String,

  category: {
    type: String,
    default: 'General'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  isAvailable: {
    type: Boolean,
    default: true
  },

  dimensions: dimensionSchema
}, { timestamps: true });

/* =========================
   MODEL
========================= */
const Product = mongoose.model('Product', productSchema);

/* =========================
   TEST FUNCTIONS
========================= */

// STEP 1–5 TEST PRODUCT
const createProduct = async () => {
  try {
    const product = new Product({
      name: 'Laptop',
      price: 1200,
      description: 'A high-performance laptop',

      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });

    await product.save();
    console.log('Product saved successfully:', product);
  } catch (error) {
    console.error('Error saving product:', error.message);
  }
};

// STEP 2 TEST (VALIDATION ERROR EXAMPLE)
const testValidation = async () => {
  try {
    const badProduct = new Product({
      price: -100 // invalid (no name + negative price)
    });

    await badProduct.save();
  } catch (error) {
    console.error('Validation failed:', error.errors);
  }
};

/* =========================
   RUN ONE AT A TIME
========================= */

// Uncomment ONE at a time to test

createProduct();
testValidation();