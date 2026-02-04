import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Men's",
    slug: 'men',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    count: '24 styles',
  },
  {
    name: "Women's",
    slug: 'women',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    count: '32 styles',
  },
  {
    name: "Kids'",
    slug: 'kids',
    image: 'https://images.unsplash.com/photo-1555274175-75f79b09d5b8?w=600&q=80',
    count: '18 styles',
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find the perfect fit for everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <p className="text-sm opacity-80 mb-1">{category.count}</p>
                <h3 className="text-2xl font-display font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
