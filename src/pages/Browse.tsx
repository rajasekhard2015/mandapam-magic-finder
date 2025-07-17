import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Filter,
  SlidersHorizontal,
  Grid3X3,
  List
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import VenueCard from '@/components/VenueCard';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';
import venue4 from '@/assets/venue-4.jpg';

const Browse = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    capacity: '',
    priceRange: '',
    amenities: [] as string[],
    venueType: '',
    availability: ''
  });

  const venues = [
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
    },
    // Duplicate venues for demo
    ...Array(8).fill(null).map((_, index) => ({
      id: `${5 + index}`,
      name: `Premium Venue ${index + 1}`,
      image: [venue1, venue2, venue3, venue4][index % 4],
      location: ['T. Nagar', 'Mylapore', 'Anna Nagar', 'ECR'][index % 4] + ', Chennai',
      capacity: ['200-400', '300-500', '400-600', '500-800'][index % 4],
      price: ['45,000', '55,000', '65,000', '75,000'][index % 4],
      rating: 4.5 + (Math.random() * 0.4),
      reviews: 100 + Math.floor(Math.random() * 200),
      amenities: ['AC', 'Parking', 'WiFi', 'Catering'].slice(0, 2 + index % 3),
      verified: true,
      availability: (['available', 'limited'] as const)[index % 2]
    }))
  ];

  const amenityOptions = ['AC', 'Parking', 'WiFi', 'Catering', 'Garden', 'Stage', 'Generator', 'Photography'];
  const venueTypes = ['Marriage Hall', 'Banquet Hall', 'Community Hall', 'Resort', 'Outdoor Venue'];
  const cities = ['Chennai', 'Bangalore', 'Coimbatore', 'Madurai', 'Trichy'];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFilters(prev => ({
        ...prev,
        amenities: [...prev.amenities, amenity]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        amenities: prev.amenities.filter(a => a !== amenity)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <Card className="bg-gradient-card border-border/50 p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search venues..."
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Select value={filters.city} onValueChange={(value) => setFilters(prev => ({ ...prev, city: value }))}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="date"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Select value={filters.capacity} onValueChange={(value) => setFilters(prev => ({ ...prev, capacity: value }))}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100-200">100-200 guests</SelectItem>
                    <SelectItem value="200-400">200-400 guests</SelectItem>
                    <SelectItem value="400-600">400-600 guests</SelectItem>
                    <SelectItem value="600+">600+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters || window.innerWidth >= 768 ? 'block' : 'hidden'} w-80 space-y-6`}>
            <Card className="bg-gradient-card border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="md:hidden">
                  ×
                </Button>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                  <Select value={filters.priceRange} onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-25000">₹0 - ₹25,000</SelectItem>
                      <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50000-75000">₹50,000 - ₹75,000</SelectItem>
                      <SelectItem value="75000+">₹75,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Venue Type */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Venue Type</Label>
                  <Select value={filters.venueType} onValueChange={(value) => setFilters(prev => ({ ...prev, venueType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent>
                      {venueTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Amenities */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Amenities</Label>
                  <div className="space-y-2">
                    {amenityOptions.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={filters.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Availability</Label>
                  <Select value={filters.availability} onValueChange={(value) => setFilters(prev => ({ ...prev, availability: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="limited">Limited</SelectItem>
                      <SelectItem value="booked">Fully Booked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Clear All Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Browse Venues</h2>
                <p className="text-muted-foreground">{venues.length} venues found</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Venues Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {venues.map((venue, index) => (
                <div 
                  key={venue.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <VenueCard venue={venue} layout={viewMode} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Browse;