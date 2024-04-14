import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for case_studies (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CaseStudies;
