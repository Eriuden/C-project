import { useState, useEffect,useContext } from "react"
import { deleteCosplanPart, editCosplanPart } from "../redux/actions/cosplan.action"
import { useDispatch } from "react-redux"
import { UidContext } from "./appContext"

type edelprops = {
  _id: string,
  cosplanId: string,
  partPicture: string,
  partName: string,
  materials: [string],
  instructions: string
}

export const EditDeleteCosplanPart = (edelprops: edelprops) => {
  type appDispatch = () => any

  const [isOwner, setIsOwner] = useState(false)
  const [edit, setEdit] = useState(false)
  const [partName, setPartName] = useState(edelprops.partName)
  const [materials, setMaterials] = useState(edelprops.materials)
  const [instructions, setInstructions] = useState(edelprops.instructions)
  const uid = useContext(UidContext)
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()

  const handleEdit = (e:any)=> {
    e.preventDefault()

    if (partName || materials ||instructions) {
        editCosplanPart(edelprops.cosplanId, edelprops._id, edelprops.partName, edelprops.materials, edelprops.instructions , dispatch)
        setPartName("")
        setMaterials([""])
        setInstructions("")
        setEdit(false)
    }
}

const handleDelete = () => {
  deleteCosplanPart(edelprops.cosplanId, edelprops._id, edelprops.partPicture, edelprops.partName, edelprops.materials, edelprops.instructions,  dispatch)
}

  return (
    <div>EditDeleteCosplanPart</div>
  )
}
