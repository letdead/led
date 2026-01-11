import { useScroll } from '../../../hooks/useScroll';
import Button from '../../ui/Button';
import { UI_TEXT, SECTION_IDS, SCROLL_THRESHOLD } from '../../../constants';
import { scrollToElement } from '../../../utils/helpers';
import './Header.css';

const Header = () => {
  const scrolled = useScroll(SCROLL_THRESHOLD);

  const handleShopClick = () => {
    scrollToElement(`#${SECTION_IDS.PRODUCTS}`);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">{UI_TEXT.HEADER.LOGO}</div>
          <div className="nav-links">
            <a href={`#${SECTION_IDS.PRODUCTS}`}>{UI_TEXT.HEADER.NAV.PRODUCTS}</a>
            <a href={`#${SECTION_IDS.FEATURES}`}>{UI_TEXT.HEADER.NAV.FEATURES}</a>
            <a href={`#${SECTION_IDS.SUPPORT}`}>{UI_TEXT.HEADER.NAV.SUPPORT}</a>
            <Button variant="primary" size="small" onClick={handleShopClick}>
              {UI_TEXT.HEADER.NAV.SHOP}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

