import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../src/App/components/Advertisement/stories');
}

configure(loadStories, module);
