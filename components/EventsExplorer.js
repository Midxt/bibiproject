'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Search, SlidersHorizontal, X } from 'lucide-react';
import { categories, events } from '@/data';
import EventCard from './EventCard';

export default function EventsExplorer() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('soonest');

  const filteredEvents = useMemo(() => events
    .filter((event) => category === 'All' || event.category === category)
    .filter((event) => event.title.toLowerCase().includes(query.toLowerCase().trim()))
    .sort((a, b) => sortOrder === 'soonest' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)), [category, query, sortOrder]);

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-coral/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-coral"><CalendarDays size={16} /> Your campus, in one place</p>
            <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">Find your next <span className="text-coral">something.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Discover the talks, games, gatherings, and moments that make campus life feel like yours.</p>
          </div>
          <div className="mt-10 flex max-w-2xl items-center gap-3 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20">
            <Search className="ml-3 shrink-0 text-slate-400" size={20} />
            <label htmlFor="event-search" className="sr-only">Search events by title</label>
            <input id="event-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search events by title..." className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-ink outline-none placeholder:text-slate-400" />
            {query && <button onClick={() => setQuery('')} aria-label="Clear search" className="mr-2 text-slate-400 hover:text-ink"><X size={18} /></button>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2" aria-label="Filter events by category">
            {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? 'bg-ink text-white shadow-md shadow-ink/15' : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-ink'}`}>{item}</button>)}
          </div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-500"><SlidersHorizontal size={16} /><span>Sort by</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="cursor-pointer rounded-lg border-0 bg-transparent font-bold text-ink outline-none"><option value="soonest">Soonest first</option><option value="latest">Latest first</option></select></label>
        </div>
        <div className="mb-5 flex items-baseline justify-between"><h2 className="font-display text-2xl font-bold text-ink">Upcoming events</h2><span className="text-sm text-slate-400">{filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}</span></div>
        {filteredEvents.length > 0 ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-ink"><Search size={24} /></div><h3 className="mt-5 font-display text-2xl font-bold text-ink">No events found</h3><p className="mx-auto mt-2 max-w-sm text-slate-500">Try another search term or clear your filters to see what is happening on campus.</p><button onClick={() => { setQuery(''); setCategory('All'); }} className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral">Clear all filters</button></div>}
      </section>
    </>
  );
}
