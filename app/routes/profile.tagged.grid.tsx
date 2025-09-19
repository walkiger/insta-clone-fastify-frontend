import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { taggedPostsSchema, type TaggedPost } from "~/schemas/tagged.schema";
import { TaggedGridItem } from "~/components/TaggedGridItem";

export async function loader() {
  try {
    const { data } = await api.get("/tagged/grid");
    return taggedPostsSchema.parse(data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function TaggedGrid() {
  const posts = useLoaderData() as TaggedPost[];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {posts.map((post) => (
        <TaggedGridItem key={post.id} post={post} />
      ))}
    </div>
  );
}


