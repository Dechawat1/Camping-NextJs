// rafce
import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
const page = async ({ searchParams }: { searchParams: { search?: string } }) => {
  // Search
  const { search } = await searchParams
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search}/>
      </Suspense>
    </section>
  );
};
export default page;
