
# Themeify

![Themeify](https://i.postimg.cc/RZQ88hT6/themeify.png)

[![npm version](https://img.shields.io/npm/v/themeify?color=blue&label=npm%20version&logo=npm)](https://www.npmjs.com/package/themeify)[![downloads](https://img.shields.io/npm/dt/themeify?color=green&label=downloads&logo=npm)](https://www.npmjs.com/package/themeify)[![license](https://img.shields.io/npm/l/themeify?color=orange&label=license)](#license)[![issues](https://img.shields.io/github/issues/J3rry320/themeify?label=issues&logo=github)](https://github.com/J3rry320/themeify/issues)
[![stars](https://img.shields.io/github/stars/J3rry320/themeify?color=brightgreen&label=stars&logo=github)](https://github.com/J3rry320/themeify/stargazers)[![contributors](https://img.shields.io/github/contributors/J3rry320/themeify?label=contributors&logo=github)](https://github.com/J3rry320/themeify/graphs/contributors)[![last commit](https://img.shields.io/github/last-commit/J3rry320/themeify?color=yellow&label=last%20commit&logo=git)](https://github.com/J3rry320/themeify/commits/main)




`Themeify` is a CLI tool designed to effortlessly apply themes to React and Next.js projects. With support for popular UI frameworks like MUI, Tailwind, ShadCN, and Bootstrap, Themeify ensures your projects always look stunning and cohesive.

## Installation

Install the package globally using **npm**, **yarn**, or **npx**:

### Using npm


```bash
npm install -g themeify
```

### Using yarn



```bash
yarn global add themeify
```

### Using npx (no installation required)



```bash
npx themeify
```

## Example Usage

Applying a custom theme to a React project using Tailwind CSS:



```bash
themeify apply --path ./my-react-app --framework Tailwind --theme vibrantPastel --palette vibrant --font Poppins
```

Run the tool interactively for a guided setup:



```bash
themeify apply
```
During the interactive prompt, you will be able to choose the framework, theme (which can be chosen as "None"). If the theme is "None," you can then select the palette and font to generate the CSS or JS theme configuration files.

**Note**: If no options are provided to the `apply` command, the tool will prompt you to choose from all the options. However, providing options to the `apply` command will take precedence over the prompts. 

## Features

-   **Apply Themes:** Quickly apply predefined or custom themes to your React and Next.js projects.
    
-   **Preview Themes:** Preview themes using a specified color palette or theme to see how it looks before applying.
    
-   **List Palettes and Themes:** List all available palettes and themes for easy selection.
    
-   **Cleanup:** Remove generated files to keep your project directory clean and organized.
    

## Usage

### General Commands

-   **Apply Theme**
    



```bash
themeify apply --path <path> --framework <framework> --theme <theme> --palette <palette> --font <font>
```

Options:

-   `--path <path>`: Path to your project (default: current working directory).
    
-   `--framework <framework>`: UI framework (e.g., MUI, Tailwind, ShadCN, Bootstrap).
    
-   `--theme <theme>`: Theme name.
    
-   `--palette <palette>`: Color palette name.
    
-   `--font <font>`: Font name.
    

Interactive mode (no options):



```bash
themeify apply
```

-   **Preview Theme**
    



```bash
themeify preview --paletteName <name> --themeName <name>
```

Options:

-   `-p, --paletteName <name>`: Palette name.
    
-   `-t, --themeName <name>`: Theme name.
    
-   `-l, --list`: List all palettes and themes.

- **Note:** Only one option, either `paletteName` or `themeName`, can be provided individually. You cannot use both options together. If provided together themeName will take precedence 
    
-   **List Palettes and Themes**
    



```bash
themeify preview --list
```

-   **Cleanup**
    



```bash
themeify cleanup --directory <path>
```

Options:

-   `--directory <path>`: Directory to clean up.
    

## Motivation

The motivation behind `Themeify` is to simplify the process of applying and managing themes in React and Next.js projects. Designing a cohesive and visually appealing UI can be time-consuming, and this tool aims to streamline that process, enabling developers to focus more on building features rather than tweaking styles.


## Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/J3rry320/themeify/pulls).

----------

## Issues

If you encounter any issues or have suggestions for improvements, please report them on the [GitHub Issues page](https://github.com/J3rry320/themeify/issues). Your feedback is invaluable in helping improve `Themeify`.

----------

## Hire Me

If you like my work and want to collaborate or have any projects in mind, feel free to reach out!

[LinkedIn Profile](https://www.linkedin.com/in/jerrythejsguy/)

----------

## License

This project is licensed under the MIT License. See the [LICENSE file](https://github.com/J3rry320/themeify/blob/main/LICENSE) for details.