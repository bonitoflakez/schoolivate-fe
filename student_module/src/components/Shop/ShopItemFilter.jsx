import PropTypes from "prop-types";

const ShopItemFilter = ({
  itemFilters,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="filter-pills flex items-center justify-start gap-x-4">
      {itemFilters.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`${
            selectedCategory === category
              ? "bg-black text-white opacity-100"
              : "opacity-60"
          } border-2 border-black font-medium text-xl px-3 py-1 rounded-3xl`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

ShopItemFilter.propTypes = {
  itemFilters: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default ShopItemFilter;
