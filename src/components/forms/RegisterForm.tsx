import CustomButton from "@/utils/CustomButton";
import {LockIcon, UserIcon} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function RegisterForm() {
  async function createUser(formData: FormData) {
    "use server";
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();
    if (!email || !password || !confirmPassword) {
      console.error("Please enter email and password");
      return;
    } if (password !== confirmPassword) {
      return console.error("Passwords do not match");
    }
      console.log(email, password, confirmPassword);
    redirect("/");
  }
  return (
    <div
      className="bg-white p-5 rounded-md"
      style={{ width: "min(450px,100%)" }}
    >
      <h1 className="text-primaryColor font-bold text-xl mb-3">Create Account</h1>
      <form action={createUser} className="flex flex-col gap-4 [&_input]:border-[1px] [&_input]:border-[#D9D9D9] [&_input]:w-full">
        <div className="relative [&_svg]:size-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="rounded-md px-2 py-3"
          />
          <UserIcon className="absolute right-3 top-4 text-secondaryColor" />
        </div>
        <div className="relative [&_svg]:size-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-md px-2 py-3"
          />
          <LockIcon className="absolute right-3 top-4 text-secondaryColor" />
        </div>
        <div className="relative [&_svg]:size-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="rounded-md px-2 py-3"
          />
          <LockIcon className="absolute right-3 top-4 text-secondaryColor" />
        </div>
        <div>
          <CustomButton text="Sign Up" />
        </div>
        <p className="text-primaryColor font-medium text-center mt-2">
          I already have an account. 
          <Link href="/login" className="text-accentColor">
            Login
          </Link>
        </p>
      </form>
    </div>
  ); 
    
}
