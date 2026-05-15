const express = require("express");
const app = express();

app.use(express.json()); // middleware for JSON parsing

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // 3.1 Required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  // 3.2 Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // 3.3 Password validation
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters"
    });
  }

  return res.json({
    success: true,
    message: "User registered successfully"
  });
});

const validateRegister = require("./middleware/validateRegister");

app.post("/register", validateRegister, (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "User registered successfully",
    data: { name, email }
  });
});