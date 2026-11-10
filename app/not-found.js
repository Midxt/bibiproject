import Link from 'next/link';

export default function NotFound() {
  return <main className="grid min-h-[calc(100vh-73px)] place-items-center px-5 text-center"><div><p className="font-display text-7xl font-bold text-coral">404</p><h1 className="mt-3 font-display text-3xl font-bold text-ink">Event not found</h1><p className="mt-3 text-slate-500">That event may have moved or no longer exists.</p><Link href="/" className="mt-7 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-coral">Back to events</Link></div></main>;
}
