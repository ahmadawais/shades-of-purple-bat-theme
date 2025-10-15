/**
 * Shades of Purple Theme Demo
 * JavaScript/TypeScript Example
 */

// Import statements
import { useState, useEffect } from 'react';
import axios from 'axios';

// Constants
const API_URL = 'https://api.example.com/data';
const MAX_RETRIES = 3;
const TIMEOUT = 5000;

// Class definition
class ThemeDemo {
	constructor(name, version) {
		this.name = name;
		this.version = version;
		this.isActive = true;
	}

	// Method with template literals
	getInfo() {
		return `Theme: ${this.name} v${this.version}`;
	}

	// Async method
	async fetchData() {
		try {
			const response = await axios.get(API_URL, { timeout: TIMEOUT });
			return response.data;
		} catch (error) {
			console.error('Error fetching data:', error);
			throw new Error('Failed to fetch data');
		}
	}
}

// Arrow function
const calculateTotal = (items) => {
	return items.reduce((sum, item) => sum + item.price, 0);
};

// Function with various syntax elements
function processData(data, options = {}) {
	const { filter = true, sort = 'asc' } = options;

	// Conditional logic
	if (!data || data.length === 0) {
		return [];
	}

	// Array methods and chaining
	let result = data
		.filter(item => filter ? item.active : true)
		.map(item => ({
			...item,
			processed: true,
			timestamp: Date.now()
		}))
		.sort((a, b) => {
			return sort === 'asc' ? a.value - b.value : b.value - a.value;
		});

	return result;
}

// Regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b/;

// Object with various properties
const config = {
	name: 'Shades of Purple',
	colors: {
		primary: '#FAD000',
		secondary: '#B362FF',
		success: '#A5FF90',
		error: '#EC3A37',
		warning: '#FF9D00',
	},
	features: ['syntax-highlighting', 'git-integration', 'line-numbers'],
	enabled: true,
	version: 1.0,
	metadata: null,
};

// Modern JavaScript features
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Promises and async/await
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runDemo() {
	console.log('Starting Shades of Purple theme demo...');

	const demo = new ThemeDemo('Shades of Purple', '1.0.0');
	console.log(demo.getInfo());

	try {
		await delay(1000);
		const data = await demo.fetchData();
		const processed = processData(data, { filter: true, sort: 'desc' });
		console.log('Processed data:', processed);
	} catch (error) {
		console.error('Demo failed:', error.message);
	} finally {
		console.log('Demo complete!');
	}
}

// Export
export { ThemeDemo, processData, calculateTotal };
export default runDemo;
