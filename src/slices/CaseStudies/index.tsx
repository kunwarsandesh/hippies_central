import Bounded from '@/app/components/Bounded';
import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps
} from '@prismicio/react';
import clsx from 'clsx';

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async ({
  slice
}: CaseStudiesProps): Promise<JSX.Element> => {
  const client = createClient();

  const CaseStudies = await Promise.all(
    slice.items.map(async (item) => {
      if (isFilled.contentRelationship(item.case_study)) {
        return await client.getByID<Content.CaseStudyDocument>(
          item.case_study.id
        );
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="h2 max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </div>
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="mt-20 grid gap-16">
        {CaseStudies.map((caseStudy, index) => {
          if (caseStudy) {
            return (
              <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center">
                  <h3 className="text-4xl">
                    <PrismicText field={caseStudy.data.company} />
                  </h3>
                  <div className="max-w-md">
                    <PrismicRichText field={caseStudy.data.description} />
                  </div>

                  <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={caseStudy.data.company} />
                    &apos;s case study
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={caseStudy.data.logo_image}
                  alt=""
                  fallback="Logo"
                  quality={100}
                  className={clsx(
                    'rounded-xl lg:col-span-2',
                    index % 2 && 'md:-order-1'
                  )}
                />
              </div>
            );
          }
        })}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
