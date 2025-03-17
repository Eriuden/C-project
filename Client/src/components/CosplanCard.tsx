//Il faut un button pour afficher la page du cosplan avec les cards des parts

import { Link } from "react-router-dom"

type cosplanPropsType = {
  _id: string,
  picture: string,
  name: string,
  licence: string,
  budget: string,
  requiredMaterials: string
}
const CosplanCard = (cosplanProps :cosplanPropsType) => {
  return (
    <div>
      <Link className='w-[100%] text-center m-auto text-black' to={"/cosplan"}>Vos conseils</Link>
    </div>
  )
}

export default CosplanCard
