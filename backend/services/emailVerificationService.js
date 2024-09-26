const crypto = require("crypto");
const nodemailer = require("nodemailer");

async function sendVerificationEmail(userEmail, token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "your-email@gmail.com",
      clientId:
        "REMOVED", // Client ID
      clientSecret: "REMOVED", // Client Secret
      refreshToken:
        "1//0456OQYaIlrFWCgYIARAAGAQSNwF-L9IrlYDlAP8ABqqm0ijFvhHvQRwzSKZW1wSjHXt2CRgSL0bYd8amhVFEeTNuXRHsOxYKA3A",
    },
  });

  const verificationLink = `http://yourdomain.com/verify-email?token=${token}`;

  const mailOptions = {
    from: `Portfolio Contact <your-email@gmail.com>`,
    to: userEmail, // Send to user's email for verification
    subject: "Verify Your Email",
    text: `Please verify your email by clicking this link: ${verificationLink}`,
  };

  await transporter.sendMail(mailOptions);
}

// Example: generate a token and send a verification email
const userToken = crypto.randomBytes(32).toString("hex");
sendVerificationEmail("user-email@example.com", userToken);
