import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../../public/404.svg";
export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <Image src={notFoundImage} priority width="350" alt="notFoundImage" />
        <Button
          asChild
          variant="outline"
          className="mx-auto w-fit bg-transparent text-accentColor hover:text-accentColor hover:bg-transparent font-medium rounded-md py-4 px-5 border-[1px] border-accentColor"
        >
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}
