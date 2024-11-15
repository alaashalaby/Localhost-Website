import Image from "next/image";
import personImg from "../../public/person_img-1.png";
import starIcon from "../../public/star_icon.svg";
export default function Reviews() {
  return (
    <div className="py-8">
      <h3 className="font-bold mb-3 text-xl">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
    </div>
  );
}
function ReviewCard() {
  return (
    <div className="rounded-md p-4 bg-transparent border-[1px] border-[#E8ECF2]">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={personImg}
            width={45}
            height={45}
            className="rounded-full object-contain"
            alt="person image"
          />
          <div>
            <h5 className="font-semibold text-md text-primaryColor">
              Johnny Cash
            </h5>
            <p className="text-secondaryColor text-md">June 2021</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-primaryColor font-bold text-sm">5.0</span>
          <Image src={starIcon} width={12} height={12} alt="rate icon" />
        </div>
      </div>
      <div>
        <p className="text-primaryColor mt-3">
          Michelle’s place was so great and definitely the perfect place for our
          long weekend. The lake is amazing!
        </p>
      </div>
    </div>
  );
}
