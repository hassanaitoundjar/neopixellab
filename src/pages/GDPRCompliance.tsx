import React from 'react';
import { Shield, CheckCircle, Users, Lock, Eye, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const GDPRCompliance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "GDPR Compliance - Neo Pixel Lab",
    "description": "GDPR compliance information for Neo Pixel Lab. Learn how we protect EU users' data rights and ensure regulatory compliance.",
    "dateModified": "2025-01-07"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="GDPR Compliance - Neo Pixel Lab | EU Data Protection Rights"
        description="Neo Pixel Lab GDPR compliance information. Learn about your data protection rights, how we handle EU user data, and our commitment to privacy regulation compliance."
        keywords="GDPR compliance, EU data protection, privacy rights, data subject rights, GDPR Neo Pixel Lab"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-6">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm font-medium">EU Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">GDPR Compliance</span>
            </h1>
            <p className="text-xl text-muted-glass max-w-3xl mx-auto">
              Your data protection rights under the General Data Protection Regulation (GDPR)
            </p>
          </div>

          {/* GDPR Overview */}
          <Card className="glass-surface p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              Our GDPR Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h3 className="font-semibold mb-2">Data Minimization</h3>
                <p className="text-sm text-muted-glass">We collect only essential data needed for service functionality</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-glass">Clear information about data processing activities</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h3 className="font-semibold mb-2">User Rights</h3>
                <p className="text-sm text-muted-glass">Full respect for your data subject rights</p>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">1. What is GDPR?</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into 
                  effect on May 25, 2018. It applies to all organizations that process personal data of individuals 
                  residing in the European Union, regardless of where the organization is located.
                </p>
                <p>
                  Neo Pixel Lab is committed to full GDPR compliance and respects the data protection rights of all 
                  EU users. This page outlines how we meet GDPR requirements and protect your personal data.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">2. Your Rights Under GDPR</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Information</h3>
                  <p className="text-muted-glass mb-3">
                    You have the right to be informed about how your personal data is collected, used, and processed.
                  </p>
                  <p className="text-sm text-muted-glass">
                    <strong>How we comply:</strong> Our Privacy Policy provides clear, comprehensive information about our data practices.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right of Access</h3>
                  <p className="text-muted-glass mb-3">
                    You can request access to your personal data and information about how it's being processed.
                  </p>
                  <p className="text-sm text-muted-glass">
                    <strong>How to exercise:</strong> Contact us at gdpr@neopixellab.com with your access request.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Rectification</h3>
                  <p className="text-muted-glass mb-3">
                    You can request correction of inaccurate or incomplete personal data.
                  </p>
                  <p className="text-sm text-muted-glass">
                    <strong>Response time:</strong> We will correct inaccurate data within 30 days of your request.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                  <p className="text-muted-glass mb-3">
                    You can request deletion of your personal data in certain circumstances.
                  </p>
                  <p className="text-sm text-muted-glass">
                    <strong>Note:</strong> Since we don't store your images, most data is automatically deleted after your session.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Restrict Processing</h3>
                  <p className="text-muted-glass mb-3">
                    You can request that we limit how we process your personal data in certain situations.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Data Portability</h3>
                  <p className="text-muted-glass mb-3">
                    You can request your personal data in a structured, commonly used format.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Object</h3>
                  <p className="text-muted-glass mb-3">
                    You can object to processing of your personal data for direct marketing or other purposes.
                  </p>
                  <p className="text-sm text-muted-glass">
                    <strong>Marketing:</strong> You can opt out of our newsletter at any time using the unsubscribe link.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Under GDPR, we must have a legal basis for processing your personal data. Here are the legal bases we rely on:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Legitimate Interest</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Website analytics and improvement</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Service optimization</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Consent</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Newsletter subscriptions</li>
                      <li>• Marketing communications</li>
                      <li>• Optional cookies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Processing Activities</h2>
              <div className="space-y-4 text-muted-glass">
                <h3 className="text-lg font-semibold text-foreground">4.1 Image Processing</h3>
                <p>
                  <strong>Data:</strong> Images you upload for conversion<br/>
                  <strong>Purpose:</strong> Format conversion service<br/>
                  <strong>Legal Basis:</strong> Legitimate interest (service provision)<br/>
                  <strong>Retention:</strong> Not stored - processed locally in your browser<br/>
                  <strong>Recipients:</strong> None - data never leaves your device
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">4.2 Analytics Data</h3>
                <p>
                  <strong>Data:</strong> Usage statistics, device information, IP address<br/>
                  <strong>Purpose:</strong> Service improvement and analytics<br/>
                  <strong>Legal Basis:</strong> Legitimate interest<br/>
                  <strong>Retention:</strong> 26 months (Google Analytics default)<br/>
                  <strong>Recipients:</strong> Google Analytics
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">4.3 Contact Information</h3>
                <p>
                  <strong>Data:</strong> Email address, name, message content<br/>
                  <strong>Purpose:</strong> Responding to inquiries and support<br/>
                  <strong>Legal Basis:</strong> Consent<br/>
                  <strong>Retention:</strong> Until resolved + 1 year for reference<br/>
                  <strong>Recipients:</strong> Our support team only
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">5. International Data Transfers</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  Some of our service providers (like Google Analytics) may transfer your data outside the EU. 
                  We ensure all transfers comply with GDPR requirements through:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules where applicable</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">6. Data Security Measures</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technical Measures</h3>
                    <ul className="text-sm space-y-1">
                      <li>• SSL/TLS encryption</li>
                      <li>• Client-side processing</li>
                      <li>• Regular security updates</li>
                      <li>• Access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Organizational Measures</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Staff training on data protection</li>
                      <li>• Data protection impact assessments</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular compliance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Breach Procedures</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Notify the relevant supervisory authority within 72 hours</li>
                  <li>Inform affected individuals without undue delay if high risk</li>
                  <li>Document the breach and our response measures</li>
                  <li>Take immediate steps to contain and remedy the breach</li>
                </ul>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">8. How to Exercise Your Rights</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  To exercise any of your GDPR rights, please contact us using the information below. 
                  We will respond to your request within one month.
                </p>
                
                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Email:</strong> gdpr@neopixellab.com</p>
                      <p><strong>Subject Line:</strong> "GDPR Rights Request"</p>
                      <p><strong>Response Time:</strong> Within 30 days</p>
                    </div>
                    <div>
                      <p><strong>Required Information:</strong></p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Your full name</li>
                        <li>• Email address</li>
                        <li>• Specific right you wish to exercise</li>
                        <li>• Proof of identity (if required)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Rights Request Form
                  </Button>
                  <Button variant="outline" className="glass-surface">
                    Contact GDPR Officer
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">9. Supervisory Authority</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  You have the right to lodge a complaint with a supervisory authority if you believe we have 
                  not handled your personal data in accordance with GDPR. You can contact your local data 
                  protection authority or the authority in the country where the alleged infringement occurred.
                </p>
                <p>
                  <strong>EU Data Protection Authorities:</strong> You can find contact information for all EU 
                  supervisory authorities on the European Data Protection Board website.
                </p>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">10. Updates to GDPR Compliance</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  We regularly review and update our GDPR compliance measures to ensure we maintain the highest 
                  standards of data protection. Any significant changes will be communicated through our Privacy Policy 
                  and this GDPR compliance page.
                </p>
                <p>
                  <strong>Last Review:</strong> January 7, 2025<br/>
                  <strong>Next Scheduled Review:</strong> July 7, 2025
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRCompliance;
