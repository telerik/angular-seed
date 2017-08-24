import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'hammerjs/hammer.min.js', inject: 'libs'},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      {src: `node_modules/@progress/kendo-theme-default/dist/all.css`, inject: true, vendor: true},
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      {'node_modules/pako/dist/pako_deflate.js': [ 'deflate' ]},
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    // const additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    // Add Kendo UI for Angular packages
    let progressPackages: ExtendPackages[] = [
      'kendo-angular-buttons',
      'kendo-angular-charts',
      'kendo-angular-dateinputs',
      'kendo-angular-dialog',
      'kendo-angular-dropdowns',
      'kendo-angular-excel-export',
      'kendo-angular-grid',
      'kendo-angular-inputs',
      'kendo-angular-intl',
      'kendo-angular-l10n',
      'kendo-angular-label',
      'kendo-angular-layout',
      'kendo-angular-pdf-export',
      'kendo-angular-popup',
      'kendo-angular-resize-sensor',
      'kendo-angular-scrollview',
      'kendo-angular-sortable',
      'kendo-angular-upload',
      'kendo-charts',
      'kendo-data-query',
      'kendo-date-math',
      'kendo-drawing',
      'kendo-file-saver',
      'kendo-ooxml',
      'kendo-popup-common'
    ].map((name) => ({
      name: `@progress/${name}`,
      path: `node_modules/@progress/${name}`,
      packageMeta: {
        main: `dist/npm/main.js`,
        defaultExtension: 'js'
      }
    }));

    let telerikPackages: ExtendPackages[] = [
      'kendo-draggable',
      'kendo-dropdowns-common',
      'kendo-inputs-common',
      'kendo-intl'
    ].map((name) => ({
      name: `@telerik/${name}`,
      path: `node_modules/@telerik/${name}`,
      packageMeta: {
        main: `dist/npm/main.js`,
        defaultExtension: 'js'
      }
    }));

    let additionalPackages: ExtendPackages[] = [...progressPackages, ...telerikPackages];

    this.addPackagesBundles(additionalPackages);

    this.addPackagesBundles([{
      name: 'jszip',
      path: 'node_modules/jszip',
      packageMeta: {
        main: `dist/jszip.js`,
        defaultExtension: 'js'
      }
    }]);

    this.addPackagesBundles([{
      name: 'tslib',
      path: 'node_modules/tslib',
      packageMeta: {
        main: `tslib.js`,
        defaultExtension: 'js'
      }
    }]);

    this.addPackagesBundles([{
      name: 'pako',
      path: 'node_modules/pako',
      packageMeta: {
        main: `index.js`,
        defaultExtension: 'js'
      }
    }]);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
