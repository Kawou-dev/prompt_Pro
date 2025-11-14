import { FaArrowLeft, FaArrowRight, FaRegClock, FaChartLine, FaRegStar, FaCog, FaBell, FaUser, FaSearch, FaFilter, FaCopy, FaHeart, FaRegHeart, FaInstagram, FaLinkedin, FaTwitter, FaBars, FaFacebook, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import {   } from "@/app/lib/actions/getPrompts"
import { elements } from "@/app/lib/data/data"
import LargeExpandableText from "./Copy"
import FooterMobile from "./FooterMobile"
import Copy2 from "./Copy2"
import { getPrompts2 } from "@/app/lib/actions/getPrompts2"


const socialPlatforms = [
  { name: 'Instagram', icon: <FaInstagram /> , href: "instagram" },
  { name: 'LinkedIn', icon: <FaLinkedin /> , href: "linkedin" },
  { name: 'Facebook', icon: <FaFacebook /> , href: "facebook" },
  { name: 'WhatsApp', icon: <FaWhatsapp /> , href: "whatsapp" },
];
const Prompts2 = async({ searchParams }: { searchParams: { category?: string }}) => {

  const category = searchParams?.category || "all"
  const prompts = await getPrompts2(category)

  // Stats simulées pour le dashboard
  const userStats = {
    timeSaved: "12 min",
    engagementRate: "85%",
    templatesUsed: prompts.length.toString(),
    satisfaction: "89%"
  }

  return (
      <main className="min-h-screen bg-gray-100">
        


        <div className="flex pt-16 w-full    ">
          {/* SECTION PRINCIPALE AVEC MARGIN POUR LA SIDEBAR */}
          <section className="flex-1 min-h-screen p-4 sm:p-6 lg:pr-72     "> {/* Marge pour la sidebar */}

            {/* CONTENU PRINCIPAL DES PROMPTS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  📝 Les meilleurs templates -  
                  <span className="text-blue-600"> PromptPro</span>
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{prompts.length} templates trouvés</span>
                </div>
              </div>

              {/* Liste des prompts */}
              <div className="space-y-4 sm:space-y-6  "   >
                {prompts.map((prompt: any, index: number) => (
                  <div 
                    key={index} 
                    id={prompt.category} 
                    className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-blue-200 transition-colors bg-white"
                  >
                    {/* En-tête du template */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{prompt.title}</h1>
                        <p className="text-gray-600 text-sm sm:text-base">{prompt.description}</p>
                      </div>
                  
                    
                    </div>

                    {/* Contenu du template */}
                    <div className="mb-4 whitespace-pre-wrap       ">
                      <Copy2 
                        prompt={prompt.content}
                        title={prompt.title}
                        id={prompt._id.toString()}
                        isFavori={prompt.isFavori}
                        language="json"
                      />
                    </div>

                    {/* Actions et métriques */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 gap-3">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          ⭐ 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          ⏱️ 2min
                        </span>
                        <span className="flex items-center gap-1">
                          🎯 92%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
                          Aperçu
                        </button>
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center gap-2 flex-1 sm:flex-none">
                          <FaCopy size={12} />
                          Copier
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION RESPONSIVE */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-6 border-t border-gray-200 gap-4  pb-6 ">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg hover:border-gray-400 w-full sm:w-auto justify-center">
                  <FaArrowLeft />
                  <span>Précédent</span>
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    Page 1 sur {Math.ceil(prompts.length / 10)}
                  </span>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg hover:border-gray-400 w-full sm:w-auto justify-center">
                  <span>Suivant</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </section>

          {/* SIDEBAR FIXE CORRIGÉE */}
          <section className="hidden lg:block w-72 bg-white border-l border-gray-200 fixed right-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="p-6">
              {/* Filtres Rapides */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">🔍 Filtres Rapides</h3>
                <div className="flex flex-wrap gap-2">

                  {socialPlatforms.map((plateform: any, index ) => (
                    <button
                      key={index}
                      className="   px-3 py-2 flex items-center gap-2 border border-gray-300 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >


                      <Link   href={`/prompts?category=${plateform.href}`} 
                        className="flex items-center gap-2">
                          <span className="text-blue-500">{plateform.icon}</span>
                        {plateform.name}
                      </Link>
                    </button>
                  ))}
              
              
              
                </div>
              </div>

              {/* Navigation des catégories */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">📑 Sur cette page</h3>
                <nav className="space-y-2">
                  {elements.map((elm) => (
                    <Link
                      key={elm.category}
                      href={`/prompts?category=${elm.href}`}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        elm.category === category
                          ? 'bg-blue-50 text-blue-600 border border-blue-200 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {elm.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Statistiques Perso */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">📊 Votre Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Productivité</span>
                    <span className="text-sm font-medium text-green-600">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Engagement</span>
                    <span className="text-sm font-medium text-blue-600">+8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <FooterMobile />
      </main>
  )
}

export default Prompts2;




