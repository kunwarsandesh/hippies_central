import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices
} from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';

export default function SliceSimulatorPage({
  searchParams
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state);

  return (
    <SliceSimulator background="#070815">
      {' '}
      {/* Note the use of curly braces to pass the background color as a prop */}
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
