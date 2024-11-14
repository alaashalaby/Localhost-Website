import { getStays } from "@/api/getStays";
import StayCard from "./StayCard";

const StaysList = async () => {
  const data = await getStays();
  const staysData = data?.slice(0, 16);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
      {staysData?.map((item) => (
        <StayCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StaysList;
