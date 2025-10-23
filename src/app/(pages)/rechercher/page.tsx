"use client";

import { useState, startTransition } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { searchPrompts } from "@/app/lib/actions/searchPrompts";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    startTransition(async () => {
      const res = await searchPrompts(value);
      setResults(res);
      setLoading(false);
    });
  };

  return (
    <div className="h-screen w-full p-4">
      <form className="w-full mt-3 " onSubmit={(e) => e.preventDefault()}>
        <div className="relative shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            className="pl-4 p-2  border-4 border-t-blue-600   border-x-0 border-b-2 w-full text-black text-xl"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              className="absolute right-0 top-0 mt-2 mr-2"
            >
              <X />
            </button>
          )}
        </div>
      </form>

      <div className="mt-5">
        <h1 className="text-lg font-semibold mb-2">Résultats de la recherche</h1>

        {loading && <p>Chargement...</p>}

        {!loading && results.length === 0 && query && (
          <p className="text-gray-500">Aucun résultat trouvé pour “{query}”.</p>
        )}

        <ul className="space-y-3">
          {results.map((item) => (
            <li
              key={item._id}
              className="border p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              {/* ✅ Chaque résultat est un lien cliquable */}
              <Link
                href={`/rechercher/${item._id}`}
                className="block"
              >
                <h2 className="font-bold text-xl text-blue-600 hover:underline">
                  {item.title}
                </h2>
                <p className="text-gray-700 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Catégorie : {item.category}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
