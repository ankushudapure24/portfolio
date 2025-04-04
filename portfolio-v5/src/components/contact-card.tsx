"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";

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

  // Load Google reCAPTCHA script
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();

    if (!token) {
      alert("Please complete the CAPTCHA");
      return;
    }

    setCaptchaToken(token); // store if needed
    console.log("CAPTCHA Token:", token);
    console.log("Form Data:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    (window as any).grecaptcha.reset();
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
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Google reCAPTCHA Widget */}
            <div className="flex justify-center">
              <div
                className="g-recaptcha"
                data-sitekey="6Le9_gkrAAAAAIRBkvLJYNzwtKJ2V8knu7rEaTLG"
              ></div>
            </div>

            <button
              type="submit"
              className={`w-full p-3 rounded-lg bg-blue-500 text-white`}
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </MagicCard>
    </Card>
  );
}
