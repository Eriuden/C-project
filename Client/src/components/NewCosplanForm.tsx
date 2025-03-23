import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addCosplan, getCosplans } from "../redux/actions/cosplan.action"

export const NewCosplanForm = (cosplan:any) => {

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

const handleCosplan = async() => { 
    if (name) {
        const data = new FormData()
        data.append('cosplayerId', userData._id)  
        data.append('name', name)
          
        await addCosplan(data, dispatch)
        getCosplans(cosplan, dispatch)
        cancelNewCosplan()
          
    } else {
        alert("veuillez entrer un message")
    }
}

const cancelNewCosplan = () => {
    setName("")
    setPicture("")
    setLicence("")
    setBudget("")
    setRequiredMaterials([""])
}

  return (
    <div>
      
    </div>
  )
}

