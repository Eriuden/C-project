import { CosplanCard } from "../components/CosplanCard"
import { isEmpty } from "../utils"
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import { UidContext } from "../AppContext";
import { NewCosplanForm } from "../components/NewCosplanForm";

 export const Home = () => {

  const [isChecked, setisChecked] = useState(false)
  const cosplans = useSelector((state:any) => state.cosplanReducer);

  const uid = useContext(UidContext)

  const setIsCheckedOrNot = () =>
  setisChecked(!isChecked)

  return (
    <>
      {uid ? (
        <>
          <div>
            <NewCosplanForm/>
            {!isEmpty(cosplans[0]) &&
            cosplans.map((cosplan:any) => {
              <CosplanCard {...cosplan}/>
              {!isChecked ? <button className="bg-green" onClick={setIsCheckedOrNot}>V</button>
              : <button className="bg-red">X</button>}
            })}       
          </div> 
        </>    
      )
        : ""
      }  
    </>
     
  )
}
