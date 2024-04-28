import React from "react";
import { f_inter_700 } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaPhoneAlt, FaGithub } from "react-icons/fa";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center flex-col pt-32 sm:pr-[48px] bg-[#ffffff23]">
        {/* Heading */}
        <div className="w-full px-3 py-8 bg-[#ffffff8a] flex items-center justify-center">
          <h1
            className={`uppercase text-3xl lg:text-4xl text-black ${f_inter_700.className} font-bold`}
            style={{
              WebkitTextStrokeWidth: 1,
              WebkitTextStrokeColor: "#C4B567",
            }}
          >
            MEET THE TEAM
          </h1>
        </div>

        {/* Blocks */}
        <div className="w-full py-5 px-5 mt-20 relative flex flex-col items-start gap-[161px]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40 my-2 w-full">
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/pranav.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] sm:rounded-full rounded-md border-2 border-black border-solid sm:absolute -top-[50%] left-[27%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Pranav Gupta
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    President
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/pranav-gupta-863179225/"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://instagram.com/yolo.pranav"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:8427311044"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"https://github.com/yolo-pranav"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] w-full max-w-xs lg:w-fit relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/riya.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] right-[27%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center sm:pr-4`}
                  >
                    Riya Bansal
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1 text-center`}
                  >
                    Vice President
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/riya-bansal-361718230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://instagram.com/bansalriya_21"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:7717524508"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"https://github.com/Riya3002"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40 xl:gap-32 lg:gap-10 w-full my-2">
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/kunal.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] left-[27%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Kunal
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1 text-center`}
                  >
                    General Secretary
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/kunal7266"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://www.instagram.com/kunal.o_o7266"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:8604329827"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"https://www.github.com/giant-nova"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/harsh.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] left-[27%] lg:-top-[50%] lg:left-[20%]"
                />
                <div className="px-5 py-2 mt-6 flex flex-col items-center justify-between w-full">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Harsh Anand
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Advisory
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/harsh-anand-singh-08"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://instagram.com/harshanand"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:9877809088"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/pragun.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] right-[27%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Pragun Gupta
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1 text-center`}
                  >
                    General Secretary
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/pragun-gupta-7884b3270/"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://instagram.com/pragun77"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:8360254763"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"https://github.com/Pragun77"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40 w-full my-2">
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
              style={{ boxShadow: "-5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/lovish.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] left-[27%] lg:-top-[25%] lg:-left-[25%]"
                />
                <div className="lg:pr-3 lg:pl-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center sm:pl-1`}
                  >
                    Lovish Singla
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1 text-center`}
                  >
                    Non Tech Lead
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"https://www.linkedin.com/in/lovish-k-singla"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://instagram.com/lovi.singla"}>
                  <FaInstagram />
                </Link>
                <Link href={"tel:9872906146"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"https://github.com/Lovish-Singla"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div
              className="bg-[#D9D9D9] lg:w-fit w-full max-w-xs relative px-5 py-4 border-2 border-solid border-black lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              style={{ boxShadow: "5px 5px 5px #000000ba" }}
            >
              <div className="p-1 flex flex-col sm:flex-row">
                <Image
                  src={"/members/ashish.jpg"}
                  alt="Team"
                  width={500}
                  height={250}
                  className="w-full max-h-[250px] sm:w-[150px] sm:h-[150px] rounded-md sm:rounded-full border-2 border-black border-solid sm:absolute -top-[50%] right-[27%] lg:-top-[25%] lg:-right-[25%]"
                />
                <div className="lg:pl-3 lg:pr-12 py-2 px-5 mt-6 lg:mt-0 flex flex-col items-center justify-between w-full lg:max-w-[200px]">
                  <h2
                    className={`text-[#000] text-2xl font-normal ${f_inter_700.className} text-wrap text-center`}
                  >
                    Ashish Sharma
                  </h2>
                  <span
                    className={`${f_inter_700.className} text-[#A19B15] text-2xl font-black py-1`}
                  >
                    Tech Lead
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-around py-3 pyx-2 text-black font-black text-base">
                <Link href={"#"}>
                  <FaLinkedin />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
                <Link href={"#"}>
                  <FaPhoneAlt />
                </Link>
                <Link href={"#"}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masthead;
