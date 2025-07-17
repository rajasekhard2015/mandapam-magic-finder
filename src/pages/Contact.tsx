import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91 9876543210",
      description: "Mon-Sun, 9 AM - 9 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@mandapambook.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: "Chennai, Tamil Nadu",
      description: "India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "9:00 AM - 9:00 PM",
      description: "All days of the week"
    }
  ];

  const supportTypes = [
    {
      icon: Users,
      title: "Customer Support",
      description: "Help with bookings, payments, and general queries"
    },
    {
      icon: Zap,
      title: "Venue Owner Support",
      description: "Assistance with listing, profile management, and earnings"
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "App issues, login problems, and technical difficulties"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            We're Here to
            <span className="text-primary"> Help You</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about booking a venue or listing your property? 
            Our dedicated support team is ready to assist you 24/7.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Please provide details about your query..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary shadow-elegant hover:shadow-glow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
          <Button variant="outline" size="lg" className="border-2 hover:bg-accent hover:text-accent-foreground">
            View FAQ
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;