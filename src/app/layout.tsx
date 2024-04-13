import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
