export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, phone } = req.body;

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Top Driving Contact Form`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: name,
              Email: email,
              Message: message,
              Phone: phone,
            },
          }),
        }
      );

      if (response.ok) {
        res.status(200).json({ message: "Form submitted successfully!" });

        // Send email (using a service like SendGrid, NodeMailer, etc.)
        // await sendEmail(name, email, message);
        console.log("Submitted");
      } else {
        res.status(500).json({ message: "Error submitting form" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error submitting form", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

// Function to send email (placeholder)
async function sendEmail(name, email, message) {
  // Implement email sending logic here
  console.log(
    `Email sent to admin with message from ${name} (${email}): ${message}`
  );
}
