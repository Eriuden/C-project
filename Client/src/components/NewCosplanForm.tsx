import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
export const NewCosplanForm = () => {

const [picture, setPicture] = useState("")
const [name, setName] = useState("")
const [licence, setLicence] = useState("")
const [budget, setBudget] = useState("")
const [requiredMaterials, setRequiredMaterials] = useState([""])

const userData= useSelector((state:any) => state.userReducer)
const errors = useSelector((state:any) => state.errorReducer.postError)
const dispatch = useDispatch()

const handlePicture = (e:any) => {
    setPicture(URL.createObjectURL(e.target.files[0]))
    }

  return (
    <div>
      
    </div>
  )
}

