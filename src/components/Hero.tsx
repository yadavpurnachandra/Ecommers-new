import { ArrowRight, ShoppingBag, Star, Users } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Discover
              <span className="block text-secondary-dark">Premium</span>
              <span className="block">Products</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg">
              Shop our curated collection of high-quality products with fast shipping 
              and exceptional customer service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/cart">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-secondary-dark mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-white/70 text-sm">Happy Customers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-secondary-dark mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-white/70 text-sm">Average Rating</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <ShoppingBag className="h-8 w-8 text-secondary-dark mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Products</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <ArrowRight className="h-8 w-8 text-secondary-dark mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Fast</div>
                <div className="text-white/70 text-sm">Free Shipping</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-secondary-dark/20 rounded-full blur-sm animate-pulse delay-700"></div>
    </div>
  );
};

export default Hero;