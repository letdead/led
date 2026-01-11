# Architecture Documentation

## Project Structure

This React application follows clean architecture principles with modular, scalable, and maintainable code organization.

```
src/
├── components/          # React components organized by feature/type
│   ├── features/        # Feature-specific components
│   │   ├── Hero/
│   │   ├── ProductsSection/
│   │   ├── SearchBar/
│   │   └── CategoryFilter/
│   ├── layout/          # Layout components
│   │   ├── Header/
│   │   └── Footer/
│   ├── product/         # Product-related components
│   │   ├── ProductCard/
│   │   └── ProductModal/
│   └── ui/              # Reusable UI components
│       ├── Button/
│       ├── Input/
│       └── Badge/
├── constants/           # All constant values
│   └── index.js        # Centralized configuration
├── hooks/               # Custom React hooks
│   ├── useProducts.js
│   ├── useModal.js
│   └── useScroll.js
├── utils/               # Utility functions
│   ├── helpers.js
│   └── constants.js
├── data/                # Data layer
│   └── products.js
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Design Principles

### 1. **Single Responsibility Principle (SRP)**
- Each component has one clear purpose
- Business logic separated into custom hooks
- UI components are pure and reusable

### 2. **DRY (Don't Repeat Yourself)**
- Reusable UI components (Button, Input, Badge)
- Centralized constants in `src/constants/index.js`
- Utility functions for common operations

### 3. **Separation of Concerns**
- **Presentation**: Components only handle UI rendering
- **Business Logic**: Custom hooks manage state and logic
- **Data**: Separate data layer
- **Configuration**: All constants in one place

### 4. **Modularity**
- Components organized by domain/feature
- Each component in its own directory with CSS
- Easy to locate, modify, and test

## Key Features

### Constants Management
**No hardcoded values** - All constants are centralized in `src/constants/index.js`:
- UI text labels and messages
- Section IDs
- Configuration values
- Theme settings
- Animation delays
- Icon dimensions

### Custom Hooks
- `useProducts`: Manages product filtering and search
- `useModal`: Handles modal state and keyboard events
- `useScroll`: Tracks scroll position

### Component Organization
- **Layout**: Header, Footer (site-wide structure)
- **Features**: Hero, ProductsSection, SearchBar, CategoryFilter (feature-specific)
- **Product**: ProductCard, ProductModal (product domain)
- **UI**: Button, Input, Badge (reusable primitives)

## Usage Examples

### Adding a New Constant
All constants must be added to `src/constants/index.js`:

```javascript
export const UI_TEXT = {
  NEW_SECTION: {
    TITLE: "My New Section",
    SUBTITLE: "Description here"
  }
};
```

### Using Constants
```javascript
import { UI_TEXT } from '../../../constants';

const MyComponent = () => (
  <h1>{UI_TEXT.NEW_SECTION.TITLE}</h1>
);
```

### Adding a New Component
1. Create component directory: `src/components/[type]/[ComponentName]/`
2. Add `ComponentName.jsx`, `ComponentName.css`, and `index.js`
3. Import constants from `src/constants`
4. Use reusable UI components when possible

## Benefits

1. **Maintainability**: Easy to update text, styles, or behavior
2. **Scalability**: Simple to add new features without code duplication
3. **Testability**: Clear separation makes unit testing easier
4. **Readability**: Well-organized code is easier to understand
5. **Consistency**: Centralized constants ensure consistent UI/UX

