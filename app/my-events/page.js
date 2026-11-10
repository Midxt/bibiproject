'use client';

import Link from 'next/link';
import { Bookmark, Heart } from 'lucide-react';
import { events } from '@/data';
import { useEvents } from '@/components/EventsProvider';
import EventCard from '@/components/EventCard';

export default function MyEventsPage() {
  const { savedIds } = useEvents();
  const savedEvents = events.filter((event) => savedIds.includes(event.id));

  return <main className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-5 py-12 lg:px-8 lg:py-20"><div className="mb-10 max-w-2xl"><p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-coral"><Bookmark size={16} /> Your collection</p><h1 className="font-display text-5xl font-bold tracking-tight text-ink">My Events</h1><p className="mt-4 text-lg leading-8 text-slate-500">Keep the events you care about close by. Your saved list stays on this device.</p></div>{savedEvents.length > 0 ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{savedEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-ink"><Heart size={24} /></div><h2 className="mt-5 font-display text-2xl font-bold text-ink">Nothing saved yet</h2><p className="mx-auto mt-2 max-w-sm text-slate-500">Tap the heart on an event you like and it will appear here.</p><Link href="/" className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral">Explore events</Link></div>}</main>;
}
