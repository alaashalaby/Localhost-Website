import RegisterForm from "@/components/forms/RegisterForm";
import bgImage from "../../../public/bgImage.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page",
}
export default function RegisterPage() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center px-3 md:px-0"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <RegisterForm />
    </div>
  );
}
