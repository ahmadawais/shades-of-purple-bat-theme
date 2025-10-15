#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	purple: '\x1b[35m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	cyan: '\x1b[36m',
};

console.log(`${colors.purple}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🦇 Shades of Purple Theme for Bat                      ║
║                                                           ║
║   Installing...                                           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

function getBatConfigDir() {
	try {
		// Try to get bat config directory
		const configDir = execSync('bat --config-dir', { encoding: 'utf8' }).trim();
		return configDir;
	} catch (error) {
		// Fallback to default locations based on OS
		const homeDir = os.homedir();
		const platform = os.platform();

		if (platform === 'win32') {
			return path.join(homeDir, 'AppData', 'Roaming', 'bat');
		} else if (platform === 'darwin') {
			return path.join(homeDir, '.config', 'bat');
		} else {
			return path.join(homeDir, '.config', 'bat');
		}
	}
}

function installTheme() {
	try {
		// Get bat config directory
		const batConfigDir = getBatConfigDir();
		const themesDir = path.join(batConfigDir, 'themes');

		console.log(`${colors.cyan}📂 Bat config directory: ${batConfigDir}${colors.reset}`);

		// Create themes directory if it doesn't exist
		if (!fs.existsSync(themesDir)) {
			fs.mkdirSync(themesDir, { recursive: true });
			console.log(`${colors.green}✓ Created themes directory${colors.reset}`);
		}

		// Copy theme file
		const sourceTheme = path.join(__dirname, '..', 'themes', 'Shades-of-Purple.tmTheme');
		const destTheme = path.join(themesDir, 'Shades-of-Purple.tmTheme');

		if (!fs.existsSync(sourceTheme)) {
			throw new Error('Theme file not found in package');
		}

		fs.copyFileSync(sourceTheme, destTheme);
		console.log(`${colors.green}✓ Theme file copied successfully${colors.reset}`);

		// Rebuild bat cache
		console.log(`${colors.cyan}🔄 Rebuilding bat cache...${colors.reset}`);
		try {
			execSync('bat cache --build', { stdio: 'inherit' });
			console.log(`${colors.green}✓ Cache rebuilt successfully${colors.reset}`);
		} catch (error) {
			console.log(`${colors.yellow}⚠ Could not rebuild cache automatically. Please run: bat cache --build${colors.reset}`);
		}

		console.log(`${colors.purple}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎉 Installation Complete!                              ║
║                                                           ║
║   To use the theme:                                       ║
║   • One-time: bat --theme="Shades-of-Purple" <file>     ║
║   • Permanent: Add to ~/.config/bat/config               ║
║     --theme="Shades-of-Purple"                           ║
║                                                           ║
║   Verify installation:                                    ║
║   • bat --list-themes | grep "Shades-of-Purple"         ║
║                                                           ║
║   💜 Enjoy coding with Shades of Purple!                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

		return true;
	} catch (error) {
		console.error(`${colors.yellow}⚠ Installation failed: ${error.message}${colors.reset}`);
		console.log(`${colors.cyan}
Manual installation:
1. Create directory: mkdir -p "$(bat --config-dir)/themes"
2. Download theme: https://github.com/ahmadawais/shades-of-purple-bat-theme
3. Copy Shades-of-Purple.tmTheme to themes directory
4. Run: bat cache --build
${colors.reset}`);
		return false;
	}
}

// Run installation
installTheme();
