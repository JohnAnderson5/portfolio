const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const crypto = require("crypto"); // For generating verification tokens
const OAuth2 = google.auth.OAuth2;

// Dummy storage for tokens (replace with database in production)
let verificationTokens = {};

const oauth2Client = new OAuth2(
  "REMOVED", // Client ID
  "REMOVED", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URI
);

// Set your refresh token from OAuth Playground
oauth2Client.setCredentials({
  refresh_token:
    "1//0456OQYaIlrFWCgYIARAAGAQSNwF-L9IrlYDlAP8ABqqm0ijFvhHvQRwzSKZW1wSjHXt2CRgSL0bYd8amhVFEeTNuXRHsOxYKA3A",
});

async function sendVerificationEmail(req, res) {
  const { name, email, message } = req.body;

  // Generate a unique verification token
  const token = crypto.randomBytes(32).toString("hex");
  verificationTokens[token] = {
    email,
    message,
    name,
    expires: Date.now() + 3600000,
  }; // 1 hour expiration

  const verificationLink = `http://localhost:5001/verify-email?token=${token}`;

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "john.j.anderson5@gmail.com",
        clientId:
          "REMOVED",
        clientSecret: "REMOVED",
        refreshToken:
          "1//0456OQYaIlrFWCgYIARAAGAQSNwF-L9IrlYDlAP8ABqqm0ijFvhHvQRwzSKZW1wSjHXt2CRgSL0bYd8amhVFEeTNuXRHsOxYKA3A",
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `Portfolio Contact <john.j.anderson5@gmail.com>`,
      to: email, // Send verification email to the user
      subject: `Please verify your email`,
      text: `Hi ${name},\n\nPlease verify your email by clicking the link: ${verificationLink}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Verification email sent successfully" });
  } catch (error) {
    console.error("Error sending verification email:", error);
    res.status(500).json({ message: "Failed to send verification email" });
  }
}

async function verifyEmail(req, res) {
  const { token } = req.query;

  if (!token || !verificationTokens[token]) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const { email, message, name } = verificationTokens[token];

  // Check if token expired
  if (Date.now() > verificationTokens[token].expires) {
    delete verificationTokens[token]; // Cleanup expired token
    return res.status(400).json({ message: "Token expired" });
  }

  // Token is valid, proceed to send the actual contact email
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "john.j.anderson5@gmail.com",
        clientId:
          "REMOVED",
        clientSecret: "REMOVED",
        refreshToken:
          "1//0456OQYaIlrFWCgYIARAAGAQSNwF-L9IrlYDlAP8ABqqm0ijFvhHvQRwzSKZW1wSjHXt2CRgSL0bYd8amhVFEeTNuXRHsOxYKA3A",
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `Portfolio Contact <john.j.anderson5@gmail.com>`,
      to: "john.j.anderson5@gmail.com", // Your email where you want to receive the contact
      subject: `Message from ${name}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email verified and sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }

  // Cleanup the used token
  delete verificationTokens[token];
}

module.exports = { sendVerificationEmail, verifyEmail };
