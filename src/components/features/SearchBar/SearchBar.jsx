import Input from '../../ui/Input';
import { ICON_SIZES } from '../../../constants';
import './SearchBar.css';

const SearchIcon = () => (
  <svg 
    width={ICON_SIZES.SEARCH.width} 
    height={ICON_SIZES.SEARCH.height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-bar">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        icon={<SearchIcon />}
      />
    </div>
  );
};

export default SearchBar;

