import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Building, 
  TreePine, 
  Sparkles,
  Users,
  Coffee,
  Briefcase,
  Music,
  ArrowRight
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'wedding',
      name: 'Wedding Halls',
      icon: Heart,
      description: 'Beautiful venues for your special day',
      count: '500+',
      color: 'bg-pink-500/10 text-pink-600 border-pink-200',
      hoverColor: 'hover:bg-pink-500/20'
    },
    {
      id: 'banquet',
      name: 'Banquet Halls',
      icon: Building,
      description: 'Elegant halls for celebrations',
      count: '300+',
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
      hoverColor: 'hover:bg-blue-500/20'
    },
    {
      id: 'garden',
      name: 'Garden Venues',
      icon: TreePine,
      description: 'Outdoor spaces with natural beauty',
      count: '150+',
      color: 'bg-green-500/10 text-green-600 border-green-200',
      hoverColor: 'hover:bg-green-500/20'
    },
    {
      id: 'luxury',
      name: 'Luxury Venues',
      icon: Sparkles,
      description: 'Premium venues for grand events',
      count: '100+',
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
      hoverColor: 'hover:bg-purple-500/20'
    },
    {
      id: 'party',
      name: 'Party Halls',
      icon: Users,
      description: 'Perfect for parties and gatherings',
      count: '250+',
      color: 'bg-orange-500/10 text-orange-600 border-orange-200',
      hoverColor: 'hover:bg-orange-500/20'
    },
    {
      id: 'conference',
      name: 'Conference Halls',
      icon: Briefcase,
      description: 'Professional venues for meetings',
      count: '80+',
      color: 'bg-gray-500/10 text-gray-600 border-gray-200',
      hoverColor: 'hover:bg-gray-500/20'
    },
    {
      id: 'restaurant',
      name: 'Restaurant Venues',
      icon: Coffee,
      description: 'Intimate dining spaces',
      count: '200+',
      color: 'bg-amber-500/10 text-amber-600 border-amber-200',
      hoverColor: 'hover:bg-amber-500/20'
    },
    {
      id: 'concert',
      name: 'Concert Halls',
      icon: Music,
      description: 'Venues for music and performances',
      count: '50+',
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
      hoverColor: 'hover:bg-indigo-500/20'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect venue for every occasion. From weddings to conferences, 
            we have venues for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${category.color} ${category.hoverColor} group-hover:shadow-elegant group-hover:scale-105`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color.replace('/10', '/20')}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{category.count}</div>
                    <div className="text-xs text-muted-foreground">venues</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;