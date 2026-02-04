import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Trendy Shoe Point</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Step into style with our curated collection of trendy footwear for the whole family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=men" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=women" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=kids" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Kids' Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2024 Trendy Shoe Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
