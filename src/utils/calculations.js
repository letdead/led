/**
 * Calculation utilities for LED panel customization
 */

// Standard panel sizes (in inches)
const STANDARD_PANEL_SIZE = 12; // 12x12 inches standard panel

// Component pricing (base prices)
const COMPONENT_PRICES = {
  panel: 20, // per 12x12 panel
  transformer: 35, // per transformer (handles ~4 panels)
  stabilizer: 25, // per stabilizer
  wire: 2.5, // per foot
  casing: 45, // per casing unit
  installation: 50, // base installation cost
  margin: 0.25, // 25% margin
  shippingBase: 30, // base shipping cost
  shippingFreeThreshold: 1000, // free shipping above this amount
  lowCartShippingSurcharge: 25 // additional charge for low cart amounts
};

/**
 * Calculate number of panels needed based on dimensions
 * @param {number} length - Length in inches
 * @param {number} breadth - Breadth in inches
 * @returns {number} Number of panels required
 */
export const calculatePanelsRequired = (length, breadth) => {
  if (!length || !breadth || length <= 0 || breadth <= 0) return 0;
  
  // Calculate area
  const totalArea = length * breadth;
  const panelArea = STANDARD_PANEL_SIZE * STANDARD_PANEL_SIZE;
  
  // Calculate panels needed (round up)
  const panelsNeeded = Math.ceil(totalArea / panelArea);
  
  return Math.max(1, panelsNeeded); // At least 1 panel
};

/**
 * Calculate number of transformers required
 * Each transformer handles approximately 4 panels
 * @param {number} panelsCount - Number of panels
 * @returns {number} Number of transformers required
 */
export const calculateTransformersRequired = (panelsCount) => {
  if (!panelsCount || panelsCount <= 0) return 0;
  
  const panelsPerTransformer = 4;
  return Math.ceil(panelsCount / panelsPerTransformer);
};

/**
 * Calculate wire length needed (in feet)
 * Rough estimation: perimeter * 1.2 (with some extra for connections)
 * @param {number} length - Length in inches
 * @param {number} breadth - Breadth in inches
 * @param {number} panelsCount - Number of panels
 * @returns {number} Wire length in feet
 */
export const calculateWireLength = (length, breadth, panelsCount) => {
  if (!length || !breadth || panelsCount <= 0) return 0;
  
  // Convert inches to feet
  const lengthFt = length / 12;
  const breadthFt = breadth / 12;
  
  // Perimeter with extra for connections (1.2x multiplier)
  const perimeter = 2 * (lengthFt + breadthFt);
  const wireLength = perimeter * 1.2;
  
  // Add extra based on number of panels (more panels = more connections)
  const extraForPanels = panelsCount * 2;
  
  return Math.ceil(wireLength + extraForPanels);
};

/**
 * Calculate number of stabilizers required
 * One stabilizer per transformer typically
 * @param {number} transformersCount - Number of transformers
 * @returns {number} Number of stabilizers required
 */
export const calculateStabilizersRequired = (transformersCount) => {
  return transformersCount || 0;
};

/**
 * Calculate number of casing units required
 * Based on perimeter and height requirements
 * @param {number} length - Length in inches
 * @param {number} breadth - Breadth in inches
 * @returns {number} Number of casing units
 */
export const calculateCasingRequired = (length, breadth) => {
  if (!length || !breadth) return 0;
  
  // Convert to feet
  const lengthFt = length / 12;
  const breadthFt = breadth / 12;
  const perimeter = 2 * (lengthFt + breadthFt);
  
  // Assuming casing comes in 4-foot units
  return Math.ceil(perimeter / 4);
};

/**
 * Calculate total cost breakdown
 * @param {Object} config - Configuration object
 * @param {number} config.length - Length in inches
 * @param {number} config.breadth - Breadth in inches
 * @param {boolean} config.includeTransformer - Include transformer
 * @param {boolean} config.includeStabilizer - Include stabilizer
 * @param {boolean} config.includeWire - Include wire
 * @param {boolean} config.includeCasing - Include casing
 * @returns {Object} Cost breakdown
 */
export const calculateCost = ({
  length,
  breadth,
  includeTransformer = true,
  includeStabilizer = true,
  includeWire = true,
  includeCasing = true
}) => {
  const panelsCount = calculatePanelsRequired(length, breadth);
  const transformersCount = includeTransformer ? calculateTransformersRequired(panelsCount) : 0;
  const stabilizersCount = includeStabilizer ? calculateStabilizersRequired(transformersCount) : 0;
  const wireLength = includeWire ? calculateWireLength(length, breadth, panelsCount) : 0;
  const casingCount = includeCasing ? calculateCasingRequired(length, breadth) : 0;
  
  // Calculate component costs
  const panelsCost = panelsCount * COMPONENT_PRICES.panel;
  const transformersCost = transformersCount * COMPONENT_PRICES.transformer;
  const stabilizersCost = stabilizersCount * COMPONENT_PRICES.stabilizer;
  const wireCost = wireLength * COMPONENT_PRICES.wire;
  const casingCost = casingCount * COMPONENT_PRICES.casing;
  
  // Subtotal before margin
  const subtotal = panelsCost + transformersCost + stabilizersCost + wireCost + casingCost;
  
  // Add margin
  const marginAmount = subtotal * COMPONENT_PRICES.margin;
  const costWithMargin = subtotal + marginAmount;
  
  // Determine shipping
  const isFreeShipping = costWithMargin >= COMPONENT_PRICES.shippingFreeThreshold;
  let shippingCost = 0;
  let shippingLabel = 'Free Shipping';
  
  if (!isFreeShipping) {
    // Include base shipping + surcharge for low cart amounts
    shippingCost = COMPONENT_PRICES.shippingBase + COMPONENT_PRICES.lowCartShippingSurcharge;
    shippingLabel = 'Shipping Charges';
  }
  
  // Total cost (including shipping, but shipping already has margin built in)
  const totalCost = costWithMargin + (isFreeShipping ? 0 : shippingCost);
  
  return {
    panelsCount,
    transformersCount,
    stabilizersCount,
    wireLength: Math.round(wireLength * 10) / 10, // Round to 1 decimal
    casingCount,
    breakdown: {
      panels: panelsCost,
      transformers: transformersCost,
      stabilizers: stabilizersCost,
      wire: wireCost,
      casing: casingCost,
      subtotal,
      margin: marginAmount,
      costWithMargin,
      shipping: shippingCost,
      shippingLabel,
      total: totalCost
    },
    isFreeShipping,
    shippingLabel
  };
};

/**
 * Format dimensions for display
 * @param {number} length - Length in inches
 * @param {number} breadth - Breadth in inches
 * @returns {string} Formatted dimensions string
 */
export const formatDimensions = (length, breadth) => {
  if (!length || !breadth) return '';
  return `${length}" × ${breadth}" (${(length / 12).toFixed(1)}' × ${(breadth / 12).toFixed(1)}')`;
};

/**
 * Get human size comparison data
 * Average human height: 5'6" (66 inches), average arm span (width): 5'6" (66 inches)
 * @param {number} length - Length in inches
 * @param {number} breadth - Breadth in inches
 * @returns {Object} Comparison data
 */
export const getHumanSizeComparison = (length, breadth) => {
  const avgHumanHeight = 66; // inches
  const avgHumanWidth = 26; // inches (shoulder width)
  
  const lengthRatio = length / avgHumanHeight;
  const breadthRatio = breadth / avgHumanWidth;
  
  return {
    humanHeight: avgHumanHeight,
    humanWidth: avgHumanWidth,
    lengthRatio: Math.max(0.1, Math.min(lengthRatio, 5)), // Clamp between 0.1 and 5
    breadthRatio: Math.max(0.1, Math.min(breadthRatio, 5)), // Clamp between 0.1 and 5
    lengthComparison: lengthRatio.toFixed(2),
    breadthComparison: breadthRatio.toFixed(2)
  };
};
