"use client";
import React from "react";
import NavBar from "../ui/navbar";
import { sendMessage } from "./actions";
import { useTransition } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(async () => {
      try {
        const res = await sendMessage(formData);
        if (res?.success) {
          toast.success("Message sent successfully!");
          e.target.reset();
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div className="mt-10 p-[40px] flex flex-col justify-center items-center">
        <h1 className="text-lg md:text-2xl font-bold pb-[30px] text-center">
          Thanks for taking the time to reach out
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-[200px] sm:w-[300px] md:w-[500px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-[5px]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="text-black  px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4 mb-4 w-[200px] sm:w-[300px] md:w-[500px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-[5px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="text-black  px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4 mb-4 w-[200px] sm:w-[300px] md:w-[500px]">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-[5px]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              className="text-black px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={isPending}
              className={`px-4 py-2 rounded-md text-white ${
                isPending ? "bg-gray-400" : "bg-[#6e06f2]"
              }`}
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Contact;
