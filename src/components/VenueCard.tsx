import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Users, 
  Star, 
  Car, 
  Wifi, 
  Utensils, 
  Camera,
  Heart,
  Eye,
  IndianRupee
} from 'lucide-react';

interface VenueCardProps {
  venue: {
    id: string;
    name: string;
    image: string;
    location: string;
    capacity: string;
    price: string;
    rating: number;
    reviews: number;
    amenities: string[];
    verified: boolean;
    availability: 'available' | 'limited' | 'booked';
  };
  layout?: 'grid' | 'list';
}

const VenueCard: React.FC<VenueCardProps> = ({ venue, layout = 'grid' }) => {
  const amenityIcons = {
    'Parking': Car,
    'WiFi': Wifi,
    'Catering': Utensils,
    'Photography': Camera,
  };

  const availabilityColors = {
    available: 'bg-success text-success-foreground',
    limited: 'bg-warning text-warning-foreground',
    booked: 'bg-destructive text-destructive-foreground'
  };

  const availabilityText = {
    available: 'Available',
    limited: 'Limited Slots',
    booked: 'Fully Booked'
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={venue.image} 
          alt={venue.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-card/80 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-card/80 backdrop-blur-sm">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={availabilityColors[venue.availability]}>
            {availabilityText[venue.availability]}
          </Badge>
        </div>

        {/* Verified Badge */}
        {venue.verified && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              <Star className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
              {venue.name}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {venue.location}
            </div>
          </div>

          {/* Rating & Capacity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-warning fill-current" />
              <span className="text-sm font-medium">{venue.rating}</span>
              <span className="text-sm text-muted-foreground">({venue.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              {venue.capacity} guests
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {venue.amenities.slice(0, 4).map((amenity, index) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
              return (
                <div key={index} className="flex items-center space-x-1 text-xs text-muted-foreground bg-accent/50 px-2 py-1 rounded-md">
                  {Icon && <Icon className="w-3 h-3" />}
                  <span>{amenity}</span>
                </div>
              );
            })}
            {venue.amenities.length > 4 && (
              <div className="text-xs text-muted-foreground bg-accent/50 px-2 py-1 rounded-md">
                +{venue.amenities.length - 4} more
              </div>
            )}
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center">
              <IndianRupee className="w-4 h-4 text-primary" />
              <span className="text-lg font-bold text-primary">{venue.price}</span>
              <span className="text-sm text-muted-foreground ml-1">per day</span>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300"
              disabled={venue.availability === 'booked'}
            >
              {venue.availability === 'booked' ? 'Booked' : 'View Details'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;