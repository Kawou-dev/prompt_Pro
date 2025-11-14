import { FaArrowLeft, FaArrowRight, FaRegClock, FaChartLine, FaRegStar, FaCog, FaBell, FaUser, FaSearch, FaFilter, FaCopy, FaHeart, FaRegHeart, FaInstagram, FaLinkedin, FaTwitter, FaBars, FaFacebook, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { getPrompts, getPromptsSocial } from "@/app/lib/actions/getPrompts"
import { elements } from "@/app/lib/data/data"
import LargeExpandableText from "./Copy"
import FooterMobile from "./FooterMobile"
import SearchInput from "./SearchInput"
// import { SearchInput } from "./SearchInput"


const socialPlatforms = [
  { name: 'Instagram', icon: <FaInstagram /> , href: "instagram" },
  { name: 'LinkedIn', icon: <FaLinkedin /> , href: "linkedin" },
  { name: 'Facebook', icon: <FaFacebook /> , href: "facebook" },
  { name: 'WhatsApp', icon: <FaWhatsapp /> , href: "whatsapp" },
];



const Prompts = async({ searchParams }: { searchParams: { category?: string , social?: string }}) => {

  // const category = searchParams?.category || "all"
  // const prompts = await getPrompts(category)


  // const social = searchParams?.social || "all"
  // const socials = await getPromptsSocial(social)

  const category = searchParams?.category || "all";
  const social = searchParams?.social;

  let prompts = [];

  // Priorité : si l'utilisateur filtre par social, on affiche social
  if (social) {
    prompts = await getPromptsSocial(social);
  } else if (category) {
    prompts = await getPrompts(category);
  } else {
    prompts = await getPrompts("all");
  }


  // Stats simulées pour le dashboard
  const userStats = {
    timeSaved: "12 min",
    engagementRate: "85%",
    templatesUsed: prompts.length.toString(),
    satisfaction: "89%"
  }


  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   // Implémentez la logique de recherche ici
  // }





  return (
    <main className="min-h-screen bg-gray-100">
      


      <div className="flex pt-16 w-full    ">
        {/* SECTION PRINCIPALE AVEC MARGIN POUR LA SIDEBAR */}
        <section className="flex-1 min-h-screen p-4 sm:p-6 lg:pr-72     "> {/* Marge pour la sidebar */}
          
        {/* *********************************************************** */}

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

              {prompts.length === 0 && (
                <p className="text-center text-gray-500 py-10">Aucun template trouvé pour cette catégorie.</p>
              )}


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
                
                    {/* <button className="p-2 text-gray-400 hover:text-red-500 transition-colors ml-2 sm:ml-4 flex-shrink-0">
                      {prompt.isFavori ? (
                        <FaHeart className="text-red-500" size={18} />
                      ) : (
                        <FaRegHeart size={18} />
                      )}
                    </button>
                 */}


                        {/* BARRE DE RECHERCHE PRINCIPALE RESPONSIVE */}
          {/* <div className="mb-6 sm:mb-8">
           
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
          </div> */}

       
          {/* <SearchInput /> */}


           {/* STATISTIQUES RESPONSIVES */}
           {/* Below */}

         







                
                  </div>

                  {/* Contenu du template */}
                  <div className="mb-4 whitespace-pre-wrap     ">
                    <LargeExpandableText 
                      prompt={prompt.content}
                      title={prompt.title}
                      category={prompt.category}
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
{/*                 
                {['📱 Instagram', '💼 LinkedIn', '🐦 Twitter' , '📞 WhatsApp'].map((platform) => (
                  <button
                    key={platform}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {platform}
                  </button>
                ))} */}


                 {socialPlatforms.map((plateform: any, index ) => (
                  <button
                    key={index}
                    className="   px-3 py-2 flex items-center gap-2 border border-gray-300 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >


                    {/* **********  working here ********* */}


                    {/* <Link   href={`/prompts?category=${plateform.href}`} 
                      className="flex items-center gap-2">
                        <span className="text-blue-500">{plateform.icon}</span>
                       {plateform.name}
                    </Link> */}

                    <Link   href={`/prompts?social=${plateform.href}`} 
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
                      elm.category === category || elm.href === ''
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

export default Prompts





      {/* HEADER MODERNE AVEC MENU MOBILE */}
      {/* <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                <FaBars size={18} />
              </button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">🚀 ContentFactory</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FaBell size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FaCog size={18} />
              </button>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </header> */}

         {/* STATISTIQUES RESPONSIVES */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                  <FaRegClock className="text-blue-600 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{userStats.timeSaved}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Temps gagné</p>
                </div>
              </div>
              <div className="mt-1 sm:mt-2 text-xs text-green-600 font-medium">↗ +12%</div>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                  <FaChartLine className="text-green-600 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{userStats.engagementRate}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Engagement</p>
                </div>
              </div>
              <div className="mt-1 sm:mt-2 text-xs text-green-600 font-medium">↗ +3.2%</div>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
                  <FaCopy className="text-purple-600 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{userStats.templatesUsed}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Templates</p>
                </div>
              </div>
              <div className="mt-1 sm:mt-2 text-xs text-gray-600 font-medium">→ Stable</div>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
                  <FaRegStar className="text-orange-600 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{userStats.satisfaction}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>
              <div className="mt-1 sm:mt-2 text-xs text-green-600 font-medium">↗ +5%</div>
            </div>
          </div> */}


         {/* MENU MOBILE EN BAS POUR LES PETITS ÉCRANS */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaSearch size={16} />
            <span className="text-xs">Recherche</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaFilter size={16} />
            <span className="text-xs">Filtres</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaChartLine size={16} />
            <span className="text-xs">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaUser size={16} />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div> */} 