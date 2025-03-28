import { useState, useEffect,useContext } from "react"
import { deleteCosplanPart, editCosplanPart } from "../redux/actions/cosplan.action"

type edelprops = {
  _id: string,
  cosplanId: string,
  partName: string,
  materials: [string],
  instructions: string
}

export const EditDeleteCosplanPart = (edelprops: edelprops) => {
  type appdispatch = () => any

  const [isOwner, setIsOwner] = useState(false)
  return (
    <div>EditDeleteCosplanPart</div>
  )
}
