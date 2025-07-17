import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Users, 
  Star, 
  Car, 
  Wifi, 
  Utensils, 
  Camera,
  Heart,
  Share2,
  Calendar as CalendarIcon,
  Clock,
  IndianRupee,
  Phone,
  Mail,
  CheckCircle,
  X,
  ArrowLeft,
  ArrowRight,
  Play,
  Maximize
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';
import venue4 from '@/assets/venue-4.jpg';

const VenueDetail = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const venue = {
    id: '1',
    name: 'Royal Palace Marriage Hall',
    location: 'T. Nagar, Chennai',
    fullAddress: '123 Usman Road, T. Nagar, Chennai - 600017',
    capacity: '500-800',
    price: '85,000',
    rating: 4.8,
    reviews: 245,
    verified: true,
    images: [venue1, venue2, venue3, venue4],
    description: 'A magnificent marriage hall with traditional architecture and modern amenities. Perfect for weddings, receptions, and grand celebrations.',
    amenities: [
      { name: 'Parking', icon: Car, included: true },
      { name: 'WiFi', icon: Wifi, included: true },
      { name: 'Catering', icon: Utensils, included: true },
      { name: 'Photography', icon: Camera, included: false },
      { name: 'Air Conditioning', icon: CheckCircle, included: true },
      { name: 'Sound System', icon: CheckCircle, included: true },
      { name: 'Decoration', icon: CheckCircle, included: false },
      { name: 'Valet Parking', icon: Car, included: true }
    ],
    timeSlots: [
      { id: 'morning', label: 'Morning (6:00 AM - 12:00 PM)', price: '50,000' },
      { id: 'afternoon', label: 'Afternoon (12:00 PM - 6:00 PM)', price: '65,000' },
      { id: 'evening', label: 'Evening (6:00 PM - 12:00 AM)', price: '85,000' },
      { id: 'fullday', label: 'Full Day (6:00 AM - 12:00 AM)', price: '1,50,000' }
    ],
    packages: [
      {
        id: 'basic',
        name: 'Basic Package',
        price: '85,000',
        features: ['Venue booking', 'Basic decoration', 'Sound system', 'Parking']
      },
      {
        id: 'premium',
        name: 'Premium Package',
        price: '1,25,000',
        features: ['Everything in Basic', 'Professional photography', 'Premium decoration', 'Catering coordination', 'Valet parking']
      },
      {
        id: 'luxury',
        name: 'Luxury Package',
        price: '1,85,000',
        features: ['Everything in Premium', 'Wedding planner', 'Makeup room', 'Bridal car decoration', 'Welcome drinks', 'Live music']
      }
    ],
    contact: {
      name: 'Rajesh Kumar',
      phone: '+91 9876543210',
      email: 'rajesh@royalpalace.com',
      whatsapp: '+91 9876543210'
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length);
  };

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Amazing venue! The staff was very helpful and the decoration was beautiful. Perfect for our wedding reception.',
      event: 'Wedding Reception'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      rating: 4,
      date: '1 month ago',
      comment: 'Great location and facilities. The food was excellent and the service was prompt. Highly recommended!',
      event: 'Engagement'
    },
    {
      id: 3,
      name: 'Lakshmi Krishnan',
      rating: 5,
      date: '2 months ago',
      comment: 'Wonderful experience. The venue manager was very cooperative and made our event memorable.',
      event: 'Anniversary'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={venue.images[currentImageIndex]} 
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Image Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* View All Button */}
                <div className="absolute bottom-4 right-4">
                  <Button variant="secondary" size="sm">
                    <Maximize className="w-4 h-4 mr-2" />
                    View All ({venue.images.length})
                  </Button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {venue.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Venue Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-foreground">{venue.name}</h1>
                  {venue.verified && (
                    <Badge className="bg-success/10 text-success border-success/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-6 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {venue.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {venue.capacity} guests
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-warning fill-current" />
                    {venue.rating} ({venue.reviews} reviews)
                  </div>
                </div>

                <p className="text-muted-foreground text-lg">{venue.description}</p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="amenities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="packages">Packages</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                
                <TabsContent value="amenities" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {venue.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border/50">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          amenity.included ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                        }`}>
                          <amenity.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{amenity.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {amenity.included ? 'Included' : 'Additional'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="packages" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {venue.packages.map((pkg) => (
                      <Card key={pkg.id} className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>{pkg.name}</span>
                            <div className="flex items-center text-primary">
                              <IndianRupee className="w-4 h-4" />
                              <span className="font-bold">{pkg.price}</span>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4">
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-sm text-muted-foreground">{review.event} • {review.date}</p>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Venue Manager</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{venue.contact.name}</p>
                          <p className="text-sm text-muted-foreground">Venue Manager</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button variant="outline" className="flex items-center justify-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Book This Venue</span>
                  <div className="flex items-center text-primary">
                    <IndianRupee className="w-5 h-5" />
                    <span className="text-2xl font-bold">{venue.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">per day</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !selectedDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Time Slot</label>
                  <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {venue.timeSlots.map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{slot.label}</span>
                            <span className="ml-4 text-primary font-medium">₹{slot.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Package</label>
                  <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose package" />
                    </SelectTrigger>
                    <SelectContent>
                      {venue.packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{pkg.name}</span>
                            <span className="ml-4 text-primary font-medium">₹{pkg.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    className="w-full bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300"
                    disabled={!selectedDate || !selectedTimeSlot}
                  >
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Send Enquiry
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">Need help with booking?</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;