import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kyoto Trip Planner',
  description: 'A conversational Kyoto weekend trip planner prototype.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
