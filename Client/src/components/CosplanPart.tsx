import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action"
import { EditDeleteCosplanPart } from "./EditDeleteCosplanPart"

export const CosplanPart = (cosplan: any) => {

  type appDispatch = () => any 

  const [partName, setpartName] = useState("")
  const [materials, setMaterials] = useState([])
  const [instructions, setInstructions] = useState("")

  const cosplanData = useSelector((state:any) => state.cosplanReducer)
  const userData = useSelector((state:any) => state.userReducer)
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
  //Modifier la partie materials, cas encore jamais traité ici, du à l'array
  return (
    <div>
      {cosplan.parts.map((part:any) => {
        return (
          <div>
            <img src={part.partPicture}/>
            <h2>{part.partName}</h2>
            <ul>
              {cosplan.parts.materials.map((material:any) => {
                <li>{material}</li>
              })}
            </ul>
            <p>{cosplan.instruction}</p>
            <EditDeleteCosplanPart/>
          </div>
        )
      })}

      {
        userData._id && (
          <form action="" onSubmit={handlePart} className="comment-form">
            <input
              type="text"
              name="partName"
              onChange={(e) => setpartName(e.target.value)}
              value={partName}
              placeholder="Nom de la partie du cosplay"
            />
            <br />

            <input
              type="text"
              name="materials"
              onChange={(e) => setMaterials(e.target.value)}
              value={materials}
              placeholder="Nom de la partie du cosplay"
            />
            <br />

            <input
              type="text"
              name="instructions"
              onChange={(e) => setInstructions(e.target.value)}
              value={instructions}
              placeholder="Nom de la partie du cosplay"
            />
            <br />
            <input type="submit" value="Envoyer" />
          </form>
        )
      }
    </div>
  )
}


