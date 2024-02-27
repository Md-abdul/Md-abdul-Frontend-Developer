const express = require("express");
const router = express.Router();
const TokenModel = require("../model/Product.model"); 


router.post("/tokenspost", async (req, res) => {
    try {
        const newToken = new TokenModel(req.body);
        
        await newToken.save();
        
        res.status(201).json({ message: "Token created successfully", token: newToken });
    } catch (error) {
        
        res.status(500).json({ message: "Failed to create token", error: error.message });
    }
});

// Route to get all tokens
router.get("/tokens", async (req, res) => {
    try {
        
        const tokens = await TokenModel.find();
        
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tokens", error: error.message });
    }
});

module.exports = router;
