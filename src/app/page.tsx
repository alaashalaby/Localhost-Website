import Banner from "@/components/Banner";
import StaysListContainer from "@/components/StaysList/StaysListContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
}
export default async function Home() {
  return (
    <>
      <Banner />
      <StaysListContainer />
    </>
  );
}
