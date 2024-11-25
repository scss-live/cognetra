const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Create email transporter (configure with your email service)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email content
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Your email address
            subject: `Contact Form: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('Contact form error:', err);
        res.status(500).json({ message: 'Error sending message' });
    }
});

module.exports = router;
