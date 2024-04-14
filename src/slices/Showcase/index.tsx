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
      <div className="mt-16 grid items-center rounded-xl border border-indigo-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
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
