import Image from "next/image";
import bgImage from "../../../public/bgImage.webp";
export default function RegisterPage() {
  return (
    <div className="relative w-full h-screen">
      <Image src={bgImage} fill priority alt="bgImage" />
    </div>
  );
}
