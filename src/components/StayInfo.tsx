"use client";
import workspaceIcon from "../../public/workspace_icon.svg";
import cancelIcon from "../../public/cancel_icon.svg";
import checkInIcon from "../../public/chekin_icon.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
type Props = {
  src: string;
  title: string;
  description: string;
};
export default function StayInfo() {
  const [isExpended, setIsExpended] = useState(false);
  const toggleExpand = () => {
    setIsExpended(!isExpended);
  };
  return (
    <div className="py-8 flex flex-col md:flex-row gap-6 border-b-[1px] border-b-[#E8ECF2]">
      <div className="text-primaryColor [&_p]:font-normal [&_p]:mb-2 w-full md:w-1/2 lg:w-2/3">
        <h3 className=" font-bold mb-3 text-xl">About this home</h3>
        <div>
          <p>
            Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
            heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
            tranquility of nature's embrace, is designed to provide the ultimate
            relaxing getaway.
          </p>
          <p>
            <span className="text-primaryColor font-bold">Living Space:</span>
            This charming cabin boasts a spacious living area adorned with
            rustic decor and modern amenities. Enjoy the warmth of the
            wood-burning fireplace, relax on the plush sofas, and make yourself
            at home with our entertainment center featuring a flat-screen TV,
            WiFi, and more.
          </p>
          <p
            className={`overflow-hidden text-ellipsis ${
              isExpended ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            <span className="text-primaryColor font-bold">Bedrooms:</span>
            With 3 beautifully appointed bedrooms, our cabin comfortably
            accommodates up to 5 of guests. Each room is furnished with
            luxurious bedding and unique woodland-inspired touches to ensure a
            restful slumber Kitchen & Dining: Our fully-equipped kitchen offers
            everything you need to prepare delicious home-cooked meals. The open
            dining area provides a welcoming space to enjoy meals with friends
            and family.Bathrooms:2 modern bathrooms stocked with fresh towels,
            toiletries, and all essential amenities add to your convenience.
            Outdoor Space: Step outside to a serene outdoor setting. Whether
            it's a morning coffee on the porch, a BBQ in the yard, or a soothing
            evening by the fire pit, the beauty of Bridlepath is at your
            doorstep. Location: Located just minutes from local attractions,
            trails, dining, shopping, our cabin offers the perfect base to
            explore the best of the region or simply unwind in seclusion. Hosted
            with Love: We take pride in hosting our guests and are committed to
            making your stay unforgettable. We're just a call or message away
            should you need anything during your stay. Come, be our guest at
            Cabin Name, and experience a piece of woodland serenity right here
            in Bridlepath, Ontario. Book now and make yourself at home!
          </p>
          <Button
            onClick={toggleExpand}
            variant="ghost"
            className="p-0 font-semibold text-accentColor bg-transparent hoverEffect hover:bg-transparent hover:text-accentColor"
          >
            {isExpended ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
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
