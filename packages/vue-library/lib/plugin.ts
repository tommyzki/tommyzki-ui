import { Plugin } from 'vue';
import { defineCustomElements } from '@tommyzki/ui-core/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
