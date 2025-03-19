import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action";


export const cosplanPartCard = (cosplan: any) => {

  type appDispatch = () => any

  const [instruction, setInstruction] = useState("");
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()

  const handlePart = (e:any) => {
    e.prevenDefault();

    if (instruction) {
      addCosplanPart(cosplan._id, cosplan.parts, dispatch)
        .then(() => getCosplans(cosplan, dispatch))
        .then(() => setInstruction(""));
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
    </div>
  )
}
