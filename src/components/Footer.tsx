import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Browse Venues', href: '#' },
        { name: 'Wedding Halls', href: '#' },
        { name: 'Banquet Halls', href: '#' },
        { name: 'Party Venues', href: '#' },
        { name: 'Conference Halls', href: '#' }
      ]
    },
    {
      title: 'For Venue Owners',
      links: [
        { name: 'List Your Venue', href: '#' },
        { name: 'Vendor Dashboard', href: '#' },
        { name: 'Pricing Plans', href: '#' },
        { name: 'Marketing Tools', href: '#' },
        { name: 'Support', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Booking Guide', href: '#' },
        { name: 'Cancellation Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' }
      ]
    }
  ];

  const cities = [
    'Chennai', 'Bangalore', 'Mumbai', 'Hyderabad', 'Pune', 'Coimbatore', 
    'Kochi', 'Madurai', 'Trichy', 'Salem', 'Vellore', 'Tirunelveli'
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="ml-3 text-xl font-bold text-primary">MandapamBook</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                India's leading platform for booking mandapams, marriage halls, and event venues. 
                Find, compare, and book the perfect venue for your special day.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>support@mandapambook.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm" 
                    className="w-10 h-10 p-0 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 p-6 bg-gradient-card rounded-xl border border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest venue deals and offers directly in your inbox
                </p>
              </div>
              <div className="flex w-full md:w-auto space-x-3">
                <Input 
                  placeholder="Enter your email"
                  className="md:w-80"
                />
                <Button className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Cities Section */}
          <div className="mt-12">
            <h3 className="font-semibold text-foreground mb-4">We're Available In</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-accent hover:text-accent-foreground"
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 MandapamBook. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;