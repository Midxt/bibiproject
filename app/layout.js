import './globals.css';
import Header from '@/components/Header';
import { EventsProvider } from '@/components/EventsProvider';

export const metadata = { title: 'Campus Connect', description: 'Discover what is happening on your campus.' };

export default function RootLayout({ children }) {
  return <html lang="en"><body><EventsProvider><Header />{children}</EventsProvider></body></html>;
}
