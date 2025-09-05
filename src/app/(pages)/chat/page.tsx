import  {Share , EllipsisVertical, ChevronUp, User2}  from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import {

  SidebarMenuButton,

  
} from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"
const Chat = () => {

  const options = [
      { label: "Anniversaire" , value: ""} , 
      { label: "Felicitation" , value: ""} , 
      { label: "Invitation" , value: ""} , 
      { label: "Annonce" , value: ""} , 
  ]

  return (
     <>
        

        <main>
           <section className="flex justify-center w-full h-screen  md:pt-20 pt-16 ">

                <div className="flex flex-col gap-4 items-center ">
                      <h1 className="text-center text-2xl font-semibold">Qu&apos;avez-vous en tête ?</h1>
                    
                    <form >

                      <textarea className=" md:w-[750px] w-[300px]  md:h-32 rounded-2xl border-2 p-3 text-md shadow "
                      placeholder="Entrer votre ..."
                      ></textarea>


                    </form>


                        {/* option div */}
                    <div className="flex justify-center gap-4 px-1 relative  flex-wrap md:w-[550px] w-[400px]  ">
                       
                        <ul className="flex justify-center md:px-1 px-4 gap-2 items-center flex-wrap   md:w-[500px] w-[350px]  ">
                          {options.map((option) => (
                            <li key={option.label} className="p-2 border-2 cursor-pointer rounded-2xl text-center  hover:bg-gray-100 duration-75 animation-duration-initial ">
                                  {option.label}
                            </li>
                          ))}
                        </ul>
                    </div>

                </div>

           </section>
        </main>

     </>
  )
}

export default Chat