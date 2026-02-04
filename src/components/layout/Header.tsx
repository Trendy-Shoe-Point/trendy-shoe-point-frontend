import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useAppSelector((state) => state.cart.totalItems);
  const favoritesCount = useAppSelector((state) => state.favorites.items.length);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="glass sticky top-0 z-50 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
              Trendy Shoe Point
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/favorites"
              className="relative p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
