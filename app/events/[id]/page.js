import { notFound } from 'next/navigation';
import { events, getEventById } from '@/data';
import EventDetails from '@/components/EventDetails';

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default function EventPage({ params }) {
  const event = getEventById(params.id);
  if (!event) notFound();
  return <EventDetails event={event} />;
}
