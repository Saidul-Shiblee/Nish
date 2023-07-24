
import { createTransport } from "nodemailer";
import generateEmailTemplate from "./generateEmailTemplate";

const sendEmail = async (
  email,
  name,
  subject,
  purpose = undefined,
  Message = undefined
) => {
  try {
    const transporter = createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_SERVER_USER,
      subject: subject,
      html: purpose ? generateEmailTemplate(name, email, purpose, Message) : null,
    });
  } catch (error) {
    throw createHttpError(
      httpStatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong,email not sent"
    );
  }
};

export default sendEmail;
