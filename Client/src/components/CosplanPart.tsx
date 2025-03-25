import { useState } from "react"
import { useDispatch, UseSelector } from "react-redux"
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action"
import { isEmpty } from "../utils"

export const CosplanPart = (partProps: any) => {

  type appDispatch = () => any 

  const [partName, setpartName] = useState("")
  const [materials, setMaterials] = useState([""])
  const [instructions, setInstructions] = useState("")

  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch

  
  return (
    <div>
      
    </div>
  )
}


