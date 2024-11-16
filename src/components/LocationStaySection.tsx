import Image from "next/image";
import icon from "../../public/layout_menu-2.svg";
import { Wifi } from "lucide-react";
export default function LocationStaySection() {
  return (
    <div className="py-8 flex flex-col lg:flex-row justify-between gap-6">
      <div className="w-full md:w-1/2 lg:w-2/3">
        <h3 className="font-bold mb-3 text-xl">Amenities</h3>
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <LocationListItem key={index} />
          ))}
        </div>
      </div>
      <IframeCard />
    </div>
  );
}
function LocationListItem() {
  return (
    <ul className="flex flex-col gap-3 [&_li]:flex [&_li]:items-start [&_li]:gap-2">
      <li>
        <Image src={icon} alt="icon" width={20} />
        <span>Lakeside</span>
      </li>
      <li>
        <Image src={icon} alt="icon" width={20} />
        <span>Kitchen</span>
      </li>
      <li>
        <Image src={icon} alt="icon" width={20} />
        <span>Security cameras on property</span>
      </li>
      <li>
        <Wifi className="text-accentColor" size={22} />
        <span>Wifi</span>
      </li>
    </ul>
  );
}

function IframeCard() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="flex justify-between items-center gap-3 mb-2">
        <div>
          <h3 className="font-semibold text-lg text-primaryColor">
            Where you’ll be
          </h3>
          <p className="font-normal text-secondaryColor">The Bridle Path</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-primaryColor">20°C</h3>
          <p className="font-normal text-secondaryColor">Broken Clouds</p>
        </div>
      </div>
      <Iframe />
    </div>
  );
}
function Iframe() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.48555018795!2d-74.00600000000001!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25081!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1701927721267!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="w-full rounded-sm"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
