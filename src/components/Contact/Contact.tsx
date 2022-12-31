import React, { useRef, useState } from "react";
import * as emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_0gaq0hd",
        "template_0jxieew",
        form.current ? form.current : "nothing",
        "yaXBT1fCWtR1RiCSu"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setShowConfirmation(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  if (showConfirmation) {
    return <p>Your message was sent successfully!</p>;
  } else {
    return (
      <>
        {isSending ? (
          <p>Sending your message...</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <br />
            <label>Email</label>
            <input type="email" name="user_email" />
            <br />
            <label>Message</label>
            <textarea name="message" />
            <br />
            <input type="submit" value="Send" />
          </form>
        )}
      </>
    );
  }
};

export default ContactUs;
