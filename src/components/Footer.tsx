import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Github,
  Twitter,
  Heart,
  Shield,
  FileText,
  Cookie,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Image Converter", href: "/" },
      { name: "JPG to PNG", href: "/jpg-to-png" },
      { name: "PNG to WEBP", href: "/png-to-webp" },
      { name: "WEBP Converter", href: "/webp-converter" },
      { name: "GIF Converter", href: "/gif-converter" },
      { name: "Batch Converter", href: "/#converter" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "API Documentation", href: "/api-docs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR Compliance", href: "/gdpr-compliance" },
      { name: "Data Protection", href: "/data-protection" },
    ],
    resources: [
      { name: "Image Formats Guide", href: "/image-formats" },
      { name: "Compression Tips", href: "/compression-guide" },
      { name: "Best Practices", href: "/best-practices" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "FAQ", href: "/faq" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/neopixellab", icon: Twitter },
    { name: "GitHub", href: "https://github.com/neopixellab", icon: Github },
    { name: "Email", href: "mailto:hello@neopixellab.com", icon: Mail },
  ];

  return (
    <footer className="bg-background border-t border-glass-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Neo Pixel Lab
              </span>
            </Link>
            <p className="text-muted-glass mb-6 leading-relaxed">
              Free, fast, and secure image conversion tools. Convert between 7+
              formats with advanced features. Your privacy is our priority.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="glass-surface hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-glass hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-glass hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-glass hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    {link.name === "Privacy Policy" && (
                      <Shield className="w-3 h-3 ml-1" />
                    )}
                    {link.name === "Terms of Service" && (
                      <FileText className="w-3 h-3 ml-1" />
                    )}
                    {link.name === "Cookie Policy" && (
                      <Cookie className="w-3 h-3 ml-1" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-glass hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-glass-border" />

        {/* Newsletter Signup */}
        <div className="glass-surface p-8 rounded-2xl mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated
            </h3>
            <p className="text-muted-glass mb-6">
              Get notified about new features, format support, and optimization
              tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 glass-surface rounded-lg border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-glass mt-3">
              No spam, unsubscribe anytime. Read our{" "}
              <Link
                to="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-glass-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-glass">
              © {currentYear} Neo Pixel Lab. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-glass">
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                Made with privacy in mind
              </span>
              <span>•</span>
              <span>100% Client-Side Processing</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-glass">
            <span>🌍 Available in 15+ languages</span>
            <span>•</span>
            <span>🚀 99.9% Uptime</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-glass-border">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-glass">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cookie className="w-4 h-4 text-orange-500" />
              <span>Cookie Consent</span>
            </div>
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-4 h-4 text-purple-500" />
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
