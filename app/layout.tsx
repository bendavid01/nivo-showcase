import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Nivo — In Development', description: 'Explore the planned human-first, local-first personal finance companion. The Android app is not publicly released. Beta testing has not yet been confirmed.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }

