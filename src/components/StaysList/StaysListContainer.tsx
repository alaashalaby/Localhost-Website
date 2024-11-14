import Container from "@/utils/Container";
import icon_1 from "../../../public/layout_menu-1.svg";
import icon_2 from "../../../public/layout_menu-2.svg";
import Image from "next/image";
import StaysList from "@/components/StaysList/StaysList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const StaysListContainer = () => {
  return (
    <Container className="py-7">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-xl">
          Stays nearby: <span className="font-semibold">Toronto Ontario</span>
        </h3>
        <div className="flex items-center gap-3 bg-white rounded-md shadow-sm p-3 border-[1px] border-[#E8ECF2]">
          <Image src={icon_1} width={20} height={20} alt="layout icon" />
          <Image src={icon_2} width={20} height={20} alt="layout icon" />
        </div>
      </div>
      <StaysList />
      <div className="flex justify-center items-center mt-8">
        <Button
          asChild
          variant="outline"
          className="bg-transparent text-accentColor hover:text-accentColor hover:bg-transparent font-medium rounded-md py-4 px-5 border-[1px] border-accentColor"
        >
          <Link href="/stays">Show more</Link>
        </Button>
      </div>
    </Container>
  );
};

export default StaysListContainer;
