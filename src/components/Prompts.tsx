import { MoveLeft, MoveRight } from "lucide-react"
import LargeExpandableCodeBox from "./Copy"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { getPrompt } from "@/app/lib/actions/getPrompts";


const textValue = `const example = {
                      name: "Mon composant",
                      version: "1.0.0",
                      dependencies: {
                        react: "^18.2.0",
                        tailwindcs
                           },
                      config: {
                        autoExpand: true,
                        darkMode: false
                      }
                        name: "Mon composant",
                      version: "1.0.0",
                      dependencies: {
                        react: "^18.2.0",
                        tailwindcss: "^3.3.0"
                      },
                      config: {
                        autoExpand: true,
                        darkMode: false   },
                      config: {
                        autoExpand: true,
                        darkMode: false
                      }
                        name: "Mon composant",
                      version: "1.0.0",
                      dependencies: {
                        react: "^18.2.0",
                        tailwindcss: "^3.3.0"
                      },
                      config: {
                        autoExpand: true,
                        darkMode: falses: "^3.3.0"
                      },
                      config: {
                        autoExpand: true,
                        darkMode: false
                      }
                        name: "Mon composant",
                      version: "1.0.0",
                      dependencies: {
                        react: "^18.2.0",
                        tailwindcss: "^3.3.0"
                      },
                      config: {
                        autoExpand: true,
                        darkMode: false
                      }
                    }`


const elements = [
  {
     label: "Anniversaire" , category : "anniversaire" , href: "#anniversaire"
  }, 
  
  {
     label: "Annonce" , category : "annonce"  ,  href : "#annonce" , 
  }, 

   {
     label: "Invitation" , category : "invitation" , href : "#invitation" , 
  },
]


const Prompts = async() => {

  console.log("Hello Kawou from prompts page") ;


  const prompts = await getPrompt() ; 

  // console.log("PROMPTS ===> ", prompts) ;


  return (
      <main className="flex h-screen  md:gap-16  mb-3 mt-12 "  >
       
       <section className="relative md:pr-0 pr-2  md:w-[70%] w-[100%]  h-screen overflow-y-auto border-2  ">
          <div className="pt-4">

              <div>
                   <h1 className="text-2xl font-semibold">Les meilleurs prompts-  
                    <span className="text-gray-800">PromptPro</span>
                   </h1>
              </div>

           <div >
                    {/* Parent DIV */}
                      <div className="mt-5 flex flex-col gap-2 ">


                              {prompts.map((prompt, index) => (
                                 <div key={index} id={prompt.category} className="flex flex-col gap-2 ">
                          
                                          {/* title & descrip */}
                                          <div className="px-1">
                                              <h1 className="text-2xl font-semibold"> {prompt.title} </h1>
                                              <p>{prompt.description} </p>
                                          </div>
                                          {/* zone texte & copy */}
                                          {/* <div className="">
                                                <LargeExpandableCodeBox 
                                                prompt={prompt.content}
                                                title="package.json"
                                                language="json"/>
                                          </div> */}

                                           <div className="">
                                                <LargeExpandableCodeBox 
                                                prompt={prompt.content}
                                                title={prompt.title}
                                                language="json"/>
                                          </div>
                                
                                
                                  </div>  

                              ))}


                               {/* <div className="">
                                                <LargeExpandableCodeBox 
                                                code={textValue}
                                                title="package.json"
                                                language="json"/>
                                </div> */}


                        
                          
                         
                      
                    
                      </div>

                    {/* GREAT FOOTER ELEMENT */}
                    <div className="mt-3 pb-4">

                      <div className="flex justify-between px-3">
                          
                          <div className="flex items-center gap-2 cursor-pointer text-[#616161] hover:text-black ">
                            <span> <FaArrowLeft />   </span>
                             <p>Come Back</p> 
                          </div>

                          <div className="flex items-center gap-2 cursor-pointer text-[#616161] hover:text-black    ">
                              <p>Go Next</p>
                              <span>  <FaArrowRight />  </span>
                              {/* <MoveRight /> */}
                          </div>

                        

                      </div>

                    </div>
          </div>   


          </div>

       </section>


        <section className=" pt-20 border-2 md:w-[30%] md:flex hidden  h-full sticky top-0 self-start max-h-screen overflow-y-auto">
                 <div className="mt-12 pl-5">
                    <h1 className="text-xl">Sur cette page</h1>



                    <ul className="mt-3 ">
                      {elements.map((elm) => (
                        <li key={elm.category}
                        className="cursor-pointer "    > 
                              <Link  href={elm.href} >{elm.label}</Link>

                        </li>
                      ))}

                    </ul>



                 </div>
        </section>
      </main>
  )
}

export default Prompts



    //  {/* Prompt  1*/}
                              
    //                               <div id="anniversaire" className="flex flex-col gap-2 ">
                          
    //                                       {/* title & descrip */}
    //                                       <div className="px-1">
    //                                           <h1 className="text-2xl font-semibold">Anniversaire</h1>
    //                                           <p>Vous avez un proche que vous voulez toucher à un message de motivation tester celui ci dessous</p>
    //                                       </div>
    //                                       {/* zone texte & copy */}
    //                                       <div className="">
    //                                             <LargeExpandableCodeBox 
    //                                             code={textValue}
    //                                             title="package.json"
    //                                             language="json"/>
    //                                       </div>
    //                               </div>  
                              
    //                             {/* Prompt  2*/}
    //                               <div id="annonce" className="flex flex-col gap-2 ">
                                  
    //                                       {/* title & descrip */}
    //                                       <div>
    //                                           <h1 className="text-2xl font-semibold">Annonce</h1>
    //                                           <p>Vous avez un proche que vous voulez toucher à un message de motivation tester celui ci dessous</p>
    //                                       </div>
    //                                       {/* zone texte & copy */}
    //                                       <div className="">
    //                                             <LargeExpandableCodeBox 
    //                                             code={textValue}
    //                                             title="package.json"
    //                                             language="json"/>
    //                                       </div>
    //                               </div>   
    //                               {/* Prompt  3*/}
    //                               <div id="annonce" className="flex flex-col gap-2 ">
                                  
    //                                       {/* title & descrip */}
    //                                       <div>
    //                                           <h1 className="text-2xl font-semibold">Annonce</h1>
    //                                           <p>Vous avez un proche que vous voulez toucher à un message de motivation tester celui ci dessous</p>
    //                                       </div>
    //                                       {/* zone texte & copy */}
    //                                       <div className="">
    //                                             <LargeExpandableCodeBox 
    //                                             code={textValue}
    //                                             title="package.json"
    //                                             language="json"/>
    //                                       </div>
    //                               </div>  

    //                               {/* Prompt  4*/}
    //                               <div id="invitation" className="flex flex-col gap-2 ">
                                  
    //                                       {/* title & descrip */}
    //                                       <div>
    //                                           <h1 className="text-2xl font-semibold">Annonce</h1>
    //                                           <p>Vous avez un proche que vous voulez toucher à un message de motivation tester celui ci dessous</p>
    //                                       </div>
    //                                       {/* zone texte & copy */}
    //                                       <div className="">
    //                                             <LargeExpandableCodeBox 
    //                                             code={textValue}
    //                                             title="package.json"
    //                                             language="json"/>
    //                                       </div>
    //                               </div>  
                    
