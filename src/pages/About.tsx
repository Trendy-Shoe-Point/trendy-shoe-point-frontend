import Layout from '@/components/layout/Layout';
// testing
const About = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title text-5xl md:text-6xl mb-6">Our Story</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            At Trendy Shoe Point, we believe that the right pair of shoes can transform not just your outfit, but your entire day.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-up delay-100">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80"
              alt="Shoe collection"
              className="rounded-3xl w-full aspect-[4/3] object-cover shadow-card-hover"
            />
          </div>
          <div className="animate-fade-up delay-200">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Born from Passion
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, Trendy Shoe Point started as a small boutique with a simple mission: to bring stylish, quality footwear to everyone without breaking the bank.
              </p>
              <p>
                What began as a passion project has grown into a beloved destination for shoe enthusiasts. We carefully curate each collection, selecting only pieces that meet our high standards for style, comfort, and durability.
              </p>
              <p>
                Today, we serve thousands of happy customers worldwide, helping them step into style every single day.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 animate-fade-up">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-sans">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                Every pair is carefully selected for premium materials and craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-sans">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                We partner with eco-conscious brands to reduce our environmental footprint.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-sans">Customer Love</h3>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our priority. We're here to help you find the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
