# Contributing to Shades of Purple for Bat

Thank you for considering contributing to Shades of Purple for bat! This document outlines the guidelines for contributing to this project.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Your bat version (`bat --version`)
- Your operating system
- Screenshots if applicable

### Suggesting Enhancements

Enhancement suggestions are welcome! Please open an issue with:

- A clear and descriptive title
- Detailed description of the proposed enhancement
- Why this enhancement would be useful
- Examples of how it would work

### Color Adjustments

If you'd like to suggest color changes:

1. Open an issue first to discuss the proposed changes
2. Explain which colors you'd like to change and why
3. Provide hex color codes for the proposed changes
4. Include screenshots or examples if possible

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes with a descriptive commit message
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

#### Pull Request Guidelines

- Keep changes focused and atomic
- Update documentation if needed
- Test the theme with multiple file types
- Run `bat cache --build` to verify the theme compiles
- Include screenshots showing the changes

### Testing Your Changes

After making changes to the theme:

```bash
# Copy your modified theme to bat's themes directory
cp themes/Shades-of-Purple.tmTheme "$(bat --config-dir)/themes/"

# Rebuild the cache
bat cache --build

# Test with various file types
bat --theme="Shades-of-Purple" demo.js
bat --theme="Shades-of-Purple" demo.py
bat --theme="Shades-of-Purple" demo.md
```

## Theme File Structure

The theme is defined in `themes/Shades-of-Purple.tmTheme`, which follows the TextMate theme format (`.tmTheme`).

### Key Sections

- **Global settings**: Background, foreground, caret, selection colors
- **Scope-specific settings**: Colors for different syntax elements

### Color Palette

When making changes, please maintain consistency with the Shades of Purple color palette:

- Background: `#2D2B55`
- Foreground: `#FFFFFF`
- Comments: `#B362FF`
- Strings: `#A5FF90`
- Keywords: `#FF9D00`
- Functions: `#FF9D00`
- Constants: `#FF628C`
- Variables: `#E1EFFF`
- Support: `#80FFBB`

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for your contributions! 💜
