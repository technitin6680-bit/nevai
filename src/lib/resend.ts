import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailFrom =
  process.env.EMAIL_FROM ?? "Nevai <noreply@example.com>";

