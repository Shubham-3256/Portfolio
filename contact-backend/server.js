const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "shubham325698@gmail.com", // ✅ Your own inbox
    from: "shubham-verified@yourdomain.com", // ✅ Verified sender in SendGrid
    subject: `New message from ${name}`,
    text: message,
    html: `<strong>From:</strong> ${name} (${email})<br/><p>${message}</p>`,
  };


  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error(error.response.body);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
