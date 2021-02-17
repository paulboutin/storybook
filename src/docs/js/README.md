# JavaScript code

Full source code for all interactive components.
The code entrypoint is **main.js**.

## File structure

The code is organized as follows:

- **_components_**: Individual component code
- **_lib_**: Additional third-party code shipped to provide base functionality and browser polyfills.
- **_main.js_**: Script entry point
- **_utils.js_**: Additional helper functions and code included for use in components.

## Compiling

Compiling this code for use in browsers is very simple using `webpack-cli`. No specific configurations are required.

You can read more about this package [here](https://github.com/webpack/webpack-cli/blob/master/packages/webpack-cli/README.md)

To be able to generate a corresponding main.js:

- Ensure `node` v.12 or later is installed with `npm` package manager.
- Run `npm install -g webpack webpack-cli` to install webpack globally.
- Run `webpack --entry ./js/main.js -o ./path/to/output --mode production` to compile production-ready bundle.

A precompiled version is already included in the /bundles folder of this zipfile.
