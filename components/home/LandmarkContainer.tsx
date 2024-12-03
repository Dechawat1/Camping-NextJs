import { fetchLandmarks } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LandmarkCardProps } from "@/utils/types"
import Hero from "../hero/Hero"
import CategoriesList from "./CategoriesList"
import NoDataPage from "../ืnodatapage/NoDataPage"



const LandmarkContainer = async ({ search, category }: { search?: string, category?: string }) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search, category })
  // console.log(landmarks)

  if (!landmarks || landmarks.length === 0) {
    return <NoDataPage/>
  } else {
    return (
      <div>
        <Hero landmarks={landmarks} />
        <CategoriesList search={search} category={category} />
        <LandmarkList landmarks={landmarks} />
      </div>
    )
  }


}
export default LandmarkContainer