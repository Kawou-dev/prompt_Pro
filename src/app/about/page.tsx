import Footer from "@/components/Footer";

const Page = () => {
  return (
    <section className=" pt-20 pb-6  flex flex-col items-center px-4">
      
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          A propos 
          
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="mt-10 max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="mb-6">
          Créer du contenu demande du temps, des idées, et parfois… un peu d’inspiration.
          Cette plateforme a été pensée pour répondre à ce besoin : un espace simple,
          intuitif et accessible à tous — créateurs, professionnels ou simples utilisateurs —
          pour trouver des textes parfaitement adaptés à leur univers.
        </p>

        <p className="mb-6">
          Nous mettons à votre disposition une large bibliothèque de messages prêts à l’emploi :
          motivation, humour, lifestyle, business, citations, annonces, messages personnels…
          Chaque texte est conçu pour capter l’attention, transmettre une émotion,
          et donner du sens à vos publications.
        </p>

        <p>
          <span className="font-semibold text-gray-900 dark:text-white">Notre mission</span> :
          vous offrir un outil qui stimule votre créativité, renforce votre présence en ligne,
          et vous fait gagner un temps précieux.
        </p>
      </div>

       <div className="mt-4 w-full">
        <Footer />
       </div>
    </section>
  );
};

export default Page;
