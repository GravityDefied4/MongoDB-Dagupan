# Mongoose Schemas Lab


## Project Overview
This project demonstrates how to create and use Mongoose schemas in a Node.js application connected to MongoDB. The lab covers defining schemas, applying validation rules, setting default values, using timestamps, and working with embedded subdocuments.

---

## Features Implemented
- Basic Mongoose schema creation (Product model)
- Data validation using required fields and minimum value constraints
- Default values for fields such as category and isAvailable
- Automatic timestamps (createdAt and updatedAt)
- Embedded subdocuments using a Dimension schema

---

## Challenges Faced

One of the main challenges in this lab was ensuring that validation rules worked correctly. At first, I encountered errors when trying to save documents without required fields or with invalid values (such as a negative price). This helped reinforce how Mongoose validation prevents incorrect data from being stored in the database.

Another challenge was understanding how subdocuments work. Embedding the dimension schema inside the product schema required careful structuring to ensure that the nested object was saved correctly in MongoDB.

---

## Interesting Design Choices

I chose to use a separate schema for product dimensions instead of defining it directly inside the main schema. This makes the structure more modular and easier to maintain if the application grows in the future.

I also used both a manually defined `createdAt` field and Mongoose’s built-in `timestamps` option. This helped demonstrate how timestamps work automatically while still allowing explicit control over date fields if needed.

---

## How to Run the Project

1. Install dependencies:
npm install

2. Start MongoDB server:
mongod

3. Run the application:
node index.js

---

## Tools Used
- Node.js
- MongoDB
- Mongoose