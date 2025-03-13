require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// ✅ Email sending route
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;  // ✅ Matches frontend

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // ✅ Configure Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,  
            },
        });

        // ✅ Email details
        let mailOptions = {
            from: process.env.EMAIL_USER, // Send from your email
            to: process.env.EMAIL_USER,   // Receive at your email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // ✅ Send email
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
