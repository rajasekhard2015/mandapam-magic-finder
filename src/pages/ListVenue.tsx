import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, MapPin, Star, Phone, Mail, Camera, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ListVenue = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    venueName: '',
    description: '',
    address: '',
    city: '',
    pincode: '',
    capacity: '',
    basePrice: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    amenities: [] as string[],
    venueType: '',
    images: [] as File[]
  });

  const amenityOptions = [
    'AC', 'Parking', 'WiFi', 'Catering Kitchen', 'Sound System', 'Projector',
    'Green Room', 'Stage', 'Generator', 'Washrooms', 'Decorations', 'Security'
  ];

  const venueTypes = [
    'Marriage Hall', 'Banquet Hall', 'Community Hall', 'Resort', 'Hotel',
    'Outdoor Venue', 'Religious Venue', 'Convention Center'
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, amenity]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        amenities: prev.amenities.filter(a => a !== amenity)
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 10) // Max 10 images
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Venue Listed Successfully!",
      description: "Your venue has been submitted for verification. We'll contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">List Your Venue</h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of venue owners and start earning today
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Venue Information
              </CardTitle>
              <CardDescription>
                Provide detailed information about your venue to attract more bookings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="venueName">Venue Name *</Label>
                    <Input
                      id="venueName"
                      value={formData.venueName}
                      onChange={(e) => setFormData(prev => ({ ...prev, venueName: e.target.value }))}
                      placeholder="Enter venue name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venueType">Venue Type *</Label>
                    <Select 
                      value={formData.venueType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, venueType: value }))}
                    >
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your venue, its features, and what makes it special..."
                    rows={4}
                    required
                  />
                </div>

                {/* Location Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location Details
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Enter complete address with landmarks"
                      rows={2}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
                        placeholder="Enter pincode"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Capacity and Pricing */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Seating Capacity *</Label>
                    <Input
                      id="capacity"
                      value={formData.capacity}
                      onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                      placeholder="e.g., 200-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="basePrice">Base Price (₹) *</Label>
                    <Input
                      id="basePrice"
                      type="number"
                      value={formData.basePrice}
                      onChange={(e) => setFormData(prev => ({ ...prev, basePrice: e.target.value }))}
                      placeholder="Enter base price"
                      required
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <Label>Available Amenities</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {amenityOptions.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-4">
                  <Label className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Venue Images (Max 10)
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Click to upload images</p>
                    </label>
                  </div>
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Venue ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        placeholder="Enter contact person name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary shadow-elegant hover:shadow-glow">
                  Submit Venue for Verification
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListVenue;