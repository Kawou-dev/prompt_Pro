import { getFavorites } from '@/app/lib/actions/getFavorites';
import LargeFavorites from '@/components/LargeFavorites';
import Nav2 from '@/components/Nav2';

export default async function FavoritesPage()  {

  const prompts = await getFavorites();
 
  return (

    <div>

        <Nav2 />

    <div className="mt-12 flex flex-col gap-2 border-2  mx-auto p-4 ">
      {prompts.map((prompt: any, index:  number) => (
                   <div key={index} id={prompt.category} className="flex flex-col gap-2">
                                
                                                {/* title & descrip */}
                                                <div className="px-1">
                                                    <h1 className="text-2xl font-semibold"> {prompt.title} </h1>
                                                    <p>{prompt.description} </p>
                                                </div>
                                  
                                                 <div className="">
                                                      <LargeFavorites 
                                                      prompt={prompt.content}
                                                      title={prompt.title}
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

