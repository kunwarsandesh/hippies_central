import Bounded from '@/app/components/Bounded';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {children}
            </h2>
          )
        }}
      />
      <div className="grid">
        <div>
          <>{slice.primary.icon}</>
          <PrismicRichText field={slice.primary.subheading} />
          <PrismicRichText field={slice.primary.body} />
          <PrismicNextLink field={slice.primary.button_link}>
            {slice.primary.button_text}
          </PrismicNextLink>
        </div>
        <PrismicNextImage field={slice.primary.image} />4
      </div>
    </Bounded>
  );
};

export default Showcase;
