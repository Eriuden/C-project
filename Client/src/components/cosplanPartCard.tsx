import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCosplanPart, getCosplans } from "../redux/actions/cosplan.action";


export const cosplanPartCard = (cosplan: any) => {

  type appDispatch = () => any

  const [instruction, setInstruction] = useState("");
  const userData = useSelector((state:any) => state.userReducer);
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()

  const handlePart = (e:any) => {
    e.prevenDefault();

    if (instruction) {
      addCosplanPart(cosplan._id, userData, dispatch)
        .then(() => getCosplans(cosplan, dispatch))
        .then(() => setInstruction(""));
    }
  };

  return (
    <div>
      {cosplan.parts.map((part:any)=> {
        
      })}
    </div>
  )
}
