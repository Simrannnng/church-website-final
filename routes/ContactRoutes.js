// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../Controller/contactController");

// Route for handling form submission
router.post("/submit-form", contactController.submitForm);

module.exports = router;
