import { UI_TEXT } from '../../../constants';
import Badge from '../../ui/Badge';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-wrapper">
        <div 
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {!product.inStock && (
            <div className="out-of-stock-badge">
              <Badge variant="error" size="small">
                {UI_TEXT.PRODUCT_CARD.OUT_OF_STOCK}
              </Badge>
            </div>
          )}
        </div>
        <div className="product-overlay">
          <button className="view-details-btn">
            {UI_TEXT.PRODUCT_CARD.VIEW_DETAILS}
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-size">{product.size}</p>
        <div className="product-price-row">
          {product.inStock && (
            <Badge variant="success" size="small">
              {UI_TEXT.PRODUCT_CARD.IN_STOCK}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

