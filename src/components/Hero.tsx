import Link from 'next/link';
import Image from 'next/image';
import AddsCarousel from './CarouselAdd';



const adds = [
  {
    title : " # Prompt: Assistant marketing" , 
    description : "Créez un post engageant pour les réseaux sociaux qui présente notre nouveau produit [nom du produit] en mettant en avant ses [caractéristiques principales] et en ciblant [audience cible]" , 
  },
  {
    title : " # Prompt: Assistant lettre de motivation" , 
    description : "Rédigez une lettre de motivation convaincante pour le poste de [nom du poste] en mettant en avant vos [compétences clés] et votre [expérience pertinente] afin de capter l'attention du recruteur." , 
  },
  {
    title : " # Prompt: Assistant création de contenu" , 
    description : "Générez un article de blog captivant sur [sujet] en mettant en avant [points clés] et en adoptant un ton [ton souhaité]." , 
  }
]



const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
         
                Boostez vos publications avec des <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">textes puissants</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {/* Notre plateforme vous aide à créer, partager et découvrir des prompts efficaces pour maximiser votre productivité avec l'IA. */}
               Notre plateforme met à votre disposition une large collection de textes professionnels, inspirants et optimisés pour tous les réseaux sociaux. Gagnez du temps, trouvez l’inspiration et publiez facilement du contenu de qualité.
        {/* Accédez à une bibliothèque de contenus optimisés pour les réseaux sociaux. Trouvez l’inspiration, gagnez du temps et publiez facilement des textes percutants adaptés à votre audience. */}

            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link 
                href="/prompts" 
                className="px-8 py-3   border-2 dark:border-white  text-lg    font-medium   rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                Explorer les textes
              </Link>
              <Link 
                href="/favorites" 
                className="px-8 py-3 border-2 dark:bg-white dark:text-black    text-lg   font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Partager un texte
              </Link>
           
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-white">5K+</div>
                <div className="text-sm">Prompts disponibles</div>
              </div>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-white">2K+</div>
                <div className="text-sm">Utilisateurs actifs</div>
              </div>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-white">98%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 z-10"></div>
                <div className="aspect-video bg-gray-800 flex items-center justify-center p-6">
                  <div className="w-full">
                    <div className="flex gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    
                    
                     {/* {adds.map((add, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-300 mb-4">
                        <p className="mb-2">{add.title}</p>
                        <p>{add.description}</p>
                      </div>
                     ))} */}

                     <AddsCarousel />
                   
              {/*                    
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-300">
                      <p className="mb-2"># Prompt: Assistant marketing</p>
                      <p>Créez un post engageant pour les réseaux sociaux qui présente notre nouveau produit [nom du produit] en mettant en avant ses [caractéristiques principales] et en ciblant [audience cible].</p>
                    </div> 
              */}




                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 md:left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 md:right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;