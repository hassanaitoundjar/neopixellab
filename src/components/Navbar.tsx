import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Home, Image, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Converter', href: '#converter', icon: Image },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const scrollToConverter = () => {
    const element = document.getElementById('converter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    if (href === '#converter') {
      scrollToConverter();
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-glass-border shadow-glass'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:scale-105 smooth-transition"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">
              Neo Pixel Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return item.href === '#converter' ? (
                <button
                  key={item.name}
                  onClick={scrollToConverter}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
                    'text-muted-foreground hover:text-foreground hover:bg-glass-surface'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
                    isActive
                      ? 'text-primary bg-glass-surface'
                      : 'text-muted-foreground hover:text-foreground hover:bg-glass-surface'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={scrollToConverter}
              className="bg-gradient-primary hover:scale-105 smooth-transition shadow-glass"
            >
              Start Converting
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-glass-surface"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-surface rounded-lg mt-2 border border-glass-border">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return item.href === '#converter' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-colors',
                      'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors',
                      isActive
                        ? 'text-primary bg-background/50'
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-glass-border">
                <Button
                  onClick={() => handleNavClick('#converter')}
                  className="w-full bg-gradient-primary"
                >
                  Start Converting
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
