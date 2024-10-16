// controllers/contactController.js
const Contact = require('../modals/contact');

// Controller for handling the POST request
exports.submitForm = async (req, res) => {
  const { fullName, email, queryRelated, message } = req.body;

  // Check if all required fields are present
  if (!fullName || !email || !queryRelated || !message) {
    return res.status(400).json({
      message: 'All fields are required: fullName, email, queryRelated, and message'
    });
  }

  try {
    const newContact = new Contact({
      fullName,
      email,
      queryRelated,
      message
    });

    await newContact.save(); // Save to MongoDB
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
