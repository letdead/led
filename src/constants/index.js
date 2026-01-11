// Categories
export const CATEGORIES = ["All", "Standard", "Professional", "Commercial", "Smart"];

// Product Sizes
export const PRODUCT_SIZES = {
  COMPACT: "6\" × 6\"",
  SMALL: "12\" × 12\"",
  MEDIUM: "18\" × 18\"",
  LARGE: "24\" × 24\"",
  XLARGE: "36\" × 36\"",
  RECTANGULAR: "24\" × 48\"",
  CIRCULAR: "18\" Diameter"
};

// UI Text Constants
export const UI_TEXT = {
  // Header
  HEADER: {
    LOGO: "LED Panels",
    NAV: {
      PRODUCTS: "Products",
      FEATURES: "Features",
      SUPPORT: "Support",
      SHOP: "Shop"
    }
  },

  // Hero Section
  HERO: {
    TITLE: "Illuminate Your Space",
    SUBTITLE: "Premium LED panels. Brilliant design. Endless possibilities.",
    BUTTONS: {
      SHOP_NOW: "Shop Now",
      LEARN_MORE: "Learn More"
    }
  },

  // Products Section
  PRODUCTS: {
    TITLE: "Choose Your LED Panel",
    SUBTITLE: "From compact to commercial, find the perfect size for your space",
    SEARCH_PLACEHOLDER: "Search by name, size, or description...",
    NO_RESULTS: "No products found. Try adjusting your search or filters."
  },

  // Product Card
  PRODUCT_CARD: {
    OUT_OF_STOCK: "Out of Stock",
    IN_STOCK: "In Stock",
    VIEW_DETAILS: "View Details"
  },

  // Product Modal
  MODAL: {
    SPECS: {
      SIZE: "Size",
      WATTAGE: "Wattage",
      LUMENS: "Lumens",
      COLOR_TEMPERATURE: "Color Temperature"
    },
    FEATURES_TITLE: "Features",
    PRICE_LABEL: "Price",
    CUSTOMIZE_TITLE: "Customize Your LED Panel",
    SIZE_INPUT_LABEL: "Enter Dimensions",
    COMPONENTS_TITLE: "Select Components",
    CALCULATION_TITLE: "Component Breakdown",
    PRICING_TITLE: "Expected Pricing",
    PLACE_ORDER_NOTE: "You will be redirected to email to get more details",
    ACTIONS: {
      ADD_TO_CART: "Add to Cart",
      OUT_OF_STOCK: "Out of Stock",
      PLACE_ORDER: "Contact Us for More Details"
    }
  },

  // Footer
  FOOTER: {
    COLUMNS: {
      SHOP: {
        TITLE: "Shop",
        LINKS: {
          ALL_PRODUCTS: "All Products",
          STANDARD_PANELS: "Standard Panels",
          COMMERCIAL: "Commercial",
          SMART_PANELS: "Smart Panels"
        }
      },
      SUPPORT: {
        TITLE: "Support",
        LINKS: {
          CUSTOMER_SERVICE: "Customer Service",
          WARRANTY: "Warranty",
          INSTALLATION_GUIDE: "Installation Guide",
          FAQ: "FAQ"
        }
      },
      COMPANY: {
        TITLE: "Company",
        LINKS: {
          ABOUT_US: "About Us",
          CAREERS: "Careers",
          PRESS: "Press",
          CONTACT: "Contact"
        }
      }
    },
    COPYRIGHT: "© 2024 LED Panels. All rights reserved."
  }
};

// Section IDs
export const SECTION_IDS = {
  PRODUCTS: "products",
  FEATURES: "features",
  SUPPORT: "support",
  ABOUT: "about",
  CAREERS: "careers",
  PRESS: "press",
  CONTACT: "contact",
  STANDARD: "standard",
  COMMERCIAL: "commercial",
  SMART: "smart",
  WARRANTY: "warranty",
  INSTALLATION: "installation",
  FAQ: "faq"
};

// Scroll Thresholds
export const SCROLL_THRESHOLD = 50;

// Modal Animation Delays (ms)
export const MODAL_ANIMATION_DELAY = 300;

// Keyboard Keys
export const KEY_CODES = {
  ESCAPE: "Escape"
};

// Currency
export const CURRENCY = {
  SYMBOL: "$",
  DEFAULT: "USD"
};

// Search & Filter Defaults
export const FILTER_DEFAULTS = {
  CATEGORY: "All",
  SEARCH_QUERY: ""
};

// Icon Dimensions
export const ICON_SIZES = {
  SEARCH: { width: 20, height: 20 },
  CLOSE: { width: 24, height: 24 }
};

export const THEME = {
  colors: {
    bg: "#000000",
    bgSecondary: "#1d1d1f",
    text: "#f5f5f7",
    textSecondary: "#86868b",
    accent: "#0071e3",
    accentHover: "#0077ed",
    border: "#424245",
    success: "#30d158",
    error: "#ff3b30"
  },
  fonts: {
    family: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "17px",
      lg: "21px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "56px",
      "6xl": "72px"
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  breakpoints: {
    mobile: "568px",
    tablet: "768px",
    desktop: "968px",
    wide: "1200px"
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "60px"
  },
  borderRadius: {
    sm: "12px",
    md: "18px",
    lg: "22px",
    xl: "24px",
    full: "50%"
  },
  transitions: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s"
  }
};

export const ANIMATIONS = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  fadeInUp: {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  },
  slideUp: {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  }
};

