import React from 'react';
import { 
  Building, 
  Users, 
  Star, 
  MapPin,
  CheckCircle,
  Heart,
  Calendar,
  TrendingUp
} from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: Building,
      value: '2,500+',
      label: 'Verified Venues',
      description: 'Across India',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      icon: Users,
      value: '50K+',
      label: 'Happy Customers',
      description: 'Events booked',
      color: 'text-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 3,
      icon: Star,
      value: '4.8',
      label: 'Average Rating',
      description: 'Customer satisfaction',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10'
    },
    {
      id: 4,
      icon: MapPin,
      value: '100+',
      label: 'Cities Covered',
      description: 'Pan India presence',
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Verified Venues',
      description: 'All venues are thoroughly verified and quality checked'
    },
    {
      icon: Heart,
      title: 'Trusted by Thousands',
      description: 'Join thousands of satisfied customers who trust us'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Simple and secure booking process in just few clicks'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Compare prices and get the best deals guaranteed'
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to book your perfect venue?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their dream venues with us. 
              Start your search today!
            </p>
            <button className="bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Searching Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;