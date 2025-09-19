import { NavLink, Outlet, useLoaderData } from "react-router";
import { api } from "~/services/api";
import type { Highlight } from "~/schemas/highlights.schema";
import { HighlightBubble } from "~/components/HighlightBubble";

export async function loader() {
  try {
    const { data } = await api.get("/highlights");
    return data as Highlight[];
  } catch {
    return [] as Highlight[];
  }
}

export default function ProfileLayout() {
  const highlights = useLoaderData() as Highlight[];
  const activeLinkStyle = {
    borderBottom: "2px solid black",
    fontWeight: "bold",
  };

  return (
    <div className='container mx-auto px-4'>
      {highlights.length > 0 && (
        <div className='flex gap-4 overflow-x-auto py-4 border-b mb-4'>
          {highlights.map((h) => (
            <HighlightBubble key={h.id} id={h.id} title={h.title} cover_url={h.cover_url} />
          ))}
        </div>
      )}
      <div className='flex justify-center items-center border-b mb-4 gap-2'>
        <NavLink
          to='/profile/posts/grid'
          className='flex-1 text-center p-4 hover:bg-gray-50 rounded-md'
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Posts
        </NavLink>
        <NavLink
          to='/profile/reels/grid'
          className='flex-1 text-center p-4 hover:bg-gray-50 rounded-md'
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Reels
        </NavLink>
        <NavLink
          to='/profile/tagged/grid'
          className='flex-1 text-center p-4 hover:bg-gray-50 rounded-md'
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Tagged
        </NavLink>
      </div>
      <main className='pb-20'>
        <Outlet />
      </main>
    </div>
  );
}