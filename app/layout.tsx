import { SpeedInsights } from "@vercel/speed-insights/next";

import '../styles/globals.css';

export const metadata = {
  title: 'Diego Donaggio - Solution Engineer',
  description: 'Diego Donaggio\'s Online CV',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
