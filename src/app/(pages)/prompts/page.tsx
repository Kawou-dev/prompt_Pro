import Nav2 from "@/components/Nav2"
import Prompts from "@/components/Prompts"


const Prompt = async({ searchParams,}: {searchParams: Promise<{ category?: string }>}) => {
  // ⚠️ IMPORTANT: Attendre la Promise searchParams
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category || undefined;

  return (
    <div className="">
      <Nav2 />
      <Prompts searchParams={{ category }} />
    </div>
  )
}

export default Prompt