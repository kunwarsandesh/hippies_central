'use client';
import WordMark from '@/components/WordMark';
import { Content } from '@prismicio/client';

type NavBarProps = {
    settings: Content.SettingsDocument;
    };
export default function NavBar({settings}: NavBarProps) {
  return (
    <div>
      <WordMark />
    </div>
  );
}
