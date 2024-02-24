import { H3Event } from "h3";
import nodemailer from "nodemailer";
import validator from "validator";

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  host: config.MAILHOST,
  port: config.MAILPORT,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
} as nodemailer.SendMailOptions);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);

    await isValid(body);

		const mail = await transporter.sendMail({
      from: `"Portfolio contact" <${config.FROM_MAIL}>`,
      to: config.CONTACTMAIL,
      subject: body.subject,
      text: `Sender : "${body.name}" <${body.email}> \n ${body.message}`,
      html: `Sender : "${body.name}" <${body.email}> \n ${body.message}`,
    });

    return { success: "Mail sent !" };
  } catch (error: any) {
    console.log(error);

    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "An error happened !",
      })
    );
  }
});

const isValid = async (body: any) => {
  const errors = [];

  if (validator.isEmpty(body.email || "")) {
    errors.push({ field: "email", error: "Field is required" });
  }
  if (errors.length > 0) {
    return Promise.reject(errors);
  } else
    return Promise.resolve({
      email: validator.normalizeEmail(body.email),
      subject: validator.escape(body.subject),
      name: validator.escape(body.name),
      message: validator.escape(body.message),
    });
};
