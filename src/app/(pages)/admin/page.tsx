"use client"
import Edited from "@/components/Edited"
import PromptAdmin from "@/components/Prompt.Admin"
import { useState } from "react"

const buttons = [
  {
    id : 1 , name: "New"
  },
  {
    id:2, name: "Update"
  }
]

const page = () => {

  const [option, setOption] = useState("New");


  const handleOption = (name: string) => {
      setOption(name)
  }

  return (
   <main className="flex flex-col gap-4 mt-20">
      <div className="flex justify-center mt-5" >

          <div className="flex gap-3">
              {buttons.map( (btn) => (
                <button key={btn.id} onClick={() => handleOption(btn.name)}
                  className="border-2 rounded-md cursor-pointer w-21 "> {btn.name}  </button>
              ) )}
          </div>
          
      </div>

        {option === "New" && <PromptAdmin /> }

        {option === "Update" && <Edited /> }
    </main>
  )
}

export default page