'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Check, Clock3, Heart, MapPin } from 'lucide-react';
import { useEvents } from './EventsProvider';
import Countdown from './Countdown';

const badgeStyles = { Tech: 'bg-sky-100 text-sky-700', Sports: 'bg-amber-100 text-amber-700', Faith: 'bg-violet-100 text-violet-700', Social: 'bg-rose-100 text-rose-700' };

export default function EventDetails({ event }) {
  const { isSaved, toggleSaved } = useEvents();
  const saved = isSaved(event.id);
  return (
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-ink"><ArrowLeft size={16} /> Back to all events</Link>
      <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[340px] lg:min-h-[620px]"><Image src={event.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 right-7 text-white lg:bottom-10 lg:left-10"><span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[event.category]}`}>{event.category}</span><h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">{event.title}</h1></div></div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <div className="rounded-2xl bg-mint p-5"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Starts in</p><Countdown date={event.date} /></div>
          <p className="mt-8 text-base leading-8 text-slate-600">{event.description}</p>
          <div className="mt-8 space-y-4 border-y border-slate-100 py-7 text-sm font-semibold text-slate-600"><div className="flex gap-3"><CalendarDays size={19} className="shrink-0 text-coral" /><span>{new Date(`${event.date}T12:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span></div><div className="flex gap-3"><Clock3 size={19} className="shrink-0 text-coral" /><span>{event.time}</span></div><div className="flex gap-3"><MapPin size={19} className="shrink-0 text-coral" /><span>{event.venue}</span></div></div>
          <button onClick={() => toggleSaved(event.id)} className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${saved ? 'bg-mint text-ink' : 'bg-ink text-white hover:bg-coral'}`}>{saved ? <><Check size={18} /> Saved to My Events</> : <><Heart size={18} /> Save this event</>}</button>
        </div>
      </div>
    </main>
  );
}
