import Bounded from '@/app/components/Bounded';
import { Content, asText } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { components } from '..';
import { ChildProcess } from 'child_process';

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
            </h2>
          ),
          em: ({ children }) => (
            <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              {children}
            </em>
          )
        }}
      />
      <PrismicRichText field={slice.primary.body} />
      {slice.items.map((item) => (
        <div
          className="glass-container w-fit rounded-lg"
          key={asText(item.title)}
        >
          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.body} />
          <PrismicNextImage field={item.image} />
        </div>
      ))}
    </Bounded>
  );
};

export default Bento;
