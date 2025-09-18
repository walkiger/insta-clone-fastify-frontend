type Highlight = {
  id: number | string;
  title: string;
  cover_url?: string;
};

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h2 className='text-xl font-bold mb-4'>{highlight.title}</h2>
      {highlight.cover_url ? (
        <img
          src={highlight.cover_url}
          alt={highlight.title}
          className='max-w-full max-h-[80vh] object-contain'
        />
      ) : null}
    </div>
  );
}


