'use client';
import WordMark from '@/components/WordMark';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

type NavBarProps = {
    settings: Content.SettingsDocument;
    };
export default function NavBar({settings}: NavBarProps) {
  return (
    <div>
      <Link href="/">
        <WordMark />
        <span className="sr-only">Hippes Central Home Page</span>
      </Link>

      <nav aria-label ="Footer">
        <ul className='flex gap-6'>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}
              className="inline-flex min-h-11 text-sm text-slate-400 hover:text-white">{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
