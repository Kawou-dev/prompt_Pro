"use client"

import { useState } from "react";

const PromptAdmin = () => {


  const [formData, setFormData] = useState({
    title : "" , 
    description : "", 
    category : "" ,  
    content : ""
  })

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();


    const res = await fetch("/api/newPrompt" , {
      method: "POST" , 
      headers: {
        "Content-Type" : "application/json"
      } , 
      body: JSON.stringify(formData) 
    })

    const data = await res.json() ;
    console.log("RESPONSE FROM SERVER ===> " , data) ;
    if(res.ok) {
      alert("Prompt added successfully") ; 
      setFormData({
        title : "" , 
        description : "", 
        category : "" ,  
        content : ""
      })
    } else {
      alert("Error adding prompt") ; 
    }

    


   
  }

  return (
    <div className='p-4 ' >
              

        <h1 className='text-2xl font-bold ' >Admin Page</h1>



          {/* add some style to the form */}

        <form  onSubmit={handleSubmit}
         className='border-2 flex flex-col gap-4 p-4 mt-4 ' >

          <div className='flex flex-col gap-2'>
            <label htmlFor="title">Titre</label>
            <input value={formData.title} onChange={(e) => setFormData({...formData , title : e.target.value})}
             className='border-2 rounded p-2' type="text" name="title" id="title" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="description">Description</label>
            <textarea  value={formData.description} onChange={(e) => setFormData({...formData , description : e.target.value})}
             className='border-2 rounded p-2' name="description" id="description" ></textarea>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="category">Categorie</label>
            <input   value={formData.category} onChange={(e) => setFormData({...formData , category : e.target.value})}
            
            className='border-2 rounded p-2' type="text" name="category" id="category" /> 
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="content">Prompt</label>
            <textarea  value={formData.content} onChange={(e) => setFormData({...formData , content : e.target.value}) }
             className='border-2 rounded p-2' name="content" id="content" ></textarea>
          </div>
            
            

            <button className="border-2 p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors" 
            type="submit"> Submit</button>
        </form>

    </div>
  )
}

export default PromptAdmin
