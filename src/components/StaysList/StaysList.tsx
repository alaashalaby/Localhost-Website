import StayCard from "./StayCard";
import { getPlaces } from "@/api/getPlaces";

const StaysList = async () => {
  const placesData = await getPlaces();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
      {placesData?.map((item) => (
        <StayCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StaysList;
