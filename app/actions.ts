"use server"

import { z } from "zod"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function sendContactMessage(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = ContactFormSchema.parse(formData)

    // Here you would typically send the data to an email service
    // Examples include:
    // - Sending to an API route that uses Nodemailer
    // - Using a service like SendGrid, Mailchimp, etc.
    // - Storing in a database and notifying the owner

    // For demonstration, we'll log the data and simulate a successful response
    console.log("Contact form submission:", {
      ...validatedData,
      serviceRequested: validatedData.service,
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send email using a service like SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: 'your-email@example.com' }] }],
    //     from: { email: 'no-reply@yoursite.com' },
    //     subject: `New ${validatedData.service} inquiry from ${validatedData.name}`,
    //     content: [{
    //       type: 'text/plain',
    //       value: `Service: ${validatedData.service}\n\nMessage: ${validatedData.message}\n\nFrom: ${validatedData.name} (${validatedData.email})`
    //     }]
    //   })
    // })

    // 2. Or store in a database:
    // await db.insert(messages).values({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   message: validatedData.message,
    //   createdAt: new Date()
    // })

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map((e) => `${e.path}: ${e.message}`).join(", "),
      }
    }
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
