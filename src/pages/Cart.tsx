import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import { useAppSelector } from '@/store/hooks';

const Cart = () => {
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center animate-fade-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet. Start shopping and find your perfect pair!
            </p>
            <Link to="/shop" className="btn-accent inline-flex items-center gap-2">
              Start Shopping
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
        <h1 className="section-title mb-8 animate-fade-up">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CartItem item={item} />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24 animate-fade-up delay-200">
              <h2 className="text-xl font-semibold text-foreground mb-6 font-sans">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Items ({totalItems})</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{totalPrice >= 100 ? 'Free' : '$9.99'}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span>
                      ${(totalPrice + (totalPrice >= 100 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {totalPrice < 100 && (
                <p className="text-sm text-muted-foreground mb-4 bg-secondary p-3 rounded-lg">
                  Add <span className="font-medium text-accent">${(100 - totalPrice).toFixed(2)}</span> more for free shipping!
                </p>
              )}

              <button className="btn-accent w-full">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center text-muted-foreground hover:text-foreground mt-4 text-sm transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
