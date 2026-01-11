import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Reusable Badge component
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  className = ''
}) => {
  const badgeClasses = `
    badge 
    badge-${variant} 
    badge-${size} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default Badge;

