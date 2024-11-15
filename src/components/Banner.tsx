import Container from "@/utils/Container";
import Image from "next/image";
import headerImage from "../../public/home-banner.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-[45vh]">
      <Image
        src={headerImage}
        fill
        priority={true}
        className="object-cover object-center"
        alt="Header image"
      />
      <Container className="absolute py-9 md:py-11 lg:py-20">
        <div className="text-center md:text-left mt-3 md:mt-0">
          <h1 className="font-semibold text-xl lg:text-3xl mb-2 md:mb-3">
            Find a <span className="text-accentColor">host</span> for every journey.
          </h1>
          <p className="text-md font-medium mb-3 md:mb-4 text-black/80">
            Discover the best local rental properties that fits your every
            travel needs.
          </p>
          <Button
            asChild
            className="bg-accentColor hover:bg-accentColor duration-300 text-white py-6 px-8 text-xl rounded-full"
          >
            <Link href="/stays">Get Started</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
