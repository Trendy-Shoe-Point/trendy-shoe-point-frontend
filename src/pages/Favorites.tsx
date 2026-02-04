import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { useAppSelector } from '@/store/hooks';

const Favorites = () => {
  const favoriteIds = useAppSelector((state) => state.favorites.items);
  const allProducts = useAppSelector((state) => state.products.items);
  const favoriteProducts = allProducts.filter((p) => favoriteIds.includes(p.id));

  if (favoriteProducts.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center animate-fade-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              No Favorites Yet
            </h1>
            <p className="text-muted-foreground mb-8">
              Start exploring our collection and save your favorite shoes for later!
            </p>
            <Link to="/shop" className="btn-accent inline-flex items-center gap-2">
              Browse Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="mb-8 animate-fade-up">
          <h1 className="section-title mb-2">Your Favorites</h1>
          <p className="text-muted-foreground">
            {favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteProducts.map((product, index) => (
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
    </Layout>
  );
};

export default Favorites;
