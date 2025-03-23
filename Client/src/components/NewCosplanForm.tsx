import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addCosplan, getCosplans } from "../redux/actions/cosplan.action"
import { isEmpty } from "../utils"

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
      <form action='' onSubmit={handleCosplan} className="bg-slate-100 flex
           flex-col border-2 border-l-4 border-b-4 rounded-md border-black mx-12
           bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300
           my-4 md:mx-[20%] lg:mx-[20%]">

              <label htmlFor='name' className='mt-2 text-center text-black font-serif'>Votre nom</label>
              <input className='border-2 border-black mx-12 sm:mx-52 md:mx-[30%]
              lg:mx-[30%]' type="text" name='name' value={name} 
              onChange={(e)=> setName(e.target.value)}/>
              <div className='name error'></div>

              <div>
                {isEmpty(picture) && (
                    <>
                        <label htmlFor='picture' className='mt-2 text-center text-black font-serif'>Image de référence</label>
                        <img src="./img/icons/picture.svg" alt="img" />
                        <input className='border-2 border-black mx-12 sm:mx-52 md:mx-[30%]
                        lg:mx-[30%]' type="file" name='picture' value={picture} 
                        onChange={(e)=> handlePicture(e)}/>
                        <div className='picture error'></div>
                    </>
                    
                )}
                
              </div>
              

              <label htmlFor='licence' className='mt-2 text-center text-black font-serif'>Votre adresse</label>
              <input className='border-2 border-black mx-12 sm:mx-52 md:mx-[30%]
              lg:mx-[30%]' type="text" name='licence' value={licence} 
              onChange={(e)=> setLicence(e.target.value)}/>
              <div className='licence error'></div>

              <label htmlFor='budget' className='mt-2 text-center text-black font-serif'>Votre mot de passe</label>
              <input className='border-2 border-black mx-12 sm:mx-52 md:mx-[30%]
              lg:mx-[30%]' type='text' name='budget' value={budget} 
              onChange={(e)=> setBudget(e.target.value)}/>
              <div className='budget error'></div>

              <label htmlFor='required-materials' className='mt-2 text-center text-black font-serif'>Confirmer votre mot de passe</label>
              <input className='border-2 border-black mx-12 sm:mx-52 md:mx-[30%]
              lg:mx-[30%]' type='text' name='required-materials' value={requiredMaterials} 
              onChange={(e)=> setRequiredMaterials([e.target.value])}/>

              <input type="submit" className=' rounded-sm bg-slate-200 border-2 border-black my-4 mx-[25%] 
              xs:mx-[40%] sm:mx-[42%] md:mx-[40%] lg:mx-[43%] xl:mx-[43%]
              2xl:mx-[43%] text-black font-serif' 
              value="Valider"/>

          </form>
    </div>
  )
}

