import { Content, asText } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
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
    </section>
  );
};

export default Bento;
