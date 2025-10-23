"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;

    // ⚠️ Mets ta clé Web3Forms ici
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY!);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("✅ Message envoyé avec succès !");
      form.reset();
    } else {
      setStatus("❌ Erreur lors de l’envoi. Réessayez plus tard.");
    }
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg transition-all"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Contactez-nous
        </h2>

        {/* Ligne 1 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input type="hidden" name="project" value="from: Prompt-Pro" />

          <div className="relative flex-1">
            <User className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              className="border border-gray-300 rounded-lg w-full p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative flex-1">
            <MessageSquare className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              name="subject"
              type="text"
              placeholder="Sujet"
              className="border border-gray-300 rounded-lg w-full p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* Ligne 2 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg w-full p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative flex-1">
            <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              name="phone"
              type="text"
              placeholder="Téléphone"
              className="border border-gray-300 rounded-lg w-full p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-5">
          <textarea
            name="message"
            placeholder="Votre message..."
            className="border border-gray-300 rounded-lg w-full p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
        >
          Envoyer
        </button>

        {/* Message de statut */}
        {status && (
          <p className="text-center mt-4 text-sm text-gray-700 animate-fade-in">
            {status}
          </p>
        )}
      </form>
    </main>
  );
}



    // <main className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
    //   <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
    //     <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
    //       Contactez-nous
    //     </h2>

    //     <form onSubmit={handleSubmit} className="space-y-5">
    //       <div>
    //         <label
    //           htmlFor="name"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Nom complet
    //         </label>
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           placeholder="Votre nom"
    //           required
    //           className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           placeholder="nom@entreprise.com"
    //           required
    //           className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="subject"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Sujet
    //         </label>
    //         <input
    //           type="text"
    //           name="subject"
    //           id="subject"
    //           placeholder="Sujet de votre message"
    //           required
    //           className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="message"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Message
    //         </label>
    //         <textarea
    //           name="message"
    //           id="message"
    //           rows={4}
    //           placeholder="Écrivez votre message..."
    //           required
    //           className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition dark:bg-blue-600 dark:hover:bg-blue-700"
    //       >
    //         Envoyer
    //       </button>
    //     </form>

    //     {status && (
    //       <p className="text-center mt-4 text-sm text-green-600 dark:text-green-400">
    //         {status}
    //       </p>
    //     )}

    //     {/* Coordonnées */}
    //     <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 text-center">
    //       <p className="flex justify-center items-center gap-2">
    //         <Mail className="w-4 h-4" /> info@company.com
    //       </p>
    //       <p className="flex justify-center items-center gap-2">
    //         <Phone className="w-4 h-4" /> +212 456 7890
    //       </p>
    //     </div>
    //   </div>
    // </main>