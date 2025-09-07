import React from 'react';
import { Cookie, Shield, Eye, Settings, Globe, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const CookiePolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy - Neo Pixel Lab",
    "description": "Cookie Policy for Neo Pixel Lab. Learn about how we use cookies and how to manage your cookie preferences.",
    "dateModified": "2025-01-07"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Cookie Policy - Neo Pixel Lab | Cookie Usage & Management"
        description="Neo Pixel Lab Cookie Policy. Learn about the cookies we use, why we use them, and how to manage your cookie preferences."
        keywords="cookie policy, cookies, tracking, privacy, cookie management, GDPR cookies"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-6">
              <Cookie className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Cookie Information</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Cookie Policy</span>
            </h1>
            <p className="text-xl text-muted-glass max-w-3xl mx-auto">
              Last updated: January 7, 2025
            </p>
          </div>

          {/* Cookie Management */}
          <Card className="glass-surface p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-primary" />
              Manage Your Cookie Preferences
            </h2>
            <p className="text-muted-glass mb-6">
              You can control which cookies we use by adjusting your preferences below or through your browser settings.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Accept All Cookies
              </Button>
              <Button variant="outline" className="glass-surface">
                Customize Settings
              </Button>
              <Button variant="outline" className="glass-surface">
                Reject Non-Essential
              </Button>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Neo Pixel Lab uses cookies to enhance your browsing experience, analyze website traffic, and provide 
                  personalized content and advertisements.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-glass mb-3">
                    These cookies are necessary for the website to function properly. They cannot be disabled.
                  </p>
                  <ul className="text-sm text-muted-glass space-y-1">
                    <li>• Session management and security</li>
                    <li>• User preferences (theme, language)</li>
                    <li>• Shopping cart functionality (if applicable)</li>
                    <li>• Form submission and validation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-glass mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="text-sm text-muted-glass space-y-1">
                    <li>• Google Analytics (_ga, _gid, _gat)</li>
                    <li>• Page views and session duration</li>
                    <li>• User behavior and navigation patterns</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advertising Cookies</h3>
                  <p className="text-muted-glass mb-3">
                    These cookies are used to show you relevant advertisements.
                  </p>
                  <ul className="text-sm text-muted-glass space-y-1">
                    <li>• Google AdSense cookies</li>
                    <li>• Personalized ad targeting</li>
                    <li>• Ad performance measurement</li>
                    <li>• Frequency capping</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p className="text-muted-glass mb-3">
                    These cookies enhance your experience by remembering your preferences.
                  </p>
                  <ul className="text-sm text-muted-glass space-y-1">
                    <li>• Language and region preferences</li>
                    <li>• Dark/light theme selection</li>
                    <li>• Conversion settings memory</li>
                    <li>• User interface customizations</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">3.1 Google Analytics</h3>
                <p>
                  We use Google Analytics to analyze website usage and improve our service. Google Analytics uses cookies to:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Track unique visitors and sessions</li>
                  <li>Understand user behavior and preferences</li>
                  <li>Generate reports on website performance</li>
                  <li>Help us optimize user experience</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">3.2 Google AdSense</h3>
                <p>
                  Google AdSense may use cookies to:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Show relevant advertisements</li>
                  <li>Measure ad performance</li>
                  <li>Prevent showing the same ad repeatedly</li>
                  <li>Enable personalized advertising (if consented)</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">3.3 Social Media</h3>
                <p>
                  If you share content through social media buttons, those platforms may set their own cookies.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">4. Cookie Duration</h2>
              <div className="space-y-4 text-muted-glass">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Session Cookies</h3>
                    <p className="text-sm">
                      These cookies are temporary and are deleted when you close your browser. They're used for:
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• User session management</li>
                      <li>• Form data retention</li>
                      <li>• Security features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Persistent Cookies</h3>
                    <p className="text-sm">
                      These cookies remain on your device for a set period or until deleted. They're used for:
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Remembering preferences</li>
                      <li>• Analytics and tracking</li>
                      <li>• Advertising personalization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-primary" />
                5. How to Control Cookies
              </h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">5.1 Browser Settings</h3>
                <p>
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set cookies to expire when you close your browser</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">5.2 Browser-Specific Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Chrome</h4>
                    <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Firefox</h4>
                    <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Safari</h4>
                    <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edge</h4>
                    <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">5.3 Opt-Out Tools</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                  <li><a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-yellow-500" />
                6. Impact of Disabling Cookies
              </h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Disabling cookies may affect your experience on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies Disabled</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Website may not function properly</li>
                      <li>• Settings won't be remembered</li>
                      <li>• Security features may be compromised</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies Disabled</h3>
                    <ul className="text-sm space-y-1">
                      <li>• We can't improve user experience</li>
                      <li>• Performance issues may go unnoticed</li>
                      <li>• Feature usage data unavailable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">7. Cookie Consent</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">7.1 GDPR Compliance</h3>
                <p>
                  For users in the European Union, we comply with GDPR requirements by:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Obtaining explicit consent for non-essential cookies</li>
                  <li>Providing clear information about cookie usage</li>
                  <li>Allowing you to withdraw consent at any time</li>
                  <li>Respecting your cookie preferences</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground">7.2 Consent Management</h3>
                <p>
                  You can manage your cookie consent through:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>The cookie banner when you first visit</li>
                  <li>The cookie settings panel (accessible anytime)</li>
                  <li>Your browser settings</li>
                  <li>Contacting us directly</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                  updated policy on our website.
                </p>
                <p>
                  We recommend checking this page periodically to stay informed about our cookie practices.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-primary" />
                9. Contact Us
              </h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> cookies@neopixellab.com</p>
                  <p><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">neopixellab.com/contact</a></p>
                  <p><strong>Subject Line:</strong> "Cookie Policy Inquiry"</p>
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

export default CookiePolicy;
