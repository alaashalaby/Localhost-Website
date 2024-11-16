import Container from "@/utils/Container";
import headerImage from "../../public/home-banner.png";
import FilterComponent from "./FilterComponent";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${headerImage.src})` }}
      className="bg-cover bg-center h-auto lg:h-[39vh]"
    >
      <Container className="flex flex-col gap-6 py-7">
        <div className="mt-2">
          <h1 className="font-bold text-xl lg:text-3xl mb-2 md:mb-3">
            Find a <span className="text-accentColor">host</span> for every journey.
          </h1>
          <p className="text-md font-medium text-black/80">
            Discover the best local rental properties that fits your every
            travel needs.
          </p>
        </div>
        <FilterComponent/>
      </Container>
    </div>
  );
}

export default Banner;
