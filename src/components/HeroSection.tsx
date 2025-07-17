import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  MapPin, 
  Calendar as CalendarIcon, 
  Users, 
  Filter,
  ArrowRight,
  Star,
  Shield,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-mandapam.jpg';

const HeroSection = () => {
  const [date, setDate] = useState<Date>();
  const [searchLocation, setSearchLocation] = useState('');
  const [capacity, setCapacity] = useState('');

  const features = [
    {
      icon: Shield,
      title: 'Verified Venues',
      description: 'All venues are verified and trusted'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'Compare prices and get the best deals'
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Book your venue in minutes'
    }
  ];

  const popularLocations = [
    'Chennai', 'Bangalore', 'Mumbai', 'Hyderabad', 'Pune', 'Coimbatore'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Mandapam" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground">
                <Star className="w-4 h-4 mr-2 text-warning" />
                India's #1 Mandapam Booking Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect
                <span className="text-transparent bg-clip-text bg-gradient-primary block">
                  Event Venue
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Book mandapams, marriage halls, and event venues across India. 
                Compare prices, check availability, and book instantly.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Search Form */}
          <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 shadow-elegant border border-border/50 animate-scale-in">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Venue</h2>
                <p className="text-muted-foreground">Search from thousands of verified venues</p>
              </div>

              <div className="space-y-4">
                {/* Location Search */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter city or area"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12 border-2 focus:border-primary"
                  />
                </div>

                {/* Date Picker */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full h-12 justify-start text-left font-normal border-2 hover:border-primary',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {date ? format(date, 'PPP') : <span>Select event date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>

                {/* Capacity */}
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Select value={capacity} onValueChange={setCapacity}>
                    <SelectTrigger className="pl-10 h-12 border-2 focus:border-primary">
                      <SelectValue placeholder="Guest capacity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50-100 guests</SelectItem>
                      <SelectItem value="100-300">100-300 guests</SelectItem>
                      <SelectItem value="300-500">300-500 guests</SelectItem>
                      <SelectItem value="500-1000">500-1000 guests</SelectItem>
                      <SelectItem value="1000+">1000+ guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <Button className="w-full h-12 bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
                  <Search className="w-5 h-5 mr-2" />
                  Search Venues
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Popular Locations */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Popular locations:</p>
                <div className="flex flex-wrap gap-2">
                  {popularLocations.map((location) => (
                    <Button
                      key={location}
                      variant="outline"
                      size="sm"
                      className="text-xs hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setSearchLocation(location)}
                    >
                      {location}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-bounce-gentle hidden lg:block" />
    </section>
  );
};

export default HeroSection;