# Vite Tailwind Theme Plugin

A Vite plugin for compiling custom Tailwind CSS configurations for different themes.

With this plugin, you can easily switch between light and dark mode, or any other custom theme, by loading different Tailwind CSS configurations. The plugin uses the `tailwindcss` library to compile the custom configuration, and the `autoprefixer` library to add vendor prefixes to CSS rules where necessary.

## Installation

To use this plugin, you need to have a Vite project and the necessary dependencies installed:

```bash
npm install --save-dev tailwindcss autoprefixer
```

Then, you can install the plugin:

```bash
npm install --save-dev vite-tailwind-theme-plugin
```

## Usage

To use the plugin, add it to your Vite config file:

```js
// vite.config.js
import tailwindPlugin from "@tiarebalbi/plugin-tailwind-themes";

export default {
  plugins: [
    [
      tailwindPlugin,
      {
        config: require(`./tailwind.config.${process.env.THEME}.js`),
      },
    ],
  ],
};
```

In this example, the theme is determined based on the THEME environment variable, and the corresponding configuration file is loaded dynamically. You can create multiple Tailwind CSS configuration files (e.g. tailwind.config.light.js and tailwind.config.dark.js) and switch between them based on the value of THEME.

# Contributing

If you would like to contribute to this project, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# License

This project is licensed under the [MIT License](LICENSE.md).
