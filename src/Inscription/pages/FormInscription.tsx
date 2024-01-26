import { useState } from "react"


import { FormFathers, FormStudents, StudentRude1 } from "../components"
import {Progress} from '@/components'
export const FormInscription = () => {
  const [progres, setProgress] = useState(1)
  
  const OnProgress = (n:number)=>{
    return 25 * n;
  }
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center flex-col py-5">
        <h2 className="font-bold text-lg mb-2 text-gray-500">Pasos {progres}</h2>
        <div className="md:w-3/4 w-full">
          <Progress value={OnProgress(progres)}/>
        </div>
      </div>
      <div>
      {
        (progres === 1)? (
          <FormFathers setProgress={setProgress}/>
        ):(progres === 2)?(
          <FormStudents setProgress={setProgress}/>
        ):(progres === 3) && (<StudentRude1/>)
      }
      </div>
    </>
  )
}