import ShopItemCard from "./ShopItemCard";

import PropTypes from "prop-types";

const ShopItemList = ({ filteredItems }) => {
  return (
    <div className="shop-list grid grid-cols-3 gap-6 mt-6">
      {filteredItems.map((item) => (
        <ShopItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

ShopItemList.propTypes = {
  filteredItems: PropTypes.array.isRequired,
};

export default ShopItemList;
