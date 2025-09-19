export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <nav className='container mx-auto flex items-center justify-between px-4 py-3'>
        <h1 className='text-2xl font-extrabold tracking-tight'>InstaClone</h1>
        <div className='text-xl select-none'>❤️</div>
      </nav>
    </header>
  );
}