import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScroll } from '../../../hooks/useScroll';
import Button from '../../ui/Button';
import { UI_TEXT, SECTION_IDS, SCROLL_THRESHOLD } from '../../../constants';
import { scrollToElement } from '../../../utils/helpers';
import './Header.css';

const Header = () => {
  const scrolled = useScroll(SCROLL_THRESHOLD);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    if (location.pathname !== '/') {
      // If not on home, go home first, then scroll
      navigate('/');
      setTimeout(() => scrollToElement(`#${sectionId}`), 100);
    } else {
      // If already on home, just scroll
      e.preventDefault();
      scrollToElement(`#${sectionId}`);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          {/* Logo now clicks back to Home */}
          <Link to="/" className="logo">{UI_TEXT.HEADER.LOGO}</Link>
          
          <div className="nav-links">
            <Link to="/">Home</Link>

            <a 
              href={`/#${SECTION_IDS.PRODUCTS}`} 
              onClick={(e) => handleNavClick(e, SECTION_IDS.PRODUCTS)}
            >
              {UI_TEXT.HEADER.NAV.PRODUCTS}
            </a>
            
            <Link to="/support">{UI_TEXT.HEADER.NAV.SUPPORT}</Link>

            <Button variant="primary" size="small" onClick={(e) => handleNavClick(e, SECTION_IDS.PRODUCTS)}>
              {UI_TEXT.HEADER.NAV.SHOP}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;