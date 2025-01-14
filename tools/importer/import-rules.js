/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable comma-dangle */

/**
 * The import rules object defines elements that can be removed (cleanup) from the source
 * document and elements that should be transformed into blocks.
 */
const importRules = {
  root: 'div.container-fluid.mainContent',
  cleanup: {
    start: [
      'style',
      'source',
      'script',
      'noscript',
      'iframe',
      'link',
      '.navbar',
      'footer#site-footer'
    ],
    end: []
  },
  blocks: [
    {
      type: 'metadata',
      insertMode: 'append'
    },
    {
      type: 'ai-columns',
      selectors: [
        'body > div.mainContent'
      ]
    },
    {
      type: 'ai-nav',
      selectors: [
        'nav.navbar'
      ]
    },
    {
      type: 'ai-columns1',
      selectors: [
        '.mainContent'
      ]
    },
    {
      type: 'ai-default1',
      selectors: [
        'nav.navbar'
      ]
    }
  ],
  transformers: []
};

export default importRules;
