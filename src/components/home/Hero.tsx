import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(15 85% 60% / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(30 20% 90%) 0%, transparent 40%)`,
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              New Collection 2024
            </p>
            <h1 className="section-title text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Step Into
              <span className="block text-accent">Style</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Discover our curated collection of trendy footwear. From casual sneakers to elegant heels, 
              find the perfect pair that speaks to your style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-accent inline-flex items-center gap-2 group">
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline-dark inline-flex items-center gap-2">
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-up delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary rounded-3xl transform rotate-6" />
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                alt="Featured Shoe"
                className="relative rounded-3xl object-cover w-full h-full shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-card-hover animate-fade-in delay-400">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-2xl font-bold text-foreground">$49.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
