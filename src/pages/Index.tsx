import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import { Link } from 'react-router-dom';
import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
  { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
  { icon: RefreshCw, title: 'Easy Returns', description: '30-day return policy' },
  { icon: Headphones, title: '24/7 Support', description: 'Dedicated support team' },
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 font-sans">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Step Up Your Style?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who found their perfect pair at Trendy Shoe Point.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium hover:brightness-110 transition-all"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
