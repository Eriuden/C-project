import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action";


export const cosplanPartCard = (cosplan: any) => {

  type appDispatch = () => any

  const [partName, setPartName] = useState("")
  const [picture, setPicture] = useState("")
  const [materials, setMaterials] = useState("")
  const [instruction, setInstruction] = useState("");

  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()
  const userData = useSelector((state:any) => state.userReducer)

  const handlePart = (e:any) => {
    e.prevenDefault();

    if (partName) {
      addCosplanPart(cosplan._id, cosplan.parts, dispatch)
        .then(() => getCosplans(cosplan, dispatch))
        .then(() => setPartName(""));
    }
  };

  return (
    <div>
      {cosplan.parts.map((part:any)=> {
        return (
          <div>
            <h2>{part.partsName}</h2>
            <img src={part.partsPicture}/>
            <p>{part.material}</p>
            <p>{part.instruction}</p>            
          </div>
        )
      })}

      {
        userData._id && (
          <form action="" onSubmit={handlePart} className="">

          <input
              type="text"
              name="partName"
              onChange={(e) => setPartName(e.target.value)}
              value={partName}
              placeholder="Le nom de cette partie"
            />
            <br />

            <input
              type="text"
              name="picture"
              onChange={(e) => setPicture(e.target.value)}
              value={picture}
              placeholder="La photo de référence"
            />
            <br />

            <input
              type="text"
              name="materials"
              onChange={(e) => setMaterials(e.target.value)}
              value={materials}
              placeholder="Les matériaux requis"
            />
            <br />

            <input
              type="text"
              name="instruction"
              onChange={(e) => setInstruction(e.target.value)}
              value={instruction}
              placeholder="Les instruction de création"
            />

            <br />
            <input type="submit" value="Envoyer" />
          </form>
        )
      }
    </div>
  )
}
