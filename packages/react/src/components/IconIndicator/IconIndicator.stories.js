/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import IconIndicator from '.';

export default {
  title: 'Components/IconIndicator',
  component: IconIndicator,
};

export const Default = () => <IconIndicator />;

const PlaygroundStory = (props) => {
  return <IconIndicator {...props} />;
};

export const Playground = PlaygroundStory.bind({});

Playground.args = {
  label: 'Custom label',
  kind: 'error',
};

Playground.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
  kind: {
    control: {
      type: 'select',
    },
    options: [
      'error',
      'caution-major',
      'caution-minor',
      'undefined',
      'succeeded',
      'normal',
      'in-progress',
      'incomplete',
      'not-started',
      'pending',
      'unknown',
      'information',
    ],
  },
  size: {
    control: {
      type: 'select',
    },
    options: [16, 20],
  },
};
