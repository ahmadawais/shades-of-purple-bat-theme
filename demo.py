"""
Shades of Purple Theme Demo
Python Example
"""

import json
import asyncio
from typing import List, Dict, Optional
from dataclasses import dataclass
from datetime import datetime


# Constants
API_URL = "https://api.example.com/data"
MAX_RETRIES = 3
TIMEOUT = 5000


@dataclass
class Theme:
    """Theme configuration dataclass"""
    name: str
    version: str
    colors: Dict[str, str]
    is_active: bool = True

    def get_info(self) -> str:
        """Return theme information"""
        return f"Theme: {self.name} v{self.version}"


class ThemeManager:
    """Manages theme configurations"""

    def __init__(self, config: Dict):
        self.config = config
        self.themes: List[Theme] = []
        self._initialized = False

    async def fetch_data(self, url: str) -> Optional[Dict]:
        """Fetch data from API"""
        try:
            # Simulated async API call
            await asyncio.sleep(1)
            return {"status": "success", "data": []}
        except Exception as error:
            print(f"Error fetching data: {error}")
            return None

    def process_data(self, data: List[Dict], filter_active: bool = True) -> List[Dict]:
        """Process and filter data"""
        if not data:
            return []

        # List comprehension with filtering
        result = [
            {**item, "processed": True, "timestamp": datetime.now().isoformat()}
            for item in data
            if not filter_active or item.get("active", False)
        ]

        return sorted(result, key=lambda x: x.get("value", 0), reverse=True)


# Function with various syntax elements
def calculate_total(items: List[Dict], tax_rate: float = 0.1) -> float:
    """Calculate total with tax"""
    subtotal = sum(item.get("price", 0) for item in items)
    tax = subtotal * tax_rate
    return subtotal + tax


# Dictionary with configuration
config = {
    "name": "Shades of Purple",
    "colors": {
        "primary": "#FAD000",
        "secondary": "#B362FF",
        "success": "#A5FF90",
        "error": "#EC3A37",
        "warning": "#FF9D00",
    },
    "features": ["syntax-highlighting", "git-integration", "line-numbers"],
    "enabled": True,
    "version": 1.0,
    "metadata": None,
}


# Lambda functions
double = lambda x: x * 2
is_even = lambda x: x % 2 == 0
get_name = lambda obj: obj.get("name", "Unknown")


# Regex pattern
import re
email_pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
url_pattern = r"https?://(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b"


# Decorator
def timing_decorator(func):
    """Decorator to measure function execution time"""
    async def wrapper(*args, **kwargs):
        start = datetime.now()
        result = await func(*args, **kwargs)
        duration = (datetime.now() - start).total_seconds()
        print(f"{func.__name__} took {duration:.2f} seconds")
        return result
    return wrapper


@timing_decorator
async def run_demo():
    """Run the theme demo"""
    print("Starting Shades of Purple theme demo...")

    # Create theme instance
    theme = Theme(
        name="Shades of Purple",
        version="1.0.0",
        colors=config["colors"]
    )
    print(theme.get_info())

    # Initialize manager
    manager = ThemeManager(config)

    try:
        # Fetch and process data
        data = await manager.fetch_data(API_URL)
        if data:
            processed = manager.process_data(data.get("data", []))
            print(f"Processed {len(processed)} items")

        # Calculate totals
        items = [{"price": 10.99}, {"price": 24.50}, {"price": 5.25}]
        total = calculate_total(items, tax_rate=0.08)
        print(f"Total with tax: ${total:.2f}")

    except Exception as error:
        print(f"Demo failed: {error}")
    finally:
        print("Demo complete!")


# Main execution
if __name__ == "__main__":
    asyncio.run(run_demo())
