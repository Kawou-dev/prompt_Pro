"use client"
import { useSidebar } from "@/components/ui/sidebar"

const page = () => {
   const { state } = useSidebar()
  
  // state peut être "expanded" ou "collapsed"
  console.log("Sidebar state:", state)
  return (
    <div>
      Le sidebar est actuellement: {state === "expanded" ? "ouvert" : "fermé"}
    </div>
  )
}

export default page