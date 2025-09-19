import { Link } from "react-router";
import { api } from "~/services/api";

type HighlightBubbleProps = {
  id: number | string;
  title: string;
  cover_url: string;
};

export function HighlightBubble({ id, title, cover_url }: HighlightBubbleProps) {
  return (
    <Link to={`/profile/highlights/${id}`} className='flex flex-col items-center gap-2'>
      <div className='w-20 h-20 rounded-full overflow-hidden border shadow-sm'>
        <img src={cover_url.startsWith("http") ? cover_url : `${api.defaults.baseURL}${cover_url}`} alt={title} className='w-full h-full object-cover' />
      </div>
      <span className='text-sm truncate max-w-20 text-gray-700 dark:text-gray-200'>{title}</span>
    </Link>
  );
}


