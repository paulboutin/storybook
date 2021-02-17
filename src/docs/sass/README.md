# SCSS Code

In this folder you will find the full source code for the SCSS stylesheets.
The entrypoint for the code is **_main.scss_**.

## File structure

The code is organized as follows:

- **_abstracts_**: Project variables, mixins and functions are found here
- **_base_**: Base stylesheets for global components: css reset, fonts, typography
- **_components_**: Stylesheets for base components, organized per component
- **_layout_**: Stylesheets for layout components, organized per component
- **_lib_**: Third-party stylesheets used for iconography, bootstrap grid, hamburgers
- **_pages_**: Stylesheets for complete page templates
- **_stories_**: Additional stylesheets used for storybook. Provided as reference, but is _NOT_ included in the default bundle.
- **_utils_**: Additional stylesheets for utility classes: image ratios, shadows, typography
- **_main.scss_**: Stylesheet entrypoint. Does not bundle storybook specific scss.

## Compiling

Compiling this code for use in browsers is very simple using `sass`. No specific configurations are required.

You can read more about this package [here](https://github.com/sass/sass)

To be able to generate a corresponding bundle.css:

- Ensure `node` v.12 or later is installed with `npm` package manager.
- Run `npm install -g sass` to install webpack globally.
- Run `sass sass/main.scss path/to/output/bundle.css --style compressed --no-source-map` to compile production-ready bundle.

A precompiled version is already included in the /bundles folder of this zipfile.
