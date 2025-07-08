
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sdet.professional@email.com",
      href: "mailto:sdet.professional@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sdet-professional",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sdet-professional",
      color: "hover:text-gray-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/sdet_professional",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to discuss testing strategies, automation frameworks, or quality assurance challenges? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300 group"
                >
                  <info.icon className="text-emerald-400 group-hover:text-emerald-300 mr-4" size={24} />
                  <div>
                    <div className="text-slate-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-700 rounded-lg text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={18} />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
