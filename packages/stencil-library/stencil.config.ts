import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'tommyzki',
  plugins: [
    sass({
      //injectGlobalPaths: ['src/global/scss/utils.scss'], // adds @import 'src/global/scss/utils.scss' statement
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    angularOutputTarget({
      componentCorePackage: '@tommyzki/ui-core',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@tommyzki/ui-core',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@tommyzki/ui-core',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
