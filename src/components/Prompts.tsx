import { MoveLeft, MoveRight } from "lucide-react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { getPrompts } from "@/app/lib/actions/getPrompts"
import { elements } from "@/app/lib/data/data"
import LargeExpandableText from "./Copy"
import { SearchInput } from "./SearchInput"

const Prompts = async({searchParams,}: { searchParams: { category?: string }}) => {

   const category = searchParams?.category || "all"

  console.log("Hello Kawou from prompts page")
  console.log("Category selected is -----> : ", category)

  const prompts = await getPrompts(category)

  return (
      <main className="flex h-screen mb-3 mt-12 ">
       
       {/* Section principale avec défilement */}
       <section className="flex-1 h-screen overflow-y-auto border-2 "  >
          <div className="pt-4 md:pr-[25%]   pr-0"> {/* Ajout de marge à droite pour la section fixe */}

              {/* <div>
                   <h1 className="text-2xl font-semibold">Les meilleurs prompts-  
                    <span className="text-gray-800">PromptPro</span>
                   </h1>
              </div> */}

           <div>
                    {/* Parent DIV */}
                      <div className="mt-5 flex flex-col gap-2 border-2  ">


                              {prompts.map((prompt: any, index:  number) => (
                                 <div key={index} id={prompt.category} className="flex flex-col gap-2">
                          
                                          {/* title & descrip */}
                                          <div className="px-1">
                                              <h1 className="text-2xl font-semibold"> {prompt.title} </h1>
                                              <p>{prompt.description} </p>
                                          </div>
                            
                                           <div className="">
                                                <LargeExpandableText 
                                                prompt={prompt.content}
                                                title={prompt.title}
                                                id={prompt._id.toString()}
                                                isFavori={prompt.isFavori}
                              
                                                language="json"/>
                                          </div>
                                
                                  </div>  
                              ))}
                    
                      </div>

                    {/* GREAT FOOTER ELEMENT */}
                    <div className="mt-3 pb-4">

                      <div className="flex justify-between px-3">
                          
                          <div className="flex items-center gap-2 cursor-pointer text-[#616161] hover:text-black">
                            <span><FaArrowLeft /></span>
                             <p>Come Back</p> 
                          </div>

                          <div className="flex items-center gap-2 cursor-pointer text-[#616161] hover:text-black">
                              <p>Go Next</p>
                              <span><FaArrowRight /></span>
                          </div>
                      </div>
                    </div>
          </div>   
          </div>
       </section>

        {/* Section fixe à droite */}
        <section className="fixed right-0 top-12 w-[20%] h-[calc(100vh-3rem)] pt-20 border-2 hidden md:block overflow-y-auto">
                
                {/* <div className="mt-4 pl-5">
                  <SearchInput />
                </div> */}
                
                
                 <div className="mt-12 pl-5">
                    <h1 className="text-xl">Sur cette page</h1>

                    <ul className="mt-3">
                      {elements.map((elm) => (
                        <li key={elm.category}
                        className={`cursor-pointer ${elm.category === category ? "text-blue-500" : ""}`}> 
                          <Link href={`/prompts?category=${elm.href}`}>{elm.label}</Link>
                        </li>
                      ))}

                    </ul>
                 </div>
        </section>
    
    
      </main>
  )
}

export default Prompts