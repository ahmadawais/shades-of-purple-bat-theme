# Shades of Purple Theme for Bat

> A professional theme with hand-picked & bold shades of purple for [bat](https://github.com/sharkdp/bat) — A cat clone with wings.

[![Version](https://img.shields.io/github/v/release/ahmadawais/shades-of-purple-bat-theme?style=flat-square)](https://github.com/ahmadawais/shades-of-purple-bat-theme/releases)
[![npm version](https://img.shields.io/npm/v/shades-of-purple-bat-theme?style=flat-square)](https://www.npmjs.com/package/shades-of-purple-bat-theme)
[![License](https://img.shields.io/github/license/ahmadawais/shades-of-purple-bat-theme?style=flat-square)](https://github.com/ahmadawais/shades-of-purple-bat-theme/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/shades-of-purple-bat-theme?style=flat-square)](https://www.npmjs.com/package/shades-of-purple-bat-theme)

## What is Bat?

[Bat](https://github.com/sharkdp/bat) is a cat clone with syntax highlighting and Git integration. It's a modern replacement for the traditional `cat` command with beautiful syntax highlighting.

## What is Shades of Purple?

Shades of Purple is a professional theme suite carefully designed with hand-picked, bold shades of purple for your development environment. It's been used by over 5 million developers across various editors and tools.

## Installation

### NPM Installation (Recommended)

The easiest way to install the theme is via npm:

```bash
npm install -g shades-of-purple-bat-theme
```

The theme will be automatically installed and the bat cache will be rebuilt. That's it! 🎉

**Alternative package managers:**

```bash
# Using yarn
yarn global add shades-of-purple-bat-theme

# Using pnpm
pnpm add -g shades-of-purple-bat-theme
```

### Automatic Installation (cURL)

```bash
# Create the themes directory if it doesn't exist
mkdir -p "$(bat --config-dir)/themes"

# Download the theme
curl -L https://raw.githubusercontent.com/ahmadawais/shades-of-purple-bat-theme/main/themes/Shades-of-Purple.tmTheme -o "$(bat --config-dir)/themes/Shades-of-Purple.tmTheme"

# Rebuild bat's cache
bat cache --build
```

### Manual Installation

1. **Create the themes directory:**

```bash
mkdir -p "$(bat --config-dir)/themes"
cd "$(bat --config-dir)/themes"
```

2. **Download the theme file:**

Download `Shades-of-Purple.tmTheme` from this repository and place it in your bat themes directory.

3. **Rebuild the cache:**

```bash
bat cache --build
```

4. **Verify installation:**

```bash
bat --list-themes | grep "Shades-of-Purple"
```

You should see `Shades-of-Purple` in the list of available themes.

## Usage

### One-Time Use

Use the theme for a single command:

```bash
bat --theme="Shades-of-Purple" myfile.js
```

### Permanent Configuration

Set Shades of Purple as your default theme by adding this to your bat configuration file:

**Location:** `~/.config/bat/config` (Linux/macOS) or `%APPDATA%\bat\config` (Windows)

```bash
# Set the theme to Shades of Purple
--theme="Shades-of-Purple"
```

### Environment Variable

Alternatively, set the `BAT_THEME` environment variable:

```bash
# Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
export BAT_THEME="Shades-of-Purple"
```

## Color Palette

The theme features carefully selected colors:

- **Background:** `#2D2B55` - Deep purple background
- **Foreground:** `#FFFFFF` - Crisp white text
- **Comments:** `#B362FF` - Bright purple
- **Strings:** `#A5FF90` - Fresh green
- **Keywords:** `#FF9D00` - Warm orange
- **Functions:** `#FF9D00` - Warm orange
- **Constants:** `#FF628C` - Bold pink
- **Variables:** `#E1EFFF` - Light blue
- **Support:** `#80FFBB` - Mint green
- **Cursor:** `#FAD000` - Bright yellow

## Features

- Hand-picked, bold shades of purple
- Excellent color contrast for readability
- Optimized for long coding sessions
- Consistent with other Shades of Purple themes
- Supports all major programming languages
- Beautiful markdown rendering

## Theme Family

Shades of Purple is available for:

- [VS Code](https://github.com/ahmadawais/shades-of-purple-vscode)
- [iTerm2](https://github.com/ahmadawais/Shades-of-Purple-iTerm2)
- [Hyper Terminal](https://github.com/ahmadawais/Shades-of-Purple-Hyper)
- [Alfred](https://github.com/ahmadawais/shades-of-purple-alfred)
- [Slack](https://github.com/ahmadawais/shades-of-purple-slack)
- [bat](https://github.com/ahmadawais/shades-of-purple-bat-theme) (this theme!)

## Troubleshooting

### Theme not showing up?

1. Make sure you've run `bat cache --build` after adding the theme
2. Check the theme is in the correct directory: `$(bat --config-dir)/themes/`
3. Verify the filename is correct: `Shades-of-Purple.tmTheme`

### Colors not displaying correctly?

Make sure your terminal supports true color (24-bit color). Most modern terminals do, but you may need to set:

```bash
export COLORTERM=truecolor
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Changelog

### Version 1.0.0 (2025-01-14)

- Initial release
- Complete syntax highlighting support
- Hand-picked purple color scheme
- Support for all major languages

## License

MIT © [Ahmad Awais](https://ahmadawais.com/)

## Author

**Ahmad Awais** — [Follow @MrAhmadAwais on Twitter](https://twitter.com/MrAhmadAwais)

## Credits

- Built for [bat](https://github.com/sharkdp/bat) by [David Peter](https://github.com/sharkdp)
- Part of the [Shades of Purple](https://shadesofpurple.pro/) theme family

---

<div align="center">
<strong>🦇 Enjoy coding with Shades of Purple! 🦄</strong>
</div>
