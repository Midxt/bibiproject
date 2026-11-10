'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const EventsContext = createContext(null);

export function EventsProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('campus-connect-saved');
      if (stored) setSavedIds(JSON.parse(stored));
    } catch {
      setSavedIds([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem('campus-connect-saved', JSON.stringify(savedIds));
  }, [hydrated, savedIds]);

  const value = useMemo(() => ({
    savedIds,
    isSaved: (id) => savedIds.includes(id),
    toggleSaved: (id) => setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]),
  }), [savedIds]);

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) throw new Error('useEvents must be used inside EventsProvider');
  return context;
}
