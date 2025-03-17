import CosplanCard from "../components/CosplanCard"
import { isEmpty } from "../utils"
import { useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {

  const [isChecked, setisChecked] = useState(false)
  const cosplans = useSelector((state:any) => state.cosplanReducer);

  const setIsCheckedOrNot = () =>
  setisChecked(!isChecked)
  
  return (
    <div>
      {!isEmpty(cosplans[0]) &&
      cosplans.map((cosplan:any) => {
        <CosplanCard cosplanProps={cosplan}/>
        {!isChecked  ?<button className="bg-green" onClick={setIsCheckedOrNot}>V</button>
        : <button className="bg-red">X</button>}
      })}
      
    </div>
  )
}

export default Home
