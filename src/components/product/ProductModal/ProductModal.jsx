import { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/helpers';
import { UI_TEXT, KEY_CODES, CURRENCY, ICON_SIZES } from '../../../constants';
import { calculateCost, formatDimensions } from '../../../utils/calculations';
import { openEmailComposer } from '../../../utils/email';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import HumanSizeComparison from '../HumanSizeComparison';
import './ProductModal.css';

const CloseIcon = () => (
  <svg 
    width={ICON_SIZES.CLOSE.width} 
    height={ICON_SIZES.CLOSE.height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ProductModal = ({ product, onClose }) => {
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [includeStabilizer, setIncludeStabilizer] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === KEY_CODES.ESCAPE) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Calculate cost based on current configuration
  // Transformers, wires, and casing are always included
  // Only stabilizer is optional
  const costData = (length && breadth && length > 0 && breadth > 0) 
    ? calculateCost({
        length: parseFloat(length),
        breadth: parseFloat(breadth),
        includeTransformer: true, // Always included
        includeStabilizer: includeStabilizer, // Optional
        includeWire: true, // Always included
        includeCasing: true // Always included
      })
    : null;

  const handlePlaceOrder = () => {
    if (!costData) {
      alert('Please enter dimensions to proceed with order.');
      return;
    }

    const orderData = {
      productName: product.name,
      dimensions: formatDimensions(parseFloat(length), parseFloat(breadth)),
      components: {
        panelsCount: costData.panelsCount,
        transformersCount: costData.transformersCount,
        stabilizersCount: costData.stabilizersCount,
        wireLength: costData.wireLength,
        casingCount: costData.casingCount
      },
      cost: costData
    };

    openEmailComposer(orderData);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content modal-content-customize" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        <div className="modal-body modal-body-customize">
          <div className="modal-left-section">
            <div className="modal-product-header">
              <span className="modal-category">{product.category}</span>
              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-description">{product.description}</p>
            </div>

            <div className="customization-section">
              <h3 className="section-title">Customize Your LED Panel</h3>
              
              <div className="size-input-section">
                <div className="size-input-group">
                  <label className="input-label">Length (inches)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 48"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    min="1"
                    step="1"
                  />
                </div>
                <div className="size-input-group">
                  <label className="input-label">Breadth (inches)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 36"
                    value={breadth}
                    onChange={(e) => setBreadth(e.target.value)}
                    min="1"
                    step="1"
                  />
                </div>
              </div>

              {length && breadth && parseFloat(length) > 0 && parseFloat(breadth) > 0 && (
                <HumanSizeComparison 
                  length={parseFloat(length)} 
                  breadth={parseFloat(breadth)} 
                />
              )}

              <div className="components-section">
                <h4 className="components-title">Optional Add-ons</h4>
                <div className="component-checkboxes">
                  <label className="component-checkbox">
                    <input
                      type="checkbox"
                      checked={includeStabilizer}
                      onChange={(e) => setIncludeStabilizer(e.target.checked)}
                    />
                    <span>Stabilizer (Optional)</span>
                  </label>
                </div>
                <p className="components-note">
                  * Transformers, wires, and casing are automatically included in your order.
                </p>
              </div>
            </div>
          </div>

          <div className="modal-right-section">
            <div className="preview-section">
              <div className="modal-product-image-container">
                <div 
                  className="modal-product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                  alt={product.name}
                ></div>
                {costData && (
                  <div className="preview-overlay">
                    <div className="preview-badge">Custom Preview</div>
                  </div>
                )}
              </div>
            </div>

            {costData && (
              <div className="calculation-section">
                <h4 className="calculation-title">Component Breakdown</h4>
                <div className="calculation-details">
                  <div className="calc-item">
                    <span className="calc-label">Panels Required:</span>
                    <span className="calc-value">{costData.panelsCount}</span>
                  </div>
                  <div className="calc-item">
                    <span className="calc-label">Transformers:</span>
                    <span className="calc-value">{costData.transformersCount}</span>
                  </div>
                  {includeStabilizer && costData.stabilizersCount > 0 && (
                    <div className="calc-item">
                      <span className="calc-label">Stabilizers:</span>
                      <span className="calc-value">{costData.stabilizersCount}</span>
                    </div>
                  )}
                  <div className="calc-item">
                    <span className="calc-label">Wire Length:</span>
                    <span className="calc-value">{costData.wireLength} ft</span>
                  </div>
                  <div className="calc-item">
                    <span className="calc-label">Casing Units:</span>
                    <span className="calc-value">{costData.casingCount}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pricing-section">
              <h4 className="pricing-title">Expected Pricing</h4>
              {costData ? (
                <div className="pricing-details">
                  <div className="price-row">
                    <span className="price-label">Subtotal:</span>
                    <span className="price-amount">
                      {formatPrice(costData.breakdown.costWithMargin, CURRENCY.SYMBOL)}
                    </span>
                  </div>
                  <div className="price-row shipping-row">
                    <span className="price-label">Shipping:</span>
                    <span className={`price-amount ${costData.isFreeShipping ? 'free-shipping' : ''}`}>
                      {costData.isFreeShipping 
                        ? 'Free Shipping' 
                        : formatPrice(costData.breakdown.shipping, CURRENCY.SYMBOL)
                      }
                    </span>
                  </div>
                  <div className="price-row total-row">
                    <span className="price-label">Total:</span>
                    <span className="price-amount total-amount">
                      {formatPrice(costData.breakdown.total, CURRENCY.SYMBOL)}
                    </span>
                  </div>
                  <p className="pricing-note">
                    * This is expected pricing. Final pricing may vary based on actual requirements.
                  </p>
                </div>
              ) : (
                <div className="pricing-placeholder">
                  Enter dimensions to see pricing
                </div>
              )}
            </div>

            <div className="modal-actions-customize">
              <Button
                variant="primary"
                size="large"
                fullWidth
                disabled={!costData}
                onClick={handlePlaceOrder}
              >
                {UI_TEXT.MODAL.ACTIONS.PLACE_ORDER}
              </Button>
              <p className="order-note">
                {UI_TEXT.MODAL.PLACE_ORDER_NOTE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

