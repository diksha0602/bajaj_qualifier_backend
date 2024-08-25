const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    if (!data) {
      return res
        .status(400)
        .json({ is_success: false, error: "Invalid input data" });
    }

    // Process data
    const numbers = data.filter((item) => /^\d+$/.test(item));
    const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(
      (char) => char === char.toLowerCase()
    );

    // Determine the highest lowercase alphabet
    const highestLowercaseAlphabet =
      lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    // Return the response
    res.json({
      is_success: true,
      user_id: "diksha_thakur_06022003",
      email: "diksha@xyz.com",
      roll_number: "21BAI1777",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
});

// GET route
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
