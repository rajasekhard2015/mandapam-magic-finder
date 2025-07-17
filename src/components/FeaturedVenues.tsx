import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import VenueCard from './VenueCard';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';
import venue4 from '@/assets/venue-4.jpg';

const FeaturedVenues = () => {
  const featuredVenues = [
    {
      id: '1',
      name: 'Royal Palace Marriage Hall',
      image: venue1,
      location: 'T. Nagar, Chennai',
      capacity: '500-800',
      price: '85,000',
      rating: 4.8,
      reviews: 245,
      amenities: ['Parking', 'WiFi', 'Catering', 'Photography'],
      verified: true,
      availability: 'available' as const
    },
    {
      id: '2',
      name: 'Heritage Mandapam',
      image: venue2,
      location: 'Mylapore, Chennai',
      capacity: '300-500',
      price: '65,000',
      rating: 4.7,
      reviews: 189,
      amenities: ['Traditional Decor', 'Parking', 'Catering', 'WiFi'],
      verified: true,
      availability: 'limited' as const
    },
    {
      id: '3',
      name: 'Modern Banquet Hall',
      image: venue3,
      location: 'Anna Nagar, Chennai',
      capacity: '200-400',
      price: '45,000',
      rating: 4.6,
      reviews: 156,
      amenities: ['AC', 'Parking', 'WiFi', 'Projector'],
      verified: true,
      availability: 'available' as const
    },
    {
      id: '4',
      name: 'Garden Paradise',
      image: venue4,
      location: 'ECR, Chennai',
      capacity: '400-600',
      price: '75,000',
      rating: 4.9,
      reviews: 298,
      amenities: ['Garden', 'Parking', 'Catering', 'Photography'],
      verified: true,
      availability: 'available' as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Venues
            </h2>
            <p className="text-xl text-muted-foreground">
              Handpicked premium venues for your special events
            </p>
          </div>
          <div className="hidden md:block">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 hover:bg-accent hover:text-accent-foreground"
            >
              View All
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredVenues.map((venue, index) => (
            <div 
              key={venue.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VenueCard venue={venue} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            View All Venues
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;