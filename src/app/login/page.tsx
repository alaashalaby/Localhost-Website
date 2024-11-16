import bgImage from "../../../public/bgImage.webp";
import LoginForm from "@/components/forms/LoginForm";
export default function LoginPage() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center flex items-center justify-center sm:px-3 md:px-0"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100vh",
      }}
    >
      <LoginForm />
    </div>
  );
}
