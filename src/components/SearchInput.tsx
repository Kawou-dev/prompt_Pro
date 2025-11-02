"use client"
import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FaSearch, FaFilter } from "react-icons/fa"

export default function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [isPending, startTransition] = useTransition()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    const params = new URLSearchParams(searchParams)
    if (value) params.set("q", value)
    else params.delete("q")

    // ⚡ rafraîchit les résultats instantanément sans recharger la page
    startTransition(() => {
      router.replace(`?${params.toString()}`)
    })
  }

  return (
    // <div className="mb-6 sm:mb-8">
    //   <div className="relative max-w-2xl">
    //     <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //     <input 
    //       type="text"
    //       value={query}
    //       onChange={handleSearch}
    //       placeholder="Recherchez un template..."
    //       className="w-full pl-10 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
    //     />
    //     <button 
    //       disabled={isPending}
    //       className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
    //         isPending ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
    //       } text-white px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1 transition-colors`}
    //     >
    //       <FaFilter size={12} />
    //       {isPending ? "..." : "Filtres"}
    //     </button>
    //   </div>
    // </div>

              <div className="mb-6 sm:mb-8">
               
                <div className="relative max-w-2xl">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Recherchez un template..."
                    className="w-full pl-10 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1">
                    <FaFilter size={12} />
                    Filtres
                  </button>
                </div>
              </div>
  )
}
