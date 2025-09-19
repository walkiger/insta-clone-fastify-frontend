import type { Post } from "~/schemas/post.schema";
import { api } from "~/services/api";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className='w-full max-w-lg mx-auto card mb-6'>
      <div className='card-header'>
        <p className='font-bold'>webeet_user</p>
        <span className='text-gray-400'>•••</span>
      </div>
      <img
        src={post.img_url.startsWith("http") ? post.img_url : `${api.defaults.baseURL}${post.img_url}`}
        alt={post.caption || "Instagram post"}
        className='w-full h-auto aspect-square object-cover bg-gray-100'
      />
      <div className='card-body space-y-2'>
        <div className='flex items-center gap-2 text-xl'>
          <button className='btn-ghost' aria-label='like'>❤️</button>
          <button className='btn-ghost' aria-label='comment'>💬</button>
          <button className='btn-ghost' aria-label='share'>📤</button>
        </div>
        <p className='text-sm'>
          <span className='font-bold mr-2'>webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}