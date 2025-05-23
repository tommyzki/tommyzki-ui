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
      componentCorePackage: '@tommyzki/ui-core',
      outputType: 'component',
      directivesProxyFile: '../../packages/angular/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../../packages/angular/libs/stencil-wrapper/src/lib/index.ts',
    }),
    reactOutputTarget({
      outDir: '../react/lib/components/stencil-generated/',
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
};