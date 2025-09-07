import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel } from 'lucide-react';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Neo Pixel Lab",
    "description": "Terms of Service for Neo Pixel Lab image converter. Legal terms and conditions for using our free image conversion service.",
    "dateModified": "2025-01-07"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms of Service - Neo Pixel Lab | Legal Terms & Conditions"
        description="Terms of Service for Neo Pixel Lab. Legal terms and conditions for using our free image converter and related services."
        keywords="terms of service, legal terms, conditions, image converter terms, user agreement"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-6">
              <Scale className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Legal Terms</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-xl text-muted-glass max-w-3xl mx-auto">
              Last updated: January 7, 2025
            </p>
          </div>

          {/* Quick Overview */}
          <Card className="glass-surface p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-primary" />
              Terms Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-500">✓ You Can</h3>
                <ul className="text-sm text-muted-glass space-y-1">
                  <li>• Use our service for free</li>
                  <li>• Convert unlimited images</li>
                  <li>• Use for personal and commercial purposes</li>
                  <li>• Share converted images freely</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-red-500">✗ You Cannot</h3>
                <ul className="text-sm text-muted-glass space-y-1">
                  <li>• Upload illegal or harmful content</li>
                  <li>• Attempt to hack or abuse the service</li>
                  <li>• Resell or redistribute our service</li>
                  <li>• Violate others' intellectual property</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  By accessing and using Neo Pixel Lab ("the Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our website located at neopixellab.com 
                  (the "Service") operated by Neo Pixel Lab ("us", "we", or "our").
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">2.1 Service Overview</h3>
                <p>
                  Neo Pixel Lab provides a free, browser-based image conversion service that allows users to convert 
                  images between various formats including JPG, PNG, WEBP, GIF, BMP, ICO, and TIFF.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">2.2 Key Features</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Client-side image processing (no server uploads)</li>
                  <li>Multiple format support</li>
                  <li>Batch processing capabilities</li>
                  <li>Advanced compression and resizing options</li>
                  <li>Privacy-first approach</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">2.3 Service Availability</h3>
                <p>
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may temporarily 
                  suspend the service for maintenance, updates, or other operational reasons.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">3.1 Acceptable Use</h3>
                <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Upload, convert, or process any illegal, harmful, or offensive content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the intellectual property rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service to distribute malware or harmful code</li>
                  <li>Engage in any activity that could harm or disrupt the service</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">3.2 Content Responsibility</h3>
                <p>
                  You are solely responsible for any images or content you process through our service. You represent 
                  and warrant that you have the right to use, convert, and distribute any content you upload.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">3.3 Account Security</h3>
                <p>
                  While we don't require accounts for basic service use, if you subscribe to our newsletter or contact us, 
                  you're responsible for maintaining the confidentiality of any login credentials.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">4.1 Service Ownership</h3>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive 
                  property of Neo Pixel Lab and its licensors. The service is protected by copyright, trademark, and 
                  other laws.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">4.2 User Content</h3>
                <p>
                  You retain all rights to any images or content you process through our service. We do not claim 
                  ownership of your content and do not store your images on our servers.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">4.3 License to Use Service</h3>
                <p>
                  We grant you a personal, non-exclusive, non-transferable, limited license to use the Service for 
                  your personal or commercial needs in accordance with these Terms.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
                5. Disclaimers and Limitations
              </h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">5.1 Service "As Is"</h3>
                <p>
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or 
                  implied, and hereby disclaim all other warranties including, without limitation, implied warranties 
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">5.2 No Guarantee of Results</h3>
                <p>
                  While we strive to provide high-quality image conversion, we do not guarantee that the converted 
                  images will meet your specific requirements or that the service will be error-free.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">5.3 Limitation of Liability</h3>
                <p>
                  In no event shall Neo Pixel Lab be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of the Service.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Protection</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
                  information when you use our Service. By using our Service, you agree to the collection and use of 
                  information in accordance with our Privacy Policy.
                </p>
                <p>
                  Key privacy highlights:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>All image processing happens in your browser</li>
                  <li>We don't store or transmit your images</li>
                  <li>Minimal data collection for analytics only</li>
                  <li>GDPR and privacy law compliant</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">7. Advertising and Third-Party Services</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">7.1 Advertisements</h3>
                <p>
                  We may display advertisements through Google AdSense or other advertising networks. These ads help 
                  us keep the service free for all users.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">7.2 Third-Party Links</h3>
                <p>
                  Our Service may contain links to third-party websites or services. We are not responsible for the 
                  content, privacy policies, or practices of any third-party websites or services.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">7.3 Analytics</h3>
                <p>
                  We use Google Analytics to understand how our service is used. This helps us improve the user experience 
                  and service quality.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">8.1 Termination by You</h3>
                <p>
                  You may stop using our Service at any time. Since we don't require accounts for basic usage, 
                  simply closing your browser ends your session.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">8.2 Termination by Us</h3>
                <p>
                  We may terminate or suspend your access immediately, without prior notice, if you breach these Terms 
                  or engage in prohibited activities.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">8.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to use the Service will cease immediately. Since we don't store your 
                  data, there's no data to delete upon termination.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
                  try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  Your continued use of the Service after any changes constitutes acceptance of those changes. We recommend 
                  reviewing these Terms periodically for any updates.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which Neo Pixel Lab 
                  operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of the Service will be resolved through binding 
                  arbitration in accordance with the rules of the applicable arbitration association.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                11. Contact Information
              </h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@neopixellab.com</p>
                  <p><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">neopixellab.com/contact</a></p>
                  <p><strong>Subject Line:</strong> "Terms of Service Inquiry"</p>
                  <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Gavel className="w-6 h-6 mr-2 text-primary" />
                12. Severability
              </h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
                  and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
                  applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
