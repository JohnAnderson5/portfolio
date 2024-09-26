const express = require("express");
const cors = require("cors");
const {
  sendVerificationEmail,
  verifyEmail,
} = require("./services/emailService"); // Import the updated email service

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Step 1: User submits the form, send a verification email
app.post("/contact", sendVerificationEmail); // Now sending a verification email

// Step 2: User clicks the verification link, process the verification and send the actual email
app.get("/verify-email", verifyEmail); // Verify the token and send the contact email

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
