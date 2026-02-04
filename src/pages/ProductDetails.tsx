import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/slices/cartSlice';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { toast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const product = useAppSelector((state) =>
    state.products.items.find((p) => p.id === id)
  );
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorite = product ? favorites.includes(product.id) : false;
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <button onClick={() => navigate('/shop')} className="btn-accent">
            Back to Shop
          </button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        description: 'Choose your preferred size before adding to cart.',
        variant: 'destructive',
      });
      return;
    }

    dispatch(
      addToCart({
        id: `${product.id}-${selectedSize}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      })
    );

    toast({
      title: 'Added to cart!',
      description: `${product.name} (Size ${selectedSize}) has been added to your cart.`,
    });
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites!',
      description: isFavorite
        ? `${product.name} has been removed from your favorites.`
        : `${product.name} has been added to your favorites.`,
    });
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-up">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 badge-new">New</span>
              )}
              {product.isSale && (
                <span className="absolute top-4 left-4 badge-sale">Sale</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-up delay-100">
            <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3 font-sans">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-sm text-success mt-2 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Size {selectedSize} selected
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button onClick={handleAddToCart} className="btn-accent flex-1 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`p-4 rounded-full transition-all duration-200 ${
                  isFavorite
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
