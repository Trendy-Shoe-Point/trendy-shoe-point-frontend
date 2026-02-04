import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCategory, setPriceRange, resetFilters } from '@/store/slices/productsSlice';
import { Slider } from '@/components/ui/slider';

const ProductFilters = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory, priceRange } = useAppSelector((state) => state.products);

  const categories: { value: 'all' | 'men' | 'women' | 'kids'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'kids', label: 'Kids' },
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Category Filter */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide font-sans">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => dispatch(setCategory(cat.value))}
                className={
                  selectedCategory === cat.value ? 'filter-btn-active' : 'filter-btn'
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide font-sans">
            Price Range
          </h3>
          <div className="px-2">
            <Slider
              value={[priceRange[1]]}
              onValueChange={(value) => dispatch(setPriceRange([0, value[0]]))}
              max={300}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>$0</span>
              <span className="font-medium text-foreground">${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div>
          <button
            onClick={() => dispatch(resetFilters())}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
