import Navigation from '@/components/Navigation/Web';
import '../styles/globals.css';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="parent" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-grey-lightest text-black">
        <Navigation />

        <div className=" flex flex-col flex-1 flex-between h-auto text-black m-auto">
          <main className="w-full  max-w-5xl	m-auto DocSearch-content">
            {/* <main className="w-full border-2 max-w-5xl	m-auto DocSearch-content"> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
