import Container from "@/utils/Container";
import Image from "next/image";
import headerImage from "../../public/home-banner.jpg";
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
        <div>
          <h1 className="font-semibold text-lg md:text-xl lg:text-3xl mb-3">
            Find a <span className="text-accentColor">host</span> for every journey.
          </h1>
          <p className="text-md md:text-xl font-medium mb-5 text-black/80">
            Discover the best local rental properties that fits your every
            travel needs
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
