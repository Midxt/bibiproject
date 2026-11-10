'use client';

import { useEffect, useState } from 'react';

function getRemaining(target) {
  const difference = Math.max(0, new Date(`${target}T12:00:00`).getTime() - Date.now());
  return { days: Math.floor(difference / 86400000), hours: Math.floor((difference / 3600000) % 24), minutes: Math.floor((difference / 60000) % 60) };
}

export default function Countdown({ date }) {
  const [remaining, setRemaining] = useState(() => getRemaining(date));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(date)), 60000);
    return () => clearInterval(timer);
  }, [date]);

  return <div className="flex flex-wrap items-center gap-2 text-ink"><span className="font-display text-3xl font-bold">{remaining.days}</span><span className="mr-2 text-sm font-semibold text-slate-500">days</span><span className="font-display text-3xl font-bold">{remaining.hours}</span><span className="mr-2 text-sm font-semibold text-slate-500">hrs</span><span className="font-display text-3xl font-bold">{remaining.minutes}</span><span className="text-sm font-semibold text-slate-500">min</span></div>;
}
