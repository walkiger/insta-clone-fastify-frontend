import type { TaggedPost } from "~/schemas/tagged.schema";
import { api } from "~/services/api";

export function TaggedGridItem({ post }: { post: TaggedPost }) {
  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6'>
      <div className='p-4'>
        <p className='font-bold'>webeet_user</p>
      </div>
      <img
        src={post.img_url.startsWith("http") ? post.img_url : `${api.defaults.baseURL}${post.img_url}`}
        alt={post.caption || "Tagged post"}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4'>
        <p>
          <span className='font-bold mr-2'>webeet_user</span>
          {post.caption}
        </p>
        <p className='text-sm text-gray-500 mt-1'>
          Tagged by {post.tagger}
        </p>
      </div>
    </div>
  );
}
