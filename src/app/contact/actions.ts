"use server"

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  try {
    //  Validate input again on the server
    formSchema.parse(data);

    // Simulating saving to a database
    console.log("Saving to database:", data); // Since server actions run on the server, will not appear in the browser console. Instead, it will be logged in the server terminal where your Next.js app is running.

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Validation failed!" };
  }
}
