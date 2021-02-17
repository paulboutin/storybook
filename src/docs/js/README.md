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

Compiling this code for use in browsers is very simple using `webpack`. No specific configurations are required.

Simply run to generate a corresponding main.js:

`webpack --entry ./js/main.js -o ./bundles --mode production`

A precompiled version is already included in the /bundles folder of this zipfile.
