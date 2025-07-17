const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Set API key securely
const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_KEY) {
  console.error("❌ SendGrid API key not found in .env");
  process.exit(1);
}
sgMail.setApiKey(SENDGRID_KEY);

// POST /contact
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "shubham325698@gmail.com", // ✅ Your inbox
    from: "shubham-verified@yourdomain.com", // ✅ Use a verified sender email in SendGrid
    subject: `New message from ${name}`,
    text: message,
    html: `<strong>From:</strong> ${name} (${email})<br/><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
