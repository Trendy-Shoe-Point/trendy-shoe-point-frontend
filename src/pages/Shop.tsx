import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import ProductFilters from '@/components/product/ProductFilters';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCategory } from '@/store/slices/productsSlice';

const Shop = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { filteredItems } = useAppSelector((state) => state.products);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && ['men', 'women', 'kids'].includes(categoryParam)) {
      dispatch(setCategory(categoryParam as 'men' | 'women' | 'kids'));
    }
  }, [searchParams, dispatch]);

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="section-title mb-4">Shop All</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our complete collection of trendy footwear for men, women, and kids.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 animate-fade-up delay-100">
          <ProductFilters />
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          Showing <span className="font-medium text-foreground">{filteredItems.length}</span> products
        </p>

        {/* Product Grid */}
        <ProductGrid products={filteredItems} />
      </div>
    </Layout>
  );
};

export default Shop;
