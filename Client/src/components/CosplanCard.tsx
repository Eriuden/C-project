import { Link } from "react-router-dom"

type cosplanPropsType = {
  _id: string,
  picture: string,
  name: string,
  licence: string,
  budget: string,
  requiredMaterials: string
}
 export const CosplanCard = (cosplanProps :cosplanPropsType) => {
  return (
    <div>
      <Link className='w-[100%] text-center m-auto text-black' to={"/cosplan"}>
        <div>
          <h2>{cosplanProps.name}</h2>
          <img src={cosplanProps.picture}/>
        </div>
      </Link>
      
    </div>
  )
}

