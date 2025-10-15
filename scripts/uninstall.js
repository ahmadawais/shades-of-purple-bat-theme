#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	purple: '\x1b[35m',
	yellow: '\x1b[33m',
	cyan: '\x1b[36m',
};

console.log(`${colors.purple}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🦇 Shades of Purple Theme for Bat                      ║
║                                                           ║
║   Uninstalling...                                         ║
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

function uninstallTheme() {
	try {
		// Get bat config directory
		const batConfigDir = getBatConfigDir();
		const themesDir = path.join(batConfigDir, 'themes');
		const themeFile = path.join(themesDir, 'Shades-of-Purple.tmTheme');

		console.log(`${colors.cyan}📂 Bat config directory: ${batConfigDir}${colors.reset}`);

		// Remove theme file if it exists
		if (fs.existsSync(themeFile)) {
			fs.unlinkSync(themeFile);
			console.log(`${colors.yellow}✓ Theme file removed${colors.reset}`);

			// Rebuild bat cache
			console.log(`${colors.cyan}🔄 Rebuilding bat cache...${colors.reset}`);
			try {
				execSync('bat cache --build', { stdio: 'inherit' });
				console.log(`${colors.yellow}✓ Cache rebuilt successfully${colors.reset}`);
			} catch (error) {
				console.log(`${colors.yellow}⚠ Could not rebuild cache automatically. Please run: bat cache --build${colors.reset}`);
			}
		} else {
			console.log(`${colors.yellow}⚠ Theme file not found. May have been already removed.${colors.reset}`);
		}

		console.log(`${colors.purple}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   👋 Uninstallation Complete!                            ║
║                                                           ║
║   The Shades of Purple theme has been removed from bat.  ║
║                                                           ║
║   We're sad to see you go! 💜                            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

		return true;
	} catch (error) {
		console.error(`${colors.yellow}⚠ Uninstallation failed: ${error.message}${colors.reset}`);
		console.log(`${colors.cyan}
Manual uninstallation:
1. Remove theme file: rm "$(bat --config-dir)/themes/Shades-of-Purple.tmTheme"
2. Run: bat cache --build
${colors.reset}`);
		return false;
	}
}

// Run uninstallation
uninstallTheme();
