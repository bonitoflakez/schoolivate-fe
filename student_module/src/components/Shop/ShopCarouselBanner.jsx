import PropTypes from "prop-types";

const ShopCarouselBanner = ({ scrollContainerRef, shopCarouselData }) => {
  return (
    <div
      ref={scrollContainerRef}
      className="top-carousel-container overflow-x-auto hover:overflow-auto"
    >
      <div className="max-w-[40vw] flex items-center gap-x-6">
        {shopCarouselData.map((carouselItem) => (
          <div
            key={carouselItem.id}
            className="bg-[--carousel] w-80 lt:w-[30em] rounded-2xl flex-shrink-0 p-4"
          >
            <div className="carousel-data-container relative">
              <div className="flex">
                <div className="carousel-left">
                  <h3 className="item-title text-3xl font-semibold">
                    {carouselItem.title}
                  </h3>
                  <h3 className="item-description text-base font-light">
                    {carouselItem.description}
                  </h3>
                </div>
                <div className="carousel-right">
                  <div className="relative w-[200px] h-[200px]">
                    <img
                      className="absolute top-0 left-0 w-fit h-full"
                      src="/shop_carousel_1.png"
                      alt="shop-item-1"
                    />
                    <img
                      className="absolute top-0 right-0 w-fit h-full"
                      src="/shop_carousel_2.png"
                      alt="shop-item-2"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-bottom-container flex items-center justify-between absolute bottom-[0.125rem] w-full">
                <h3 className="text-3xl">{carouselItem.price}/- </h3>
                <button className="text-xl bg-black rounded-3xl px-4 py-2 text-white">
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ShopCarouselBanner.propTypes = {
  scrollContainerRef: PropTypes.object.isRequired,
  shopCarouselData: PropTypes.array.isRequired,
};

export default ShopCarouselBanner;
