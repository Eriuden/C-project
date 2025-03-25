import { useState } from "react"
import { useDispatch, useSelector, UseSelector } from "react-redux"
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action"
import { isEmpty } from "../utils"

export const CosplanPart = (cosplan: any) => {

  type appDispatch = () => any 

  const [partName, setpartName] = useState("")
  const [materials, setMaterials] = useState([])
  const [instructions, setInstructions] = useState("")

  const cosplanData = useSelector((state:any) => state.cosplanReducer)
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch

  const handlePart = (e:any) => {
    e.preventDefault()

    if (partName) {
      addCosplanPart(cosplan._id, cosplanData.parts, dispatch )
        .then(() => getCosplans(cosplan, dispatch))
        .then(() => setpartName(""))
    }
  }

  return (
    <div>
      
    </div>
  )
}


