import { getHumanSizeComparison } from '../../../utils/calculations';
import './HumanSizeComparison.css';

const HumanSizeComparison = ({ length, breadth }) => {
  if (!length || !breadth || length <= 0 || breadth <= 0) {
    return null;
  }

  const comparison = getHumanSizeComparison(length, breadth);

  return (
    <div className="human-size-comparison">
      <h4 className="comparison-title">Size Comparison</h4>
      <div className="comparison-container">
        <div className="comparison-visual">
          <div className="comparison-label">Length</div>
          <div className="comparison-bar-container">
            <div className="human-icon">👤</div>
            <div className="comparison-bar">
              <div 
                className="size-bar length-bar" 
                style={{ width: `${Math.min(comparison.lengthRatio * 20, 100)}%` }}
                title={`${length}" ≈ ${comparison.lengthComparison}x human height`}
              >
                <span className="size-label">{length}"</span>
              </div>
            </div>
          </div>
          <div className="comparison-text">
            {comparison.lengthComparison}x average human height (5'6")
          </div>
        </div>

        <div className="comparison-visual">
          <div className="comparison-label">Width</div>
          <div className="comparison-bar-container">
            <div className="human-icon">👤</div>
            <div className="comparison-bar">
              <div 
                className="size-bar breadth-bar" 
                style={{ width: `${Math.min(comparison.breadthRatio * 20, 100)}%` }}
                title={`${breadth}" ≈ ${comparison.breadthComparison}x human width`}
              >
                <span className="size-label">{breadth}"</span>
              </div>
            </div>
          </div>
          <div className="comparison-text">
            {comparison.breadthComparison}x average human width (2'2")
          </div>
        </div>
      </div>
      
      <div className="comparison-note">
        * Comparison is approximate based on average human dimensions
      </div>
    </div>
  );
};

export default HumanSizeComparison;
