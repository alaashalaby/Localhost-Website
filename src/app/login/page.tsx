import bgImage from "../../../public/bgImage.webp";
import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
};
export default function LoginPage() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center px-3 md:px-0"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <LoginForm />
    </div>
  );
}
