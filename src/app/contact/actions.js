"use server";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export const sendMessage = async (formData) => {
  const { name, email, message } = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use 'gmail' or your email service provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or try to use app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email to receive the messages
      subject: `New Message from ${name} via Your Portfolio Website 🚀`,
      text: message,
      html: `
            <h3>New Contact Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
    });
    return { success: true, message: "Message sended successfully" };
  } catch (error) {
    throw new Error("Failed to send message try again");
  }
};
