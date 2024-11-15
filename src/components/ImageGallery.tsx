"use client";
import Image, { StaticImageData } from "next/image";
import mainImg from "../../public/image_gallery-1.png";
import homeImg_1 from "../../public/assets/img_1.png";
import homeImg_2 from "../../public/assets/img_2.png";
import homeImg_3 from "../../public/assets/img_3.png";
import homeImg_4 from "../../public/assets/img_4.png";
import homeImg_5 from "../../public/assets/img_5.png";
import { useState } from "react";
export default function ImageGallery() {
  const images: StaticImageData[] = [
    mainImg,
    homeImg_1,
    homeImg_2,
    homeImg_3,
    homeImg_4,
    homeImg_5,
  ];
  const [activeImage, setActiveImage] = useState<StaticImageData>(images[0]);
  return (
    <div className="rounded-md">
      <div>
        <Image
          src={activeImage}
          alt="main image"
          className="rounded-md w-full h-72"
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex items-center mt-5 gap-3 overflow-x-auto md:overflow-x-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`image-${index + 1}`}
            objectFit="cover"
            className={`h-20 cursor-pointer ${
              activeImage === image
                ? "border-2 border-accentColor blur-[1px]"
                : ""
            }`}
            onClick={() => setActiveImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
