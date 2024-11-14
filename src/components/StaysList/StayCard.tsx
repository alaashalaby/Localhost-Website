import Image from "next/image";
import stayImg from "../../../public/assets/img_3.png";
import trendIcon from "../../../public/trend_icon.svg";
import starIcon from "../../../public/star_icon.svg";
const StayCard = ({ item }: { item: Place }) => {
  return (
    <div className="bg-white rounded-lg shadow-md relative">
      <div>
        <Image
          src={stayImg}
          className="w-full rounded-t-lg"
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <div>
            <h2 className="text-primaryColor font-bold">{item.name}</h2>
            <p className="text-secondaryColor">
              {item.city}, {item.country}, {item.state}
            </p>
          </div>
          <div className="flex items-center gap-2 leading-[0px]">
            <span className="text-primaryColor font-semibold">{item.rate}</span>
            <Image src={starIcon} width={14} height={14} alt="rate icon" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-primaryColor font-bold">
            ${item.price}{" "}
            <span className="text-secondaryColor font-light">/night</span>
          </h3>
          <div className="flex items-center gap-1">
            <Image src={trendIcon} width={20} height={20} alt="trend icon" />
            <span className="text-accentColor">Price chart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
