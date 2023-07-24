import sendEmail from "../../utils/sendEmail";

export default async function handler(req, res) {
  const requestMethod = req.method;
  const {
    email,
    name,
    subject,
    purpose ,
    Message ,
  } = req.body;

  switch (requestMethod) {
    case "POST":
      try {
       await  sendEmail(email, name, subject, purpose, Message);
       return res.status(200).json({ message: "Sent" });
      } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    // handle other HTTP methods
    default:
      return res.status(405).json({ message: "method not allowed" });
  }
}
