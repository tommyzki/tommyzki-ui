import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'tommyzki-ui',
  plugins: [sass()],
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
      componentCorePackage: '@tommyzki-ui/core',
      outputType: 'component',
      directivesProxyFile: '../../packages/angular/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@tommyzki-ui/core',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
};