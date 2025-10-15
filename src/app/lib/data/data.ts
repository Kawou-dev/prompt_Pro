import { Calendar, ChevronUp, Home, Inbox, Pencil, Search, Settings, User, User2 , MessageSquareMore , Star, MessageCirclePlus , SquarePen} from "lucide-react"

export const items = [
  {
    title: "Home",
    url: "prompts",
    icon: Home,
  },

    {
    title: "Favoris",
    url: "/favories",
    icon: Star,
  },
   {
    title: "Chat",
    url: "chat",
    icon: SquarePen,
 
  },
 
  {
    title: "Search",
    url: "/rechercher",
    icon: Search,
  },

   {
    title: "Calendar",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Contact us",
    url: "contact",
    icon: MessageSquareMore,
  },

]


export const elements = [
  {
     label: "Tous" , category : "all" , href: "all"
  }, 
  {
     label: "Anniversaire" , category : "anniversaire" , href: "anniversaire"
  }, 
  
  {
     label: "Annonce" , category : "annonce"  ,  href : "annonce" , 
  }, 

  {
     label: "Invitation" , category : "invitation" , href : "invitation" , 
  },
   {
     label: "Motivation" , category : "motivation" , href : "motivation" , 
  },
    {
     label: "Campus France" , category : "Campus" , href : "Campus" , 
  },
]
