import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { DM_Sans } from 'next/font/google';
import '.././styles/global.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <Header />
        <main>
        {children}
        </main>
      </body>
      <Footer />
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
