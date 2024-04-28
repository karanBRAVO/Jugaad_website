import React from "react";
import Image from "next/image";
import { ContactInfo } from "@/types/contact";

const EmailTemplate = (props: ContactInfo) => {
  return (
    <>
      <div className="flex flex-col items-center bg-black text-white p-3">
        <Image
          src={"/Logo.png"}
          alt="Jugaad"
          width={150}
          height={150}
          draggable={false}
          className="my-2"
        />
        <h1 className="font-black font-sans text-2xl text-white w-full text-center">
          Mail From Jugaad Website
        </h1>
        <p className="text-gray-300 font-light font-mono w-full text-sm text-center">
          someone send a query
        </p>
        <h2 className="font-semibold text-slate-100 text-xl w-full text-left my-2">
          Details:
        </h2>
        <p className="p-5 flex flex-col gap-1 border-2 border-solid border-white rounded-lg shadow-md font-serif shadow-gray-300 font-normal text-base">
          <span>Name: {props.name}</span>
          <span>Phone Number: {props.phoneNumber}</span>
          <span>Email: {props.email}</span>
          <span>Query: {props.query}</span>
        </p>
      </div>
    </>
  );
};

export default EmailTemplate;
