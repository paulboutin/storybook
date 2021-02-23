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

## Component modules

Each component includes an executable function that targets _all_ components of the type via class name.

Individual components may be deactivated by simply removing the function call from `main.js`

- **accordion**

  Implements expand/contract logic for accordion component

- **alert**

  Implements logic for closing accordion component via 'x' icon

- **card-carousel**

  Implements logic for article carousel component.

  Includes support for swipe gestures via `lib/swiped-events`

- **comparison**

  Implements logic for comparison table pagination.

- **dropdown**

  Implements logic for custom dropdown selectors.

- **help-center**

  Implements logic for help center article viewer component.

- **input**

  Implements logic for custom inputs.

- **navigation**

  Implements logic for navigation top bar component.

- **popup-video**

  Implements logic for popup-video components (both hero and article cards) via `lib/vimeo-player`

- **product-selector**

  Implements logic for product selector component.

  Includes support for swipe gestures via `lib/swiped-events`

  Requires cross-browser support for smooth scroll behavior, provided by `lib/smoothscroll-polyfill`

- **return-to-top**

  Implements logic for go up arrow component.

  Requires cross-browser support for smooth scroll behavior, provided by `lib/smoothscroll-polyfill`

- **slider**

  Implements logic for pull quote and standard carousel components.

  Includes support for swipe gestures via `lib/swiped-events`

- **third-party link**

  Implements logic for third-party popup. Detects external links via URL host matching.

  Additional safe hosts may be included in the algorithm at compile-time by providing a list to the function call in `main.js`:

  ```js
  thirdPartyLink({
    hosts: ['host1', 'host2']
  })
  ```

  On clicking an external link, page navigation will be interrupted, and a popup will be dynamically generated with a
  new link to the content.
