import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Menu, 
  X, 
  Search, 
  MapPin, 
  Phone, 
  User, 
  Heart,
  Calendar,
  Settings
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Browse Venues', href: '#venues' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-gradient-card backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="ml-3 text-xl font-bold text-primary">MandapamBook</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent/50 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary shadow-elegant">
              List Your Venue
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border/50 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-accent/50 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border/50 mt-3">
              <Button variant="ghost" size="sm" className="w-full justify-start mb-2">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start mb-2">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="default" size="sm" className="w-full bg-gradient-primary shadow-elegant">
                List Your Venue
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;