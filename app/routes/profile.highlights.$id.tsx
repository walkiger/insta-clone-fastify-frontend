import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
import { highlightSchema, type Highlight } from "~/schemas/highlights.schema";
import { HighlightStory } from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
  const highlightId = params.id;
  try {
    const { data } = await api.get(`/highlights/${highlightId}`);
    return highlightSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;
  return (
    <div className='min-h-[60vh] flex items-center justify-center p-4'>
      <HighlightStory highlight={highlight} />
    </div>
  );
}


