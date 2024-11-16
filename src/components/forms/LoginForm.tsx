import CustomButton from "@/utils/CustomButton";
import {LockIcon, UserIcon} from "lucide-react";
import Link from "next/link";
export default function LoginForm() {
  return (
    <div
      className="bg-white p-5 rounded-md"
      style={{ width: "min(450px,100%)" }}
    >
      <h1 className="text-primaryColor font-bold text-xl mb-3">Sign In</h1>
      <form className="flex flex-col gap-4 [&_input]:border-[1px] [&_input]:border-[#D9D9D9] [&_input]:w-full">
        <div className="relative [&_svg]:size-4">
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-md px-2 py-3"
          />
          <UserIcon className="absolute right-3 top-4 text-secondaryColor" />
        </div>
        <div className="relative [&_svg]:size-4">
          <input
            type="password"
            placeholder="Password"
            className="rounded-md px-2 py-3"
          />
          <LockIcon className="absolute right-3 top-4 text-secondaryColor"/>
        </div>
        <div >
          <CustomButton text="Sign In" />
        </div>
        <p className="text-primaryColor font-medium text-center mt-2">Don’t have an account yet? <Link href="/register" className="text-accentColor">Sign up</Link></p>
      </form>
    </div>
  ); 
    
}
