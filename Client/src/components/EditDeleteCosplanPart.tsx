import { useState, useEffect,useContext } from "react"
import { deleteCosplanPart, editCosplanPart } from "../redux/actions/cosplan.action"
import { useDispatch, useSelector } from "react-redux"
import { UidContext } from "./appContext"

type edelprops = {
  _id: string,
  cosplanId: string,
  partPicture: string,
  partName: string,
  materials: string,
  instructions: string
}

export const EditDeleteCosplanPart = (edelprops: edelprops) => {
  type appDispatch = () => any

  const [isOwner, setIsOwner] = useState(false)
  const [edit, setEdit] = useState(false)
  const [partName, setPartName] = useState(edelprops.partName)
  const [materials, setMaterials] = useState([edelprops.materials])
  const [instructions, setInstructions] = useState(edelprops.instructions)
  const uid = useContext(UidContext)
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()
  const cosplanData = useSelector((state:any)=> state.cosplanReducer)

  const handleEdit = (e:any)=> {
    e.preventDefault()

    if (partName || materials ||instructions) {
        editCosplanPart(edelprops.cosplanId, edelprops._id, edelprops.partName, [edelprops.materials], edelprops.instructions , dispatch)
        setPartName("")
        setMaterials([])
        setInstructions("")
        setEdit(false)
    }
}

const handleDelete = () => {
  deleteCosplanPart(edelprops.cosplanId, edelprops._id, edelprops.partPicture, edelprops.partName, [edelprops.materials], edelprops.instructions,  dispatch)
}


useEffect(()=> {
  const checkOwner = () => {
      if (uid === edelprops.cosplanId) {
          setIsOwner(true)
      }
  }
  checkOwner()
}, [uid, edelprops._id])


  return (
    <div>
      {isOwner && edit === false && (
            <span onClick={()=> setEdit(!edit)}>
                Editer
            </span>
        )}
        {isOwner && edit && (
            <form action='' onSubmit={handleEdit}>
                <label htmlFor='text' onClick={()=> setEdit(!edit)}>
                    Annuler les modifications
                </label>

                <br/>

                <input type="text" name='partName' onChange={(e)=> setPartName(e.target.value)}
                defaultValue={edelprops.partName}/>

                <br/>

                <input type="text" name='materials' onChange={(e)=> {
                  { cosplanData.parts.materials.map((material:any)=> {
                    const updatedMaterials = [...materials]
                    updatedMaterials[material] = e.target.value
                    setMaterials(updatedMaterials)
                  }
                  )}
                } 
                }
                defaultValue={edelprops.materials}/>

                <br/>

                <input type="text" name='instructions' onChange={(e)=> setInstructions(e.target.value)}
                defaultValue={edelprops.instructions}/>

                <br/>

                <input type="submit" value="Valider les modifications"/>

                <br/>
            </form>
        )}
        {isOwner && (
            <span onClick={()=> {
                if (window.confirm("Voulez vous supprimer cette partie ?")) {
                    handleDelete()
                }
            }}
            >
                Supprimer
            </span>
        )}
    </div>
  )
}
