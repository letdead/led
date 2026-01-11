# LED Panels Product Showcase

A modern, Apple-inspired React website for displaying LED panel products with multiple sizes and specifications.

## Features

- 🎨 **Apple-inspired Design** - Clean, minimalist UI with smooth animations
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🔍 **Search & Filter** - Find products by name, size, or category
- 💡 **Product Details** - Beautiful modal views with full specifications
- ⚡ **Fast Performance** - Built with Vite for optimal loading times
- 🎯 **Modern React** - Uses React 18 with hooks and best practices

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ProductsSection.jsx  # Products grid and filters
│   ├── ProductCard.jsx # Individual product card
│   ├── ProductModal.jsx # Product detail modal
│   └── Footer.jsx      # Footer component
├── data/
│   └── products.js     # Product data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React** 18.2.0
- **Vite** 5.0.8
- **CSS3** with custom properties
- **Modern JavaScript (ES6+)**

## Product Data

The website includes 8 different LED panel products with various sizes:
- 6" × 6" Compact panels
- 12" × 12" Standard panels
- 18" × 18" Slim panels
- 24" × 24" Professional panels
- 36" × 36" Commercial panels
- 24" × 48" Rectangular panels
- Circular and Smart panels

Each product includes detailed specifications like wattage, lumens, color temperature, and features.

## Customization

To modify products, edit `src/data/products.js`. The component styles can be customized by editing the CSS files in the `components/` directory.

