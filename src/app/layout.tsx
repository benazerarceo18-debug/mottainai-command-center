import type { Metadata } from 'next';
import './globals.css';
import Sidebar, { SidebarProvider } from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Mottainai Command Center | NHI',
  description: 'Board-ready dashboard for Mottainai brand development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex bg-bg">
        <SidebarProvider>
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen ml-0 lg:ml-64">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
            <footer className="py-4 text-center text-text-muted text-xs">
              Nippon Hasha Inc. &copy; 2026 &mdash; Confidential
            </footer>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
