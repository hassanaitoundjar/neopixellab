import React from 'react';
import { Shield, Eye, Lock, Database, Cookie, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Neo Pixel Lab",
    "description": "Privacy Policy for Neo Pixel Lab image converter. Learn how we protect your data and respect your privacy.",
    "dateModified": "2025-01-07"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy - Neo Pixel Lab | Data Protection & Privacy"
        description="Neo Pixel Lab Privacy Policy. Learn how we protect your data, handle cookies, and ensure your privacy while using our free image converter."
        keywords="privacy policy, data protection, GDPR compliance, cookie policy, image converter privacy"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-6">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-xl text-muted-glass max-w-3xl mx-auto">
              Last updated: January 7, 2025
            </p>
          </div>

          {/* Privacy Overview */}
          <Card className="glass-surface p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-primary" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h3 className="font-semibold mb-2">100% Client-Side</h3>
                <p className="text-sm text-muted-glass">Your images never leave your device</p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h3 className="font-semibold mb-2">No Data Storage</h3>
                <p className="text-sm text-muted-glass">We don't store any of your files</p>
              </div>
              <div className="text-center">
                <Cookie className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h3 className="font-semibold mb-2">Minimal Cookies</h3>
                <p className="text-sm text-muted-glass">Only essential cookies for functionality</p>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">1.1 Personal Information</h3>
                <p>
                  Neo Pixel Lab operates on a privacy-first principle. We do not collect, store, or process any personal information 
                  unless you voluntarily provide it through our contact forms or newsletter signup.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">1.2 Image Data</h3>
                <p>
                  <strong>Important:</strong> All image processing happens entirely in your browser. Your images are never uploaded 
                  to our servers, transmitted over the internet, or stored anywhere outside your device. This ensures complete privacy 
                  and security of your files.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">1.3 Analytics Data</h3>
                <p>
                  We use Google Analytics to understand how our service is used. This includes:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Page views and session duration</li>
                  <li>Browser type and device information</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Conversion events (anonymized usage statistics)</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">2.1 Service Improvement</h3>
                <p>
                  Analytics data helps us understand which features are most valuable and how to improve the user experience.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">2.2 Communication</h3>
                <p>
                  If you contact us or subscribe to our newsletter, we'll use your email address solely for responding to your 
                  inquiry or sending updates about our service.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">2.3 Legal Compliance</h3>
                <p>
                  We may process information as required by law or to protect our rights and the rights of our users.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">3. Cookies and Tracking</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">3.1 Essential Cookies</h3>
                <p>
                  We use minimal cookies necessary for the website to function properly, including:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Session management</li>
                  <li>User preferences (theme, language)</li>
                  <li>Security features</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">3.2 Analytics Cookies</h3>
                <p>
                  Google Analytics cookies help us understand website usage. You can opt out of analytics tracking through 
                  your browser settings or by using Google's opt-out browser add-on.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">3.3 Advertising Cookies</h3>
                <p>
                  We may display advertisements through Google AdSense. These ads may use cookies to show relevant content. 
                  You can control ad personalization through Google's Ad Settings.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">4.1 Third-Party Services</h3>
                <p>
                  We work with the following third-party services:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>Google AdSense:</strong> Advertising services</li>
                  <li><strong>Email Service Provider:</strong> Newsletter delivery (if subscribed)</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">4.2 Legal Requirements</h3>
                <p>
                  We may disclose information if required by law, court order, or to protect our rights and safety.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">4.3 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">5.1 GDPR Rights (EU Users)</h3>
                <p>
                  Under GDPR, you have the right to:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data ("right to be forgotten")</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">5.2 Cookie Control</h3>
                <p>
                  You can control cookies through your browser settings. Note that disabling essential cookies may affect 
                  website functionality.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">5.3 Opt-Out Options</h3>
                <p>
                  You can opt out of:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Google Analytics tracking</li>
                  <li>Personalized advertising</li>
                  <li>Email communications (unsubscribe link provided)</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>SSL/TLS encryption for all data transmission</li>
                  <li>Client-side processing ensures your files never leave your device</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited data collection minimizes exposure risk</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Our service is hosted on servers that may be located in different countries. We ensure that any 
                  international data transfers comply with applicable privacy laws and regulations.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Our service is not directed to children under 13. We do not knowingly collect personal information 
                  from children under 13. If you become aware that a child has provided us with personal information, 
                  please contact us immediately.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-primary" />
                10. Contact Us
              </h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@neopixellab.com</p>
                  <p><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">neopixellab.com/contact</a></p>
                  <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
