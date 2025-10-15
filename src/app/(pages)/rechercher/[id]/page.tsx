import { connectDB } from "@/app/lib/config/mongoDB";
import PromptModel from "@/app/lib/models/prompt.Model";

type Prompt = {
  _id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  isFavori?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

type Props = {
  params: { id: string };
};

const ResultDetailPage = async ({ params }: Props) => {
  await connectDB();

  const prompt = (await PromptModel.findById(params.id).lean()) as Prompt | null;

  if (!prompt) {
    return (
      <div className="p-6 text-center text-gray-700">
        Aucun résultat trouvé 😕
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-3">{prompt.title}</h1>
      <p className="text-gray-700 mb-3">{prompt.description}</p>
      <p className="text-sm text-gray-500 mb-6">
        Catégorie : {prompt.category}
      </p>

      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="whitespace-pre-wrap">{prompt.content}</pre>
      </div>
    </div>
  );
};

export default ResultDetailPage;
