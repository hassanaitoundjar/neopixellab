import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Twitter, Send, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Neo Pixel Lab",
    "description": "Get in touch with Neo Pixel Lab for support, questions, or feedback about our image conversion tools.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Neo Pixel Lab",
      "email": "hello@neopixellab.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@neopixellab.com"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Neo Pixel Lab - Get Support & Send Feedback"
        description="Contact Neo Pixel Lab for support, questions, or feedback about our free image conversion tools. We typically respond within 24 hours."
        keywords="contact neo pixel lab, image converter support, customer service, feedback, help, technical support"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-glass mb-12 max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or need help? We'd love to hear from you. 
            Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-surface p-8 text-center hover:scale-105 smooth-transition">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-muted-glass mb-4">
                For general inquiries and support
              </p>
              <a 
                href="mailto:hello@neopixellab.com" 
                className="text-primary hover:underline font-medium"
              >
                hello@neopixellab.com
              </a>
            </Card>

            <Card className="glass-surface p-8 text-center hover:scale-105 smooth-transition">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">GitHub</h3>
              <p className="text-muted-glass mb-4">
                Report bugs and contribute
              </p>
              <a 
                href="https://github.com/neopixellab" 
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @neopixellab
              </a>
            </Card>

            <Card className="glass-surface p-8 text-center hover:scale-105 smooth-transition">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Twitter</h3>
              <p className="text-muted-glass mb-4">
                Follow us for updates
              </p>
              <a 
                href="https://twitter.com/neopixellab" 
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @neopixellab
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-surface p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:scale-105 smooth-transition"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="glass-surface p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                    <p className="text-muted-glass">
                      We typically respond within 24 hours during business days. 
                      For urgent issues, please include "URGENT" in your subject line.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-surface p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support</h3>
                    <p className="text-muted-glass">
                      Need help with the converter? Check our FAQ section first, 
                      or send us a message with details about your issue.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-surface p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-muted-glass">
                      We're a distributed team working remotely to bring you 
                      the best image conversion tools from around the globe.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="space-y-6">
            <Card className="glass-surface p-6">
              <h3 className="text-lg font-semibold mb-2">Is the converter really free?</h3>
              <p className="text-muted-glass">
                Yes! Neo Pixel Lab is completely free to use with no hidden costs, 
                registration requirements, or usage limits.
              </p>
            </Card>

            <Card className="glass-surface p-6">
              <h3 className="text-lg font-semibold mb-2">Are my images safe?</h3>
              <p className="text-muted-glass">
                Absolutely. All processing happens locally in your browser. 
                Your images never leave your device or get uploaded to our servers.
              </p>
            </Card>

            <Card className="glass-surface p-6">
              <h3 className="text-lg font-semibold mb-2">What formats are supported?</h3>
              <p className="text-muted-glass">
                We support all major image formats including JPG, PNG, WEBP, GIF, 
                BMP, ICO, and TIFF with more formats being added regularly.
              </p>
            </Card>

            <Card className="glass-surface p-6">
              <h3 className="text-lg font-semibold mb-2">Can I convert multiple images at once?</h3>
              <p className="text-muted-glass">
                Yes! Our batch processing feature allows you to convert multiple 
                images simultaneously and download them individually or as a zip file.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
