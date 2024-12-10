import { fetchFavorits } from "@/actions/actions"
import LandmarkList from "@/components/home/LandmarkList"
import NoDataPage from "@/components/ืnodatapage/NoDataPage"

// rafce
const FavoritsPage = async() => {
  const favorites = await fetchFavorits()
  if(favorites.length ===0){
    return <NoDataPage/>
  }

  return <LandmarkList landmarks={favorites}/>
}
export default FavoritsPage