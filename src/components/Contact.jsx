import React, { useState } from "react";
import { headers } from "./data";
import IconError from "../assets/images/icon-error.svg?react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // If we get here, email is valid
    setError("");
    console.log("Form submitted with email:", email);
    // Add your form submission logic here
  };

  return (
    <section className="w-screen common-padding bg-blue-600">
      <div className="md:w-3/4 flex-center flex-col mx-auto">
        <div className="text-white flex-center flex-col text-center">
          <p className="uppercase leading-relaxed tracking-[6px] mb-10">
            {headers[4].desc}
          </p>
          <h2 className="lg:text-5xl md:text-4xl text-3xl mb-10 font-medium">
            {headers[4].title}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col md:flex-row gap-6 w-full "
        >
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Clear error when user starts typing
                if (error) setError("");
              }}
              onInvalid={(e) => e.preventDefault()} // Prevent default HTML5 validation
              placeholder={headers[4].form.placeholder}
              className={`py-3 px-5 flex-1 rounded ${
                error ? "border-2 border-red-400" : ""
              } w-full`}
              aria-invalid={!!error}
              aria-describedby="email-error"
            />
            {error && (
              <>
                <IconError className="absolute top-1/3 right-[.75rem]" />
                <p
                  id="email-error"
                  className="bg-red-400 text-white text-sm absolute w-full py-1 px-4 rounded-bl-md rounded-br-md"
                >
                  {error}
                </p>
              </>
            )}
          </div>
          <button className="button-contact whitespace-nowrap" type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
