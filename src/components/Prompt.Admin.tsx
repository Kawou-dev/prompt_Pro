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

// "use client";

// import { useState } from "react";
// import RichTextEditor from "./TextEditor";
// import { sanitizeHTML } from "@/lib/sanitize";

// const PromptAdmin = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     content: "", // now HTML
//   });

//   // Simple client-side sanitization function
//   // const sanitizeHTML = (html: string): string => {
//   //   if (typeof window === 'undefined') return html; // Skip on server
    
//   //   // Remove script tags and event handlers
//   //   return html
//   //     .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
//   //     .replace(/ on\w+="[^"]*"/g, '')
//   //     .replace(/ on\w+='[^']*'/g, '')
//   //     .replace(/ on\w+=\w+/g, '');
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/newPrompt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...formData,
//         content: sanitizeHTML(formData.content)
//       }),
//     });

//     const data = await res.json();
//     console.log("RESPONSE FROM SERVER ===> ", data);

//     if (res.ok) {
//       alert("✅ Prompt added successfully");
//       setFormData({ title: "", description: "", category: "", content: "" });
//     } else {
//       alert("❌ Error adding prompt");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Admin Page</h1>

//       <form onSubmit={handleSubmit} className="border grid grid-cols-2 gap-4 p-4 mt-4">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col gap-4">
//           <div className="flex flex-col gap-2">
//             <label>Titre</label>
//             <input
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="border rounded p-2"
//               type="text"
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label>Description</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               className="border rounded p-2"
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label>Catégorie</label>
//             <input
//               value={formData.category}
//               onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//               className="border rounded p-2"
//               type="text"
//             />
//           </div>

//           <button
//             className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>

//         {/* RIGHT SIDE: EDITOR + PREVIEW */}
//         <div className="flex flex-col gap-4">
//           <label>Contenu (avec format)</label>
//           <RichTextEditor
//             value={formData.content}
//             onChange={(val) => setFormData({ ...formData, content: val })}
//           />

//           {/* Live Preview */}
//           <div className="border p-2 rounded bg-gray-50">
//             <h2 className="font-semibold mb-2">Aperçu :</h2>
//             <div 
//               className="prose prose-sm max-w-none min-h-[100px]"
//               dangerouslySetInnerHTML={{ __html: formData.content }} 
//             />
//           </div>
//         </div>

//       </form>
//     </div>
//   );
// };

// export default PromptAdmin;
