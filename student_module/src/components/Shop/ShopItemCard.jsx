import TextTruncate from "react-text-truncate";
import PropTypes from "prop-types";

const ShopItemCard = ({ item }) => {
  return (
    <div key={item.id} className="shop-item">
      <div className="rounded-2xl bg-[--accent-extra-light] p-4">
        <div className="w-full h-[200px] bg-[--secondary-bg] rounded-lg flex items-center justify-center relative">
          <img
            className="absolute top-0 w-fit h-full"
            src={item.imgSrc}
            alt="shop-item"
          />
        </div>
        <div className="item-details">
          <h3 className="text-2xl font-medium">{item.title}</h3>
          <div className="text-base w-[15vw] font-light">
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={item.description}
            />
          </div>
        </div>
        <div className="item-card-bottom flex items-center justify-between mt-1">
          <h3 className="text-2xl">{item.price}/- </h3>
          <button className="text-xl bg-black rounded-3xl px-4 py-2 text-white">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

ShopItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopItemCard;
