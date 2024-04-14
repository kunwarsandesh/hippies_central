import Bounded from '@/app/components/Bounded';
import ButtonLink from '@/app/components/ButtonLink';
import StarGrid from '@/app/components/StarGrid';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps
} from '@prismicio/react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="md:txt-7xl text-balance text-center text-5xl font-medium">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            className="rounded-lg mt-8"
            field={slice.primary.image}
          />
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
