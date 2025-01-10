import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const { name, email, message, subject, token } = await request.json();

    // verify the token
    const {
      success,
      score,
    }: {
      success: boolean;
      score: number;
    } = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    ).then((res) => {
      return res.json();
    });

    if (!success) {
      console.error("Error verifying token");
      return new Response(
        JSON.stringify({
          error: "Error verifying token",
        }),
        { status: 500 }
      );
    }

    if (score < 0.5) {
      console.error("Token score too low");
      return new Response(
        JSON.stringify({
          error: "Token score too low",
        }),
        { status: 500 }
      );
    }

    // Log the received data to check if we got it correctly
    console.log("Received message:", { name, email, message, subject });

    // Send the email using the Resend API
    const { data, error } = await resend.emails.send({
      from: name + " " + "<form@praxis-perspektivwechsel.berlin>",
      to: process.env.CONTACT_FORM_TO?.split(",") || [],
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
