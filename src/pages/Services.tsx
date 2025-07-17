import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  ChefHat, 
  Palette, 
  Music, 
  Car, 
  Flower, 
  Shirt, 
  Gift,
  Phone,
  Star,
  MapPin,
  Award
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photographers and videographers to capture your special moments",
      providers: [
        { name: "Creative Lens Studio", rating: 4.9, price: "₹25,000", contact: "+91 9876543210", location: "T. Nagar, Chennai" },
        { name: "Pixel Perfect Photography", rating: 4.8, price: "₹35,000", contact: "+91 9876543211", location: "Anna Nagar, Chennai" },
        { name: "Wedding Frames", rating: 4.7, price: "₹20,000", contact: "+91 9876543212", location: "Velachery, Chennai" }
      ]
    },
    {
      icon: ChefHat,
      title: "Catering Services",
      description: "Delicious food and professional catering for all types of events",
      providers: [
        { name: "Royal Feast Caterers", rating: 4.8, price: "₹450/plate", contact: "+91 9876543213", location: "Mylapore, Chennai" },
        { name: "Saravana Catering", rating: 4.9, price: "₹350/plate", contact: "+91 9876543214", location: "Adyar, Chennai" },
        { name: "Grand Banquet Catering", rating: 4.6, price: "₹500/plate", contact: "+91 9876543215", location: "Nungambakkam, Chennai" }
      ]
    },
    {
      icon: Palette,
      title: "Decoration & Design",
      description: "Beautiful decorations and event design to make your venue stunning",
      providers: [
        { name: "Dream Decorators", rating: 4.7, price: "₹15,000", contact: "+91 9876543216", location: "Porur, Chennai" },
        { name: "Elite Event Decorators", rating: 4.8, price: "₹25,000", contact: "+91 9876543217", location: "Tambaram, Chennai" },
        { name: "Floral Fantasy", rating: 4.6, price: "₹18,000", contact: "+91 9876543218", location: "Chrompet, Chennai" }
      ]
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "DJs, live bands, and entertainment services for your celebrations",
      providers: [
        { name: "Rhythm Entertainment", rating: 4.8, price: "₹12,000", contact: "+91 9876543219", location: "Guindy, Chennai" },
        { name: "Beat Box Events", rating: 4.7, price: "₹15,000", contact: "+91 9876543220", location: "Sholinganallur, Chennai" },
        { name: "Melody Makers", rating: 4.9, price: "₹20,000", contact: "+91 9876543221", location: "OMR, Chennai" }
      ]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Comfortable and reliable transportation for guests and families",
      providers: [
        { name: "Royal Travels", rating: 4.6, price: "₹8,000/day", contact: "+91 9876543222", location: "Koyambedu, Chennai" },
        { name: "Comfort Cabs", rating: 4.7, price: "₹6,000/day", contact: "+91 9876543223", location: "Egmore, Chennai" },
        { name: "Wedding Wheels", rating: 4.8, price: "₹10,000/day", contact: "+91 9876543224", location: "Perambur, Chennai" }
      ]
    },
    {
      icon: Flower,
      title: "Floral Services",
      description: "Fresh flowers and beautiful arrangements for all occasions",
      providers: [
        { name: "Rose Garden Florist", rating: 4.9, price: "₹5,000", contact: "+91 9876543225", location: "Kodambakkam, Chennai" },
        { name: "Bloom & Blossom", rating: 4.7, price: "₹7,000", contact: "+91 9876543226", location: "Saidapet, Chennai" },
        { name: "Petal Perfect", rating: 4.8, price: "₹6,000", contact: "+91 9876543227", location: "Besant Nagar, Chennai" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Complete Event Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Trusted Service
            <span className="text-primary"> Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Make your event perfect with our carefully selected service providers. 
            From photography to catering, we've got everything covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {service.providers.map((provider, providerIndex) => (
                  <Card key={providerIndex} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{provider.rating}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{provider.price}</div>
                          <div className="text-sm text-muted-foreground">Starting from</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {provider.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        {provider.contact}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          Contact Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 p-8">
            <div className="max-w-2xl mx-auto">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Want to Join Our Network?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Are you a service provider? Join thousands of trusted partners and grow your business with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow">
                  Become a Partner
                </Button>
                <Button variant="outline" size="lg" className="border-2 hover:bg-accent hover:text-accent-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;