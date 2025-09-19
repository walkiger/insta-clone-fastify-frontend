import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { highlightsSchema, type Highlight } from "~/schemas/highlights.schema";
import { HighlightBubble } from "~/components/HighlightBubble";

export async function loader() {
  try {
    const { data } = await api.get("/highlights");
    return highlightsSchema.parse(data);
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsList() {
  const highlights = useLoaderData() as Highlight[];
  return (
    <div className='flex gap-4 overflow-x-auto py-4 px-1'>
      {highlights.map((h) => (
        <HighlightBubble key={h.id} id={h.id} title={h.title} cover_url={h.cover_url} />
      ))}
    </div>
  );
}


