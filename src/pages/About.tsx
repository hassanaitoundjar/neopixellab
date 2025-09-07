import React from 'react';
import { Shield, Zap, Heart, Users, Code, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Neo Pixel Lab",
    "description": "Learn about Neo Pixel Lab's mission to provide free, fast, and secure image conversion tools that work entirely in your browser.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Neo Pixel Lab",
      "description": "Privacy-first image conversion tools",
      "foundingDate": "2025",
      "specialty": "Image format conversion and optimization"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Neo Pixel Lab - Privacy-First Image Conversion Tools"
        description="Learn about Neo Pixel Lab's mission to democratize image processing with free, fast, and secure tools. Privacy-first image conversion with no data collection."
        keywords="about neo pixel lab, image converter company, privacy-first tools, browser-based image processing, free image tools, secure image conversion"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            About <span className="gradient-text">Neo Pixel Lab</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-glass mb-12 max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating tools that empower creators while respecting their privacy. 
            Our mission is to make professional-grade image processing accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-surface p-12 text-center mb-16">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-glass leading-relaxed">
              To democratize image processing by providing free, fast, and secure tools that work entirely 
              in your browser. We believe that privacy is a fundamental right, and powerful tools shouldn't 
              come at the cost of your personal data.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-surface p-8">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
              <p className="text-muted-glass leading-relaxed">
                All processing happens locally in your browser. Your images never leave your device, 
                ensuring complete privacy and security. No servers, no data collection, no tracking.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-muted-glass leading-relaxed">
                Built with modern web technologies for optimal performance. Convert hundreds of images 
                in seconds with our optimized processing engine.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <Code className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Open Source</h3>
              <p className="text-muted-glass leading-relaxed">
                Transparency is key to trust. Our code is open source, allowing the community to 
                verify our privacy claims and contribute to improvements.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <Globe className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Accessible</h3>
              <p className="text-muted-glass leading-relaxed">
                Free for everyone, everywhere. No registration, no limits, no premium features. 
                Professional-grade tools should be accessible to all creators.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Built by <span className="gradient-text">Creators</span>
          </h2>
          <p className="text-xl text-muted-glass mb-12">
            We're a team of developers, designers, and creators who understand the need for 
            reliable, privacy-focused tools in the creative workflow.
          </p>

          <Card className="glass-surface p-12">
            <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
            <p className="text-lg text-muted-glass mb-8 leading-relaxed">
              Our development is guided by user feedback and community needs. We're constantly 
              improving based on real-world usage and suggestions from our users.
            </p>
            <Button className="bg-gradient-primary">
              Join Our Community
            </Button>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="gradient-text">Values</span>
          </h2>
          
          <div className="space-y-8">
            <Card className="glass-surface p-8">
              <h3 className="text-xl font-semibold mb-4">🔒 Privacy by Design</h3>
              <p className="text-muted-glass leading-relaxed">
                Privacy isn't an afterthought—it's built into the core of everything we create. 
                Your data stays yours, always.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <h3 className="text-xl font-semibold mb-4">⚡ Performance Matters</h3>
              <p className="text-muted-glass leading-relaxed">
                We optimize every aspect of our tools to ensure they're fast, efficient, and 
                reliable for professional workflows.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <h3 className="text-xl font-semibold mb-4">🌍 Accessibility for All</h3>
              <p className="text-muted-glass leading-relaxed">
                Great tools should be available to everyone, regardless of budget, location, 
                or technical expertise.
              </p>
            </Card>

            <Card className="glass-surface p-8">
              <h3 className="text-xl font-semibold mb-4">🚀 Innovation First</h3>
              <p className="text-muted-glass leading-relaxed">
                We're constantly exploring new technologies and techniques to push the boundaries 
                of what's possible in browser-based image processing.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
