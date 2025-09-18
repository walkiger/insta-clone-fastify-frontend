import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { HighlightBubble } from "~/components/HighlightBubble";

type Highlight = {
  id: number;
  title: string;
  cover_url: string;
};

export async function loader() {
  try {
    const { data } = await api.get("/highlights");
    return data as Highlight[];
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsList() {
  const highlights = useLoaderData() as Highlight[];
  return (
    <div className='flex gap-4 overflow-x-auto py-2'>
      {highlights.map((h) => (
        <HighlightBubble key={h.id} id={h.id} title={h.title} cover_url={h.cover_url} />
      ))}
    </div>
  );
}


