import ImageGallery from "@/components/ImageGallery";
import LocationStaySection from "@/components/LocationStaySection";
import Reviews from "@/components/Reviews";
import StayDetails from "@/components/StayDetails";
import StayInfo from "@/components/StayInfo";
import Container from "@/utils/Container";
type Props = {
  params: {
    id: number;
  };
}
export default async function StayPageDetails({ params }:Props) {
  const stayId = params.id;
  return (
    <Container className="py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <ImageGallery/>
        <StayDetails stayId={stayId} />
      </div>
      <StayInfo />
      <LocationStaySection />
      <Reviews/>
    </Container>
  );
}
