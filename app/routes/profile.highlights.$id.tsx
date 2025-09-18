import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
import { HighlightStory } from "~/components/HighlightStory";

type Highlight = {
  id: number;
  title: string;
  cover_url?: string;
};

export async function loader({ params }: LoaderFunctionArgs) {
  const highlightId = params.id;
  try {
    const { data } = await api.get(`/highlights/${highlightId}`);
    return data as Highlight;
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <HighlightStory highlight={highlight} />
    </div>
  );
}


