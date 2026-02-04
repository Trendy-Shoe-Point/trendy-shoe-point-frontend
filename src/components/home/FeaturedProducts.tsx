import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { useAppSelector } from '@/store/hooks';

const FeaturedProducts = () => {
  const products = useAppSelector((state) => state.products.items);
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">Featured Collection</h2>
            <p className="section-subtitle">Handpicked styles just for you</p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
