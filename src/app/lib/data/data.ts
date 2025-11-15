import { ca } from 'date-fns/locale';
import { Calendar, ChevronUp, Home, Inbox, Pencil, Search, Settings, User, User2 , MessageSquareMore , Star, MessageCirclePlus , SquarePen, HeartPlus} from "lucide-react"

export const items = [
  {
    title: "Accueil",
    url: "prompts",
    icon: Home,
  },

    {
    title: "Vos favoris",
    url: "/favorites",
    icon: HeartPlus,
  },
   {
    title: "Chatbot",
    url: "chat",
    icon: SquarePen,
 
  },
 
  {
    title: "Recherche",
    url: "/search",
    icon: Search,
  },

   {
    title: "Calendrier",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Nous contacter",
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
  {
     label: "Annonce" , category : "annonce" , href: "annonce"
  }, 
  
  {
     label: "Humour" , category : "humour"  ,  href : "humour" , 
  }, 

 
  {
     label: "Citation" , category : "citation" , href : "citation" , 
  },
  //  {
  //    label: "Spiritualité" , category : "spiritualité" , href : "spiritualité" , 
  // },
  {
     label: "Campus France" , category : "campus" , href : "Campus" , 
  },
  {
     label: "Developpement Personnel" , category : "developpement_personnel" , href : "developpement_personnel" , 
  },
]
