import workspaceIcon from "../../public/workspace_icon.svg";
import cancelIcon from "../../public/cancel_icon.svg";
import checkInIcon from "../../public/chekin_icon.svg";
import Image from "next/image";
type Props = {
  src: string;
  title: string;
  description: string;
};
export default function StayInfo() {
  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-5 border-b-[1px] border-b-[#E8ECF2]">
      <div className="text-primaryColor [&_p]:font-normal [&_p]:mb-2 ">
        <h3 className=" font-bold mb-3 text-xl">About this home</h3>
        <p>
          Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
          heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
          tranquility of nature's embrace, is designed to provide the ultimate
          relaxing getaway.
        </p>
        <p>
          <span className="text-primaryColor font-bold">Living Space:</span>
          This charming cabin boasts a spacious living area adorned with rustic
          decor and modern amenities. Enjoy the warmth of the wood-burning
          fireplace, relax on the plush sofas, and make yourself at home with
          our entertainment center featuring a flat-screen TV, WiFi, and more.
        </p>
        <p>
          <span className="text-primaryColor font-bold">Bedrooms:</span>
          With 3 beautifully appointed bedrooms, our cabin comfortably
          accommodates up to 5 of guests. Each room is furnished with luxurious
          bedding and unique woodland-inspired touches to ensure a restful
          slumber.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <CardInfo
          src={workspaceIcon}
          title="Dedicated workspace"
          description="A private room equipped with WiFi"
        />
        <CardInfo
          src={cancelIcon}
          title="Self check-in"
          description="Check in with just your phone"
        />
        <CardInfo
          src={checkInIcon}
          title="Free cancellation"
          description="Cancel anytime"
        />
      </div>
    </div>
  );
}

function CardInfo({ src, title, description }: Props) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-4 rounded-md bg-[#DDF4F0]">
        <Image src={src} alt="workspace icon" width={20} />
      </div>
      <div>
        <h3 className="text-primaryColor font-bold">{title}</h3>
        <p className="text-secondaryColor">{description}</p>
      </div>
    </div>
  );
}
