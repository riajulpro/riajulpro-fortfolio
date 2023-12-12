import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3sivgzb",
        "template_oyh0yhi",
        form.current,
        "bNSaKt3JA0gNiLjuY"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Your message has been send",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" bg-bgColor rounded-lg p-4"
    >
      <input
        type="text"
        name="user_name"
        className="p-2 rounded-md w-full mb-2 text-black"
        placeholder="Enter Your Name"
      />
      <input
        type="email"
        name="user_email"
        className="p-2 rounded-md w-full mb-2 text-black"
        placeholder="Enter Your Email"
      />
      <textarea
        name="message"
        className="p-2 rounded-md w-full mb-2 text-black"
        placeholder="Enter Your Message"
        cols="30"
        rows="4"
      ></textarea>
      <input
        type="submit"
        className="p-2 rounded-md bg-colorPrimary text-colorBlack hover:bg-colorBlack hover:text-colorPrimary cursor-pointer active:scale-95"
        value="Send Message"
      />
    </form>
  );
};

export default EmailForm;
