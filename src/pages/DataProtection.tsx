import React from 'react';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const DataProtection = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Protection - Neo Pixel Lab",
    "description": "Comprehensive data protection information for Neo Pixel Lab. Learn about our security measures, data handling practices, and commitment to protecting your privacy.",
    "dateModified": "2025-01-07"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Data Protection - Neo Pixel Lab | Security & Privacy Measures"
        description="Neo Pixel Lab data protection policies and security measures. Learn how we protect your personal data, implement security controls, and ensure privacy compliance."
        keywords="data protection, privacy security, data security, personal data protection, Neo Pixel Lab security"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-6">
              <Lock className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Security & Privacy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Data Protection</span>
            </h1>
            <p className="text-xl text-muted-glass max-w-3xl mx-auto">
              Comprehensive security measures and data protection practices to safeguard your privacy
            </p>
          </div>

          {/* Security Overview */}
          <Card className="glass-surface p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-500" />
              Our Security Commitment
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h3 className="font-semibold mb-2">Encryption</h3>
                <p className="text-sm text-muted-glass">End-to-end SSL/TLS protection</p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h3 className="font-semibold mb-2">Local Processing</h3>
                <p className="text-sm text-muted-glass">Images never leave your device</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-glass">Clear data practices</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h3 className="font-semibold mb-2">User Control</h3>
                <p className="text-sm text-muted-glass">You control your data</p>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">1. Data Protection Principles</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Privacy by Design</h3>
                  <p className="text-muted-glass">
                    We build privacy protection into our systems from the ground up. Our image processing 
                    happens entirely in your browser, ensuring your files never reach our servers.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Minimization</h3>
                  <p className="text-muted-glass">
                    We collect only the minimum data necessary to provide our services. No unnecessary 
                    personal information is requested or stored.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Purpose Limitation</h3>
                  <p className="text-muted-glass">
                    Data is collected and processed only for specific, legitimate purposes that are 
                    clearly communicated to users.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Transparency</h3>
                  <p className="text-muted-glass">
                    We provide clear, understandable information about our data practices through 
                    our privacy policy and this data protection page.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">2. Technical Security Measures</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-blue-500" />
                      Encryption & Transport Security
                    </h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• TLS 1.3 encryption for all connections</li>
                      <li>• HTTPS enforced across all pages</li>
                      <li>• Secure headers (HSTS, CSP, etc.)</li>
                      <li>• Certificate pinning implementation</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-green-500" />
                      Data Processing Security
                    </h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Client-side image processing</li>
                      <li>• No server-side file storage</li>
                      <li>• Memory-only operations</li>
                      <li>• Automatic data cleanup</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-purple-500" />
                      Application Security
                    </h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Content Security Policy (CSP)</li>
                      <li>• XSS protection mechanisms</li>
                      <li>• CSRF protection</li>
                      <li>• Input validation and sanitization</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-orange-500" />
                      Monitoring & Detection
                    </h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Real-time security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Regular security assessments</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">3. Data Categories & Protection</h2>
              <div className="space-y-6">
                <div className="border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-500" />
                    Image Files
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Protection Level:</strong> Maximum</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Processing:</strong> Client-side only</p>
                      <p className="text-sm text-muted-glass"><strong>Storage:</strong> Never stored on servers</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Transmission:</strong> Never transmitted</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Access:</strong> User only</p>
                      <p className="text-sm text-muted-glass"><strong>Retention:</strong> Session only</p>
                    </div>
                  </div>
                </div>

                <div className="border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-500" />
                    Analytics Data
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Protection Level:</strong> High</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Processing:</strong> Anonymized</p>
                      <p className="text-sm text-muted-glass"><strong>Storage:</strong> Google Analytics</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Transmission:</strong> Encrypted</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Access:</strong> Authorized staff only</p>
                      <p className="text-sm text-muted-glass"><strong>Retention:</strong> 26 months</p>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-purple-500" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Protection Level:</strong> High</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Processing:</strong> Secure systems</p>
                      <p className="text-sm text-muted-glass"><strong>Storage:</strong> Encrypted databases</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-glass mb-2"><strong>Transmission:</strong> TLS encrypted</p>
                      <p className="text-sm text-muted-glass mb-2"><strong>Access:</strong> Need-to-know basis</p>
                      <p className="text-sm text-muted-glass"><strong>Retention:</strong> As per policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">4. Organizational Security Measures</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Staff Training & Awareness</h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Regular data protection training</li>
                      <li>• Security awareness programs</li>
                      <li>• Incident response training</li>
                      <li>• Privacy impact assessment training</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Access Controls</h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Role-based access control (RBAC)</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Regular access reviews</li>
                      <li>• Principle of least privilege</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Policies & Procedures</h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Data protection policies</li>
                      <li>• Incident response procedures</li>
                      <li>• Data retention schedules</li>
                      <li>• Vendor management protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Compliance & Auditing</h3>
                    <ul className="text-sm text-muted-glass space-y-2">
                      <li>• Regular compliance assessments</li>
                      <li>• Internal security audits</li>
                      <li>• Third-party security reviews</li>
                      <li>• Continuous monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Breach Response</h2>
              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                    Immediate Response (0-24 hours)
                  </h3>
                  <ul className="text-sm text-muted-glass space-y-2">
                    <li>• Incident detection and assessment</li>
                    <li>• Containment measures implementation</li>
                    <li>• Internal incident team activation</li>
                    <li>• Initial impact assessment</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-yellow-500" />
                    Investigation & Assessment (24-72 hours)
                  </h3>
                  <ul className="text-sm text-muted-glass space-y-2">
                    <li>• Detailed forensic investigation</li>
                    <li>• Risk assessment for affected individuals</li>
                    <li>• Regulatory notification (if required)</li>
                    <li>• Documentation of incident details</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Recovery & Communication (72+ hours)
                  </h3>
                  <ul className="text-sm text-muted-glass space-y-2">
                    <li>• User notification (if high risk)</li>
                    <li>• System recovery and hardening</li>
                    <li>• Post-incident review and improvements</li>
                    <li>• Ongoing monitoring and support</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Data Processors</h2>
              <div className="space-y-6">
                <p className="text-muted-glass">
                  We work with carefully selected third-party processors who meet our strict data protection standards:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">Google Analytics</h3>
                    <div className="text-sm text-muted-glass space-y-1">
                      <p><strong>Purpose:</strong> Website analytics</p>
                      <p><strong>Data:</strong> Usage statistics, anonymized</p>
                      <p><strong>Location:</strong> EU/US (adequacy decision)</p>
                      <p><strong>Safeguards:</strong> Data Processing Amendment</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">CDN Providers</h3>
                    <div className="text-sm text-muted-glass space-y-1">
                      <p><strong>Purpose:</strong> Content delivery</p>
                      <p><strong>Data:</strong> IP addresses, request logs</p>
                      <p><strong>Location:</strong> Global network</p>
                      <p><strong>Safeguards:</strong> Standard Contractual Clauses</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Processor Selection Criteria</h3>
                  <ul className="text-sm text-muted-glass space-y-2">
                    <li>• GDPR compliance certification</li>
                    <li>• Adequate technical and organizational measures</li>
                    <li>• Data Processing Agreements (DPAs) in place</li>
                    <li>• Regular security assessments and audits</li>
                    <li>• Transparent data handling practices</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Subject Rights</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  You have comprehensive rights regarding your personal data. We provide easy mechanisms 
                  to exercise these rights:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">Request Types</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Access to your data</li>
                      <li>• Data correction/rectification</li>
                      <li>• Data deletion/erasure</li>
                      <li>• Processing restriction</li>
                      <li>• Data portability</li>
                      <li>• Object to processing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">Response Commitment</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Response within 30 days</li>
                      <li>• Free of charge (in most cases)</li>
                      <li>• Clear, understandable format</li>
                      <li>• Secure delivery methods</li>
                      <li>• Follow-up support available</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="bg-gradient-primary">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Data Request
                  </Button>
                  <Button variant="outline" className="glass-surface">
                    Contact Data Protection Officer
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-surface p-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <div className="space-y-4 text-muted-glass">
                <p>
                  For any data protection inquiries, concerns, or to exercise your rights, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">Data Protection Officer</h3>
                    <div className="text-sm space-y-1">
                      <p><strong>Email:</strong> dpo@neopixellab.com</p>
                      <p><strong>Subject:</strong> Data Protection Inquiry</p>
                      <p><strong>Response Time:</strong> 48 hours</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">Security Team</h3>
                    <div className="text-sm space-y-1">
                      <p><strong>Email:</strong> security@neopixellab.com</p>
                      <p><strong>Subject:</strong> Security Concern</p>
                      <p><strong>Response Time:</strong> 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;
