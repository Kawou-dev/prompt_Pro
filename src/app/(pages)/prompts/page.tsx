import Nav2 from "@/components/Nav2"
import Prompts from "@/components/Prompts"
import Prompts2 from "@/components/Prompts2";


const Prompt = async({ searchParams,}: {searchParams: Promise<{ category?: string , social?: string }>}) => {
  // ⚠️ IMPORTANT: Attendre la Promise searchParams
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category || undefined;
  const social = resolvedSearchParams?.social || undefined;

  return (
    <div className="">
      {/* <Nav2 /> */}
      <Prompts searchParams={{ category, social }} />
      {/* <Prompts2 searchParams={{ category }} /> */}
    </div>
  )
}

export default Prompt