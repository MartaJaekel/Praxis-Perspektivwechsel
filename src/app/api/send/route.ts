import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const { name, email, message, subject } = await request.json();

    // Log the received data to check if we got it correctly
    console.log("Received message:", { name, email, message, subject });

    // Send the email using the Resend API
    const { data, error } = await resend.emails.send({
      from: name + " " + "<form@praxis-perspektivwechsel.berlin>",
      to: [
        "guelfirat@praxis-perspektivwechsel.berlin",
        "andrea.kompatzki@praxis-perspektivwechsel.berlin",
      ],
      subject: subject,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: "Request received successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
