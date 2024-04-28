import React from "react";

type Props = {};

const Map = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#030028] py-6 px-20 flex flex-row items-center justify-center">
        <div className="w-1/2 p-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.921705701627!2d76.7543452753737!3d30.748700674576586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed92d45f4d9b%3A0x317139ae5eb2e9af!2sUIET%20Block-2!5e0!3m2!1sen!2sin!4v1714287370477!5m2!1sen!2sin" width="600" height="450" style={{"border":0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-1/2 p-1 flex items-center justify-center flex-col">
          <div
            className="text-center p-14"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.75) 66%, rgba(3, 0, 40, 0.75) 100%)",
              backdropFilter: "blur(2px)",
            }}
          >
            <h1 className="font-bold text-2xl my-2 w-full">OUR ADRESSS</h1>
            <p className="w-full font-normal text-xl px-5 py-2 text-center flex flex-col">
              <span>University Institute of Engineering and Technology</span>
              <span>Sector 25, South Campus,</span>
              <span>Panjab University,</span>
              <span>Chandigarh (Union Territory),</span>
              <span>INDIA. PINCODE: 160014</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
