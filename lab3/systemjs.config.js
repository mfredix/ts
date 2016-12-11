/**
 * SystemJS configuration
 */
(function (global) {
  System.config({
    paths: {
      // convenient path alias if you want to add a third party lib
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // root
      app: 'app'
    },
    //
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
