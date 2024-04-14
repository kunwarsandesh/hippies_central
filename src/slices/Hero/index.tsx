import Bounded from '@/app/components/Bounded';
import ButtonLink from '@/app/components/ButtonLink';
import StarGrid from '@/app/components/StarGrid';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

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
    >
      <div className="relative">
        <StarGrid />
        <PrismicRichText field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.body} />
        <ButtonLink field={slice.primary.button_link}>
          {slice.primary.button_label}
        </ButtonLink>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </Bounded>
  );
};

export default Hero;
