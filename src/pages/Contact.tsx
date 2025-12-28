"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">Let's Connect</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full mb-6" />
          <p className="text-lg text-muted-foreground font-light">
            I'd love to hear from you. Send me a message or connect on social media.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 border border-border shadow-md mb-12">
          <div className="mb-6">
            <label className="block text-foreground mb-2 font-semibold text-sm tracking-wide">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-light"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-foreground mb-2 font-semibold text-sm tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-light"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-foreground mb-2 font-semibold text-sm tracking-wide">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-light"
              placeholder="Your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm tracking-wide"
          >
            Send Message
          </button>
        </form>


      </div>
    </section>
  )
}
