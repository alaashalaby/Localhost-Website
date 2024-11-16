import { HomeIcon, Search, UserIcon } from "lucide-react";
import CustomizeCalender from "./CustomizeCalender";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type Props = { label: string; icon: React.ReactNode; className?: string };
export default function FilterComponent() {
  return (
    <div className="bg-white shadow-sm border-[1px] border-[#E8ECF2] rounded-md p-4 lg:p-2 flex flex-col flex-wrap lg:flex-row gap-3 lg:w-fit">
      <FilterItemBox
        label="Accommodation"
        icon={<HomeIcon />}
        className="w-auto lg:w-[485px]"
      />
      <CustomizeCalender label="Check-in" />
      <CustomizeCalender label="Check-out" />
      <FilterItemBox
        label="Guest"
        icon={<UserIcon />}
        className="w-auto lg:w-[220px]"
      />
      <Button className="bg-accentColor border-[1px] border-accentColor p-6  hover:bg-transparent hover:text-accentColor transition-all duration-500 ease-in-out">
        <Search /> Search
      </Button>
    </div>
  );
}
function FilterItemBox({ label, icon, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-md py-3 px-6 flex justify-between items-center gap-3 border-[1px] border-[#D9D9D9] text-sm font-normal [&_svg]:size-4",
        className
      )}
    >
      <span className="text-primaryColor">{label}</span>
      {icon}
    </div>
  );
}
