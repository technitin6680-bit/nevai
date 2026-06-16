import type { CreateEmailOptions } from "resend";

import { emailFrom, resend } from "@/lib/resend";

type SendEmailInput = Omit<CreateEmailOptions, "from"> & {
  from?: string;
};

export async function sendEmail({ from = emailFrom, ...input }: SendEmailInput) {
  return resend.emails.send({
    from,
    ...input,
  });
}

