import * as React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/ComponentExporter";
import { ContactInfo } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
  try {
    const { name, phoneNumber, email, query } =
      (await req.json()) as ContactInfo;

    if (!name || !phoneNumber || !email || !query)
      throw new Error(`All fields are required`);

    const { data, error } = await resend.emails.send({
      from: "jugaadclubuiet@gmail.com",
      to: ["jugaadclubuiet@gmail.com"],
      subject: "Jugaad Query Mail",
      react: EmailTemplate({
        name,
        phoneNumber,
        email,
        query,
      }) as React.ReactElement,
    });

    if (error) {
      throw new Error(
        `${error.name} Error while sending mail: ${error.message}`
      );
    }

    console.log({ data });

    return NextResponse.json({
      success: true,
      message: "Query sent successfully",
    });
  } catch (err) {
    console.log({ err });
    return NextResponse.json({
      success: false,
      error: "Internal Server error",
    });
  }
};
