import React from "react";
import { ContactInput, ContactMap, ContactMast } from "../ComponentExporter";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <ContactMast />
      <ContactInput />
      <ContactMap />
    </>
  );
};

export default Contact;
