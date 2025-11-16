import { getFavorites } from '@/app/lib/actions/getFavorites';
import LargeFavorites from '@/components/LargeFavorites';
import Nav2 from '@/components/Nav2';
import Link from 'next/link';

export default async function FavoritesPage()  {

  const prompts = await getFavorites();
 
  return (

    <div>

        {/* <Nav2 /> */}

    <div className="mt-20 flex flex-col gap-2 border-2  mx-auto p-4  mb-8 ">
      
      {prompts.length === 0 && (
        <div>
          <p className="text-center text-gray-500 py-10">Vous n'avez pas encore de favoris.</p>
          <p className='text-center  text-gray-700  underline  '><Link href="/prompts">Ajouter des favoris</Link></p>
          
        </div>
      )}


      {prompts.map((prompt: any, index:  number) => (
                   <div key={index} id={prompt.category} className="flex flex-col gap-2">
                                
                                                {/* title & descrip */}
                                                {/* <div className="px-1">
                                                    <h1 className="text-2xl font-semibold"> {prompt.title} </h1>
                                                    <p>{prompt.description} </p>
                                                </div> */}
                                  
                                                 <div className="">
                                                      <LargeFavorites 
                                                        
                                                        title={prompt.title}
                                                        description={prompt.description}
                                                        category={prompt.category}

                                                      prompt={prompt.content}
                                                      // title={prompt.title}
                                                      id={prompt._id.toString()}
                                                      isFavori={prompt.isFavori}
                                    
                                                      language="json"/>
                                                </div>
                                      
                                        </div>  
                                    ))}
    </div>
 </div>
  )
}

