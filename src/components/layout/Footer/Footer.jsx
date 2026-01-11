import { UI_TEXT, SECTION_IDS } from '../../../constants';
import './Footer.css';

const Footer = () => {
  const shopLinks = [
    { label: UI_TEXT.FOOTER.COLUMNS.SHOP.LINKS.ALL_PRODUCTS, href: `#${SECTION_IDS.PRODUCTS}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SHOP.LINKS.STANDARD_PANELS, href: `#${SECTION_IDS.STANDARD}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SHOP.LINKS.COMMERCIAL, href: `#${SECTION_IDS.COMMERCIAL}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SHOP.LINKS.SMART_PANELS, href: `#${SECTION_IDS.SMART}` }
  ];

  const supportLinks = [
    { label: UI_TEXT.FOOTER.COLUMNS.SUPPORT.LINKS.CUSTOMER_SERVICE, href: `#${SECTION_IDS.SUPPORT}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SUPPORT.LINKS.WARRANTY, href: `#${SECTION_IDS.WARRANTY}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SUPPORT.LINKS.INSTALLATION_GUIDE, href: `#${SECTION_IDS.INSTALLATION}` },
    { label: UI_TEXT.FOOTER.COLUMNS.SUPPORT.LINKS.FAQ, href: `#${SECTION_IDS.FAQ}` }
  ];

  const companyLinks = [
    { label: UI_TEXT.FOOTER.COLUMNS.COMPANY.LINKS.ABOUT_US, href: `#${SECTION_IDS.ABOUT}` },
    { label: UI_TEXT.FOOTER.COLUMNS.COMPANY.LINKS.CAREERS, href: `#${SECTION_IDS.CAREERS}` },
    { label: UI_TEXT.FOOTER.COLUMNS.COMPANY.LINKS.PRESS, href: `#${SECTION_IDS.PRESS}` },
    { label: UI_TEXT.FOOTER.COLUMNS.COMPANY.LINKS.CONTACT, href: `#${SECTION_IDS.CONTACT}` }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>{UI_TEXT.FOOTER.COLUMNS.SHOP.TITLE}</h4>
            <ul>
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>{UI_TEXT.FOOTER.COLUMNS.SUPPORT.TITLE}</h4>
            <ul>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>{UI_TEXT.FOOTER.COLUMNS.COMPANY.TITLE}</h4>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{UI_TEXT.FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

