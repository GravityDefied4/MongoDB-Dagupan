const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/aggregation-demo")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);

async function runAggregation() {
  try {
    await Sale.deleteMany({});

    await Sale.insertMany([
      {
        productName: "Laptop",
        category: "Electronics",
        price: 50000,
        quantity: 2
      },

      {
        productName: "Phone",
        category: "Electronics",
        price: 20000,
        quantity: 5
      },

      {
        productName: "Headphones",
        category: "Electronics",
        price: 3000,
        quantity: 10
      },

      {
        productName: "Table",
        category: "Furniture",
        price: 7000,
        quantity: 3
      },

      {
        productName: "Chair",
        category: "Furniture",
        price: 2500,
        quantity: 6
      },

      {
        productName: "Shoes",
        category: "Fashion",
        price: 4000,
        quantity: 4
      },

      {
        productName: "Shirt",
        category: "Fashion",
        price: 1200,
        quantity: 8
      }
    ]);

    console.log("Sample data inserted");

    console.log("\n=== $match Stage ===");

    const matchResult = await Sale.aggregate([
      {
        $match: {
          category: "Electronics"
        }
      }
    ]);

    console.log(matchResult);

    console.log("\n=== $group Stage ===");

    const groupResult = await Sale.aggregate([
      {
        $group: {
          _id: "$category",

          totalProducts: {
            $sum: 1
          },

          totalRevenue: {
            $sum: {
              $multiply: ["$price", "$quantity"]
            }
          }
        }
      }
    ]);

    console.log(groupResult);

    console.log("\n=== $project Stage ===");

    const projectResult = await Sale.aggregate([
      {
        $project: {
          _id: 0,

          productName: 1,

          totalAmount: {
            $multiply: ["$price", "$quantity"]
          }
        }
      }
    ]);

    console.log(projectResult);

    console.log("\n=== $sort Stage ===");

    const sortResult = await Sale.aggregate([
      {
        $project: {
          productName: 1,

          totalAmount: {
            $multiply: ["$price", "$quantity"]
          }
        }
      },

      {
        $sort: {
          totalAmount: -1
        }
      }
    ]);

    console.log(sortResult);

    console.log("\n=== Complete Aggregation Pipeline ===");

    const pipelineResult = await Sale.aggregate([
      {
        $match: {
          category: "Electronics"
        }
      },

      {
        $group: {
          _id: "$category",

          totalRevenue: {
            $sum: {
              $multiply: ["$price", "$quantity"]
            }
          },

          totalProducts: {
            $sum: 1
          }
        }
      },

      {
        $project: {
          _id: 0,

          category: "$_id",

          totalRevenue: 1,

          totalProducts: 1
        }
      },

      {
        $sort: {
          totalRevenue: -1
        }
      }
    ]);
    console.log(pipelineResult);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}

runAggregation();