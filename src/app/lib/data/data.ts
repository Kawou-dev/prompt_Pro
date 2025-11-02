import { Calendar, ChevronUp, Home, Inbox, Pencil, Search, Settings, User, User2 , MessageSquareMore , Star, MessageCirclePlus , SquarePen, HeartPlus} from "lucide-react"

export const items = [
  {
    title: "Home",
    url: "prompts",
    icon: Home,
  },

    {
    title: "Favoris",
    url: "/favories",
    icon: HeartPlus,
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
     label: "Sujets D'actualités" , category : "actualités" , href: "actualités"
  }, 
  // {
  //    label: "Anniversaire" , category : "anniversaire" , href: "anniversaire"
  // }, 
  
  // {
  //    label: "Citation" , category : "citation"  ,  href : "citation" , 
  // }, 

  {
     label: "Developpement Personnel" , category : "developpement_personnel" , href : "developpement_personnel" , 
  },
  {
     label: "Citation" , category : "citation" , href : "citation" , 
  },
   {
     label: "Spiritualité" , category : "spiritualité" , href : "spiritualité" , 
  },
  {
     label: "Campus France" , category : "campus_france" , href : "Campus" , 
  },
]
