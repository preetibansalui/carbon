/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');

module.exports = {
  ruleArchive: 'versioned',
  policies: ['Custom_Ruleset'],
  failLevels: ['violation'],
  reportLevels: !process.env.CI
    ? ['violation']
    : [
        'violation',
        'potentialviolation',
        'recommendation',
        'potentialrecommendation',
        'manual',
      ],
  outputFormat: ['json'],
  outputFolder: path.join('.avt', 'reports'),
  baselineFolder: path.join('.avt', 'baseline'),
};
