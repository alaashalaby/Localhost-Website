import RegisterForm from "@/components/forms/RegisterForm";
import bgImage from "../../../public/bgImage.webp";

export default function RegisterPage() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center flex items-center justify-center sm:px-3 md:px-0"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100vh",
      }}
    >
      <RegisterForm />
    </div>
  );
}
