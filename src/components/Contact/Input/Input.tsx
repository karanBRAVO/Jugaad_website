"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ContactInfo } from "@/types/contact";
import toast from "react-hot-toast";

const Input = () => {
  const [formData, setFormData] = useState<ContactInfo>({
    name: "",
    phoneNumber: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phoneNumber ||
        !formData.query
      )
        throw new Error(`All fields are required`);

      const res = await fetch(`/api/send`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully, Thanks!");
      } else {
        toast.error("Error sending your query, try again later.");
      }
    } catch (err) {
      console.error({ err });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          background:
            "url('/Contact/inputBG.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div
          className="px-10 py-12 flex flex-row gap-4 items-center justify-center relative z-[1]"
          style={{
            background:
              "radial-gradient(153.4% 101.71% at 91.63% 0%, rgba(10, 6, 67, 0.71) 0%, #030028 100%)",
            boxShadow: "15px 20px 20.2px 0px #030028",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-7 justify-center px-10"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              id="usersname"
              placeholder="Your Name"
              required={true}
              className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
            />
            <div className="flex flex-row items-center justify-between gap-5">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                id="phoneNumber"
                required={true}
                placeholder="Phone no."
                className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
                required={true}
                placeholder="Email"
                className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
              />
            </div>
            <input
              type="text"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              id="query"
              required={true}
              placeholder="Your query"
              className="font-serif text-base text-white bg-transparent py-2 border-2 border-solid border-b-white border-x-0 border-t-0 w-full outline-none placeholder:text-white px-3"
            />
            <button
              type="submit"
              disabled={loading}
              className="disabled:cursor-wait disabled:bg-[#ffffff84] uppercase px-10 py-2 rounded-2xl bg-white text-black font-semibold text-xl font-serif text-center"
            >
              Submit
            </button>
          </form>
          <div className="p-1 m-1">
            <Image
              src={"/Contact/input.png"}
              alt="/"
              width={190}
              height={190}
              draggable={false}
              className="w-[150px] h-[150px]"
            />
          </div>
        </div>
        <div
          className="w-[550px] h-[550px] bg-[#302F2A] rounded-[50%] flex flex-col items-center justify-center pl-[243px] pr-3 relative right-[240px] bottom-0"
          style={{
            boxShadow: "40px 8px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1 className="text-white font-bold text-5xl font-serif w-full text-center my-2">
            Our Info
          </h1>
          <div className="w-full h-[2px] bg-white my-1"></div>
          <div className="w-full h-[2px] bg-white my-1"></div>
          <div className="text-white flex flex-col gap-3 my-5 px-6 m-1">
            <p className="flex flex-col gap-1">
              <span className="uppercase underline font-normal font-serif">
                JUGAAD EMAIL
              </span>
              <span className="font-serif text-sm font-light pl-1">
                jugaadclubuiet@gmail.com
              </span>
            </p>
            <p className="flex flex-col px-1 gap-1">
              <span className="text-white font-serif font-normal text-sm">
                Pranav: <span className="font-light">(+91) 8427311044</span>
              </span>
              <span className="text-white font-serif font-normal">
                Kunal: <span className="font-light">(+91) 8604329827</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
