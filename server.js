const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to EagleHacks API!" });
});

app.get("/menu", (req, res) => {
    res.json([
      { id: 1, item: "Burger", price: 10 },
      { id: 2, item: "Pizza", price: 15 }
    ]);
  });

  app.post("/order", (req, res) => {
    const { item, quantity } = req.body;
  
    if (!item || !quantity) {
      return res.status(400).json({ message: "Please provide item and quantity" });
    }
  
    res.status(201).json({
      message: "Order received!",
      order: { item, quantity },
    });
  });

app.listen(3000, () => console.log("Server running on port 3000"));
