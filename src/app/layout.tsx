import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { DM_Sans } from 'next/font/google';
import '.././styles/global.css';

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
      <body className={dmSans.variable}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
