/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { usePrefix } from '../../internal/usePrefix';
import {
  ErrorFilled,
  CheckmarkFilled,
  WarningAltFilled,
  WarningAltInvertedFilled,
  UndefinedFilled,
  InProgress,
  Incomplete,
  CircleDash,
  UnknownFilled,
  WarningSquareFilled,
  CheckmarkOutline,
  PendingFilled,
} from '@carbon/icons-react';

const IconIndicatorKinds = [
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
];

const iconTypes = {
  error: ErrorFilled,
  ['caution-major']: WarningAltInvertedFilled,
  ['caution-minor']: WarningAltFilled,
  undefined: UndefinedFilled,
  succeeded: CheckmarkFilled,
  normal: CheckmarkOutline,
  ['in-progress']: InProgress,
  incomplete: Incomplete,
  ['not-started']: CircleDash,
  pending: PendingFilled,
  unknown: UnknownFilled,
  information: WarningSquareFilled,
};

export type IconIndicatorKind = (typeof IconIndicatorKinds)[number];

interface IconIndicatorProps {
  /**
   * Specify the type of icon to be used
   */
  kind?: IconIndicatorKind;

  /**
   * Label next to the icon
   */
  label: string;

  /**
   * Specify the size of the Icon Indicator. Currently supports either 16 (default) or 20 sizes.
   */
  size?: number;
}

const IconIndicator = ({
  kind = 'error',
  label,
  size = 16,
}: IconIndicatorProps) => {
  const prefix = usePrefix();
  const className = cx({
    [`${prefix}--icon-indicator`]: true,
    [`${prefix}--icon-indicator--20`]: size == 20,
  });

  const IconForKind = iconTypes[kind];
  if (!IconForKind) {
    return null;
  }
  return (
    <div className={className}>
      <IconForKind
        size={size}
        className={`${prefix}--icon-indicator--${kind}`}
      />
      {label}
    </div>
  );
};

IconIndicator.propTypes = {
  /**
   * Specify the type of the Icon Indicator
   */
  kind: PropTypes.oneOf(IconIndicatorKinds),

  /**
   * Label next to the icon.
   */
  label: PropTypes.string.isRequired,

  /**
   * Specify the size of the Icon Indicator. Currently supports either 16 (default) or 20  sizes
   */
  size: PropTypes.oneOf([16, 20]),
};

export default IconIndicator;
