import { useState, useEffect, useRef } from "react";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { shopCarouselData, shopItems } from "../utils/shopData";
import TextTruncate from "react-text-truncate";
import ShopCarouselBanner from "../components/Shop/ShopCarouselBanner";
import ShopCarouselNavigation from "../components/Shop/ShopCarouselNavigation";
import ShopSearchElement from "../components/Shop/SearchElement";
import ShopItemFilter from "../components/Shop/ShopItemFilter";
import ShopItemList from "../components/Shop/ShopItemList";

const Shop = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft += 500;
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? shopItems
      : shopItems.filter(
          (item) => item.category.toLowerCase() === selectedCategory
        );

  const itemFilters = ["all", "uniforms", "stationery", "services", "misc."];

  return (
    <>
      <h3 className="text-[2.5rem] mt-4">Shop</h3>
      <div className="bg-[--secondary-bg] rounded-2xl min-h-[90vh] p-4 mt-2">
        <div className="shop-banner">
          <ShopCarouselBanner
            scrollContainerRef={scrollContainerRef}
            shopCarouselData={shopCarouselData}
          />
          {/* <ShopCarouselNavigation
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
          /> */}
        </div>
        <ShopSearchElement />
        <div className="shop-items">
          <ShopItemFilter
            itemFilters={itemFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ShopItemList filteredItems={filteredItems} />
        </div>
      </div>
    </>
  );
};

export default Shop;
