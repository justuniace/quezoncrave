
// // sendEmail.js

// const nodemailer = require("nodemailer");

// // Create a transporter using your email service provider's SMTP settings
// const transporter = nodemailer.createTransport({
//   service: "your_email_service_provider", // e.g., "gmail"
//   auth: {
//     user: "your_email@example.com",
//     pass: "your_email_password",
//   },
// });

// // Function to send the email
// const sendEmail = (recipientEmail, subject, message) => {
//   // Define the email options
//   const mailOptions = {
//     from: "your_email@example.com",
//     to: recipientEmail,
//     subject: subject,
//     text: message,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log("Error occurred while sending email:", error);
//     } else {
//       console.log("Email sent:", info.response);
//     }
//   });
// };

// module.exports = sendEmail;
