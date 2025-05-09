import { getCategoriesAndResources } from '@/actions/getCategoriesAndResources';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation/Web';
import { Metadata } from 'next';
import { Londrina_Solid } from 'next/font/google';
import Head from 'next/head';
import '../styles/globals.css';
export const londrina = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin'],
  variable: '--font-londrina-solid',
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categoriesWithResources = await getCategoriesAndResources();
  return (
    <html id="parent" lang="en" className={`${londrina.variable}`}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-grey-lightest text-black overflow-x-clip">
        <Navigation categoriesWithResources={categoriesWithResources} />

        <div className=" flex flex-col flex-1 flex-between h-auto text-black m-auto">
          <main className="w-full  max-w-5xl	m-auto">
            {/* <main className="w-full border-2 max-w-5xl	m-auto DocSearch-content"> */}
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
