'use client';
import WordMark from '@/components/WordMark';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import ButtonLink from '@/components/ButtonLink';

type NavBarProps = {
  settings: Content.SettingsDocument;
};
export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav className="px-4 py-4 md:px-6 md:py-6" aria-label="Main">
      <div className="ulnav mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Hippes Central Home Page</span>
        </Link>

        <ul className="flex items-center gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink key={item.label} field={item.link}>
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center text-sm text-slate-400 hover:text-white"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
