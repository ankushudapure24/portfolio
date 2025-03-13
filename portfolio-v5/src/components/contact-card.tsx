"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";


import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}
  
export function ContactCard() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </MagicCard>
    </Card>
  );
}
