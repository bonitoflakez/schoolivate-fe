import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import PropTypes from "prop-types";

const ShopCarouselNavigation = ({ scrollLeft, scrollRight }) => {
  return (
    <div className="scroll-buttons flex items-center justify-between mx-4">
      <button onClick={scrollLeft} className="mr-2">
        <CaretLeft size={32} weight="bold" />
      </button>
      <button onClick={scrollRight}>
        <CaretRight size={32} weight="bold" />
      </button>
    </div>
  );
};

ShopCarouselNavigation.propTypes = {
  scrollLeft: PropTypes.func,
  scrollRight: PropTypes.func,
};

export default ShopCarouselNavigation;
