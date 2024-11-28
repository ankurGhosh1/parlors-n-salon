import React, { useState } from "react";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

function Contact() {
  const [successToggle, setSuccessToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the form data to the API route
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccessToggle(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } else {
      alert("There was a problem submitting your message.");
    }
  };

  return (
    <>
      <NextSeo
        title="Contact - MyDrivingSchools.com"
        description=""
        openGraph={{
          url: "https://www.mydrivingschools.com/contact",
          title: "Contact - MyDrivingSchools.com",
          description: "",
          images: [
            {
              url: "https://www.mydrivingschools.com/logo.jpg",
              width: 800,
              height: 600,
              alt: "Home Image",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: "https://www.mydrivingschools.com/contact",
          },
        ]}
      />
      <Layout>
        <Container className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="my-36 bg-white shadow-md w-[640px] max-md:w-full p-5"
          >
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange text-white py-2 px-4 rounded-md"
            >
              Send
            </button>
          </form>
          {successToggle ? (
            <div className="bg-orange px-5 py-3 rounded-xl text-white mb-16">
              <p>Thank you for your submission!</p>
            </div>
          ) : null}
        </Container>
      </Layout>
    </>
  );
}

export default Contact;
