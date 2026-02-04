import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title text-5xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Drop us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up delay-100">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 font-sans">Email Us</h3>
                  <p className="text-muted-foreground text-sm">hello@trendyshoepoint.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 font-sans">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 font-sans">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    123 Fashion Street<br />
                    Style City, SC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-up delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-modern"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-modern resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="btn-accent inline-flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
