import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { removeFromCart, incrementQuantity, decrementQuantity, CartItem as CartItemType } from '@/store/slices/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 bg-card rounded-2xl p-4 shadow-card animate-fade-in">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-xl bg-secondary"
      />
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground font-sans">{item.name}</h3>
          <p className="text-sm text-muted-foreground">Size: {item.size}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decrementQuantity(item.id))}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(item.id))}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <span className="font-bold text-foreground">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;
