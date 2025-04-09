"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactCard() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const { theme } = useTheme();
  console.log('theme---',theme);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();

    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }

    setCaptchaToken(token);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        captchaToken: token,
        timestamp: new Date(),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      (window as any).grecaptcha.reset();
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Card>
      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <div className="p-4">
          <CardHeader>
            <CardTitle>Message me</CardTitle>
          </CardHeader>
        </div>
        <CardContent>
          {submitted && (
            <p className="text-green-600 mb-4">
              Thank you for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex justify-center">
              <div
                className="g-recaptcha"
                data-sitekey="6Le9_gkrAAAAAIRBkvLJYNzwtKJ2V8knu7rEaTLG"
                data-theme='dark'
              ></div>
            </div>
            <button
              type="submit"
              className="w-46 p-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </MagicCard>
    </Card>
  );
}
