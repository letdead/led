/**
 * Email utility functions for order placement
 */

// Your business email (IMPORTANT: Update this with your actual email address)
// Example: export const BUSINESS_EMAIL = 'orders@yourcompany.com';
export const BUSINESS_EMAIL = 'your-email@example.com';

/**
 * Create Gmail compose URL with pre-filled content
 * @param {Object} orderData - Order data object
 * @param {string} orderData.productName - Product name
 * @param {string} orderData.dimensions - Product dimensions
 * @param {Object} orderData.components - Component breakdown
 * @param {Object} orderData.cost - Cost breakdown
 * @returns {string} Gmail compose URL
 */
export const createGmailComposeUrl = (orderData) => {
  const { productName, dimensions, components, cost } = orderData;
  
  const subject = encodeURIComponent(`Custom LED Panel Order - ${productName}`);
  
  const body = encodeURIComponent(`Dear LED Panels Team,

I would like to place an order for a custom LED panel with the following specifications:

Product: ${productName}
Dimensions: ${dimensions}

Component Breakdown:
- Number of Panels: ${components.panelsCount}
- Number of Transformers: ${components.transformersCount}
- Number of Stabilizers: ${components.stabilizersCount}
- Wire Length: ${components.wireLength} feet
- Casing Units: ${components.casingCount}

Expected Pricing:
- Subtotal: $${cost.breakdown.costWithMargin.toFixed(2)}
- Shipping: ${cost.isFreeShipping ? 'Free Shipping' : `$${cost.breakdown.shipping.toFixed(2)}`}
- Total: $${cost.breakdown.total.toFixed(2)}

Please confirm the order and provide next steps.

Best regards,
[Your Name]
[Your Phone Number]
[Your Address]`);

  // Gmail compose URL
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS_EMAIL}&su=${subject}&body=${body}`;
  
  return gmailUrl;
};

/**
 * Create fallback email URLs (alternative email services)
 * @param {Object} orderData - Order data object
 * @returns {Array} Array of email service URLs
 */
export const createFallbackEmailUrls = (orderData) => {
  const { productName, dimensions, components, cost } = orderData;
  
  const subject = encodeURIComponent(`Custom LED Panel Order - ${productName}`);
  
  const body = encodeURIComponent(`Dear LED Panels Team,

I would like to place an order for a custom LED panel with the following specifications:

Product: ${productName}
Dimensions: ${dimensions}

Component Breakdown:
- Number of Panels: ${components.panelsCount}
- Number of Transformers: ${components.transformersCount}
- Number of Stabilizers: ${components.stabilizersCount}
- Wire Length: ${components.wireLength} feet
- Casing Units: ${components.casingCount}

Expected Pricing:
- Subtotal: $${cost.breakdown.costWithMargin.toFixed(2)}
- Shipping: ${cost.isFreeShipping ? 'Free Shipping' : `$${cost.breakdown.shipping.toFixed(2)}`}
- Total: $${cost.breakdown.total.toFixed(2)}

Please confirm the order and provide next steps.

Best regards,
[Your Name]
[Your Phone Number]
[Your Address]`);

  return [
    // Outlook
    {
      name: 'Outlook',
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${BUSINESS_EMAIL}&subject=${subject}&body=${body}`
    },
    // Yahoo Mail (limited support)
    {
      name: 'Yahoo Mail',
      url: `https://compose.mail.yahoo.com/?to=${BUSINESS_EMAIL}&subject=${subject}&body=${body}`
    }
  ];
};

/**
 * Open email composer with fallback options
 * @param {Object} orderData - Order data object
 */
export const openEmailComposer = (orderData) => {
  try {
    // Try Gmail first
    const gmailUrl = createGmailComposeUrl(orderData);
    window.open(gmailUrl, '_blank');
  } catch (error) {
    console.error('Error opening email composer:', error);
    // Fallback: show user the email details so they can copy
    alert('Please email us at ' + BUSINESS_EMAIL + ' with your order details.');
  }
};
