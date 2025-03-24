"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useState, ChangeEvent, FormEvent } from "react";

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

  // CAPTCHA state
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);

  const correctAnswer = num1 + num2;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaAnswer(e.target.value);
    setCaptchaValid(parseInt(e.target.value) === correctAnswer);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaValid) {
      alert("CAPTCHA incorrect. Try again.");
      return;
    }

    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset CAPTCHA
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaAnswer("");
    setCaptchaValid(false);
  };

  const { theme } = useTheme();
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

            {/* CAPTCHA */}
            <div className="flex items-center space-x-2">
              <span>
                {num1} + {num2} =
              </span>
              <input
                type="number"
                placeholder="Answer"
                required
                className="w-16 p-2 border rounded-lg"
                value={captchaAnswer}
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              disabled={!captchaValid}
              className={`w-full p-3 rounded-lg ${
                captchaValid
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </MagicCard>
    </Card>
  );
}
