import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Calendar, Shield, Award, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Pan India Coverage",
      description: "Access to venues across all major cities and towns in India"
    },
    {
      icon: Shield,
      title: "Verified Venues",
      description: "All venues are thoroughly verified for quality and authenticity"
    },
    {
      icon: Calendar,
      title: "Real-time Booking",
      description: "Instant booking confirmation with live availability updates"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer support to help you plan your perfect event"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Venues Listed" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "25+", label: "Cities Covered" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About MandapamBook</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Trusted Partner for
            <span className="text-primary"> Perfect Venues</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make venue booking simple, transparent, and reliable. 
            From intimate gatherings to grand celebrations, we help you find the perfect space for every occasion.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MandapamBook?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <Card className="bg-gradient-card border-border/50 mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 2020, MandapamBook was born from a simple idea: every celebration deserves the perfect venue. 
                  Our founders experienced firsthand the challenges of finding reliable, affordable venues for their own events.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a solution for friends and family has grown into India's most trusted venue booking platform, 
                  serving thousands of customers across the country.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to connect venue owners with customers, creating memorable experiences and building lasting relationships.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-primary p-8 flex items-center justify-center">
                  <Award className="w-24 h-24 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize venue booking by making it accessible, transparent, and hassle-free for everyone. 
                We believe that finding the perfect venue should be the exciting part of event planning, not the stressful part.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to platform for venue booking across India, empowering venue owners and creating 
                unforgettable experiences for customers. We envision a world where every celebration finds its perfect space.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;