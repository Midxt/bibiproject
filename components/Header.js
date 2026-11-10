'use client';

import Link from 'next/link';
import { CalendarDays, Heart, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEvents } from './EventsProvider';

export default function Header() {
  const pathname = usePathname();
  const { savedIds } = useEvents();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Campus Connect home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-coral shadow-lg shadow-ink/10">
            <Sparkles size={19} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">Campus<span className="text-coral">Connect</span></span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Main navigation">
          <Link href="/" className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:block ${pathname === '/' ? 'bg-white text-ink shadow-sm' : 'text-slate-500 hover:text-ink'}`}>
            Explore
          </Link>
          <Link href="/my-events" className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${pathname === '/my-events' ? 'bg-ink text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-ink'}`}>
            <Heart size={16} fill={pathname === '/my-events' ? 'currentColor' : 'none'} />
            <span>My Events</span>
            {savedIds.length > 0 && <span className="grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[11px] text-white">{savedIds.length}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
