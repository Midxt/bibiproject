'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3, Heart, MapPin } from 'lucide-react';
import { useEvents } from './EventsProvider';

const badgeStyles = {
  Tech: 'bg-sky-100 text-sky-700',
  Sports: 'bg-amber-100 text-amber-700',
  Faith: 'bg-violet-100 text-violet-700',
  Social: 'bg-rose-100 text-rose-700',
};

export default function EventCard({ event }) {
  const { isSaved, toggleSaved } = useEvents();
  const saved = isSaved(event.id);

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={event.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent opacity-70" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[event.category]}`}>{event.category}</span>
        <button onClick={() => toggleSaved(event.id)} aria-label={saved ? `Remove ${event.title} from saved events` : `Save ${event.title}`} className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${saved ? 'bg-coral text-white' : 'bg-white/80 text-ink hover:bg-white'}`}>
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-white"><CalendarDays size={14} /> {new Date(`${event.date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
      </div>
      <div className="p-5">
        <h2 className="font-display text-xl font-bold leading-tight text-ink transition-colors group-hover:text-coral">{event.title}</h2>
        <div className="mt-4 space-y-2 text-sm text-slate-500">
          <div className="flex items-center gap-2"><Clock3 size={15} className="text-coral" />{event.time}</div>
          <div className="flex items-center gap-2"><MapPin size={15} className="text-coral" />{event.venue}</div>
        </div>
        <Link href={`/events/${event.id}`} className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-ink">
          View event details <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
