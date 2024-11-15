import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import starIcon from "../../public/star_icon.svg";
import trendIcon from "../../public/trend_icon.svg";
import personImg from "../../public/person_img-1.png";
import { getSingleStay } from "@/api/getStays";

export default async function StayDetails({ stayId }: { stayId: number }) {
  const stayData = await getSingleStay(stayId);
  return (
    <div className="bg-white rounded-sm border-[1px] border-[#E8ECF2] p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primaryColor font-bold">{stayData.name}</h3>
          <p className="text-secondaryColor mb-2">
            {stayData.city}, {stayData.country}, {stayData.state}
          </p>
          <div className="flex items-center gap-1 leading-[0px]">
            <span className="text-primaryColor font-semibold">
              {stayData.rate}
            </span>
            <Image src={starIcon} width={10} height={10} alt="rate icon" />
            <span className="text-accentColor ms-1">200 Reviews</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="rounded-full leading-[0px] h-0 w-0 p-4"
        >
          <Heart />
        </Button>
      </div>
      <div className="py-4">
        <p className="font-medium text-primaryColor">
          Welcome to our cozy cabin retreat nestled in the heart of Bridlepath,
          Ontario! Surrounded by lush landscapes and tranquil trails, this
          charming getaway offers the perfect blend of rustic elegance and
          modern comfort.
        </p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-primaryColor font-bold text-xl md:text-3xl">
          ${stayData.price}
          <span className="text-secondaryColor font-light text-xl">/night</span>
        </h3>
        <div className="flex items-center gap-1">
          <Image src={trendIcon} width={20} height={20} alt="trend icon" />
          <span className="text-accentColor">Best time to Book</span>
        </div>
      </div>
      <Button className="rounded-md text-white bg-accentColor w-full my-3 py-3 hover:bg-accentColor">
        Book this home
      </Button>
      <div className="mt-1">
        <p className="text-secondaryColor mb-1">Hosted by: </p>
        <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t-[1px] border-t-[#E8ECF2]">
          <div className="flex gap-2">
            <Image
              src={personImg}
              width={39}
              height={39}
              className="rounded-full object-contain"
              alt="person image"
            />
            <div>
              <h5 className="font-semibold text-primaryColor">Michelle Ward</h5>
              <p className="text-secondaryColor">Joined in May 2021</p>
            </div>
          </div>
          <div>
            <span className="bg-[#DEFFF9] py-2 px-4 rounded-full text-accentColor">
              Superhost
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
