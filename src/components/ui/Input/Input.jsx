import PropTypes from 'prop-types';
import './Input.css';

/**
 * Reusable Input component
 */
const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className = '',
  icon,
  ...props
}) => {
  const inputClasses = `
    input 
    ${icon ? 'input-with-icon' : ''} 
    ${disabled ? 'input-disabled' : ''} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node
};

export default Input;

