import { createClient } from '@/prismicio';
import WordMark from '@/components/WordMark';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <footer>
        <Link href="/">
        <WordMark />
        <span>Hippes Central Home Page</span>
        </Link>
      
      <nav>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}>
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
