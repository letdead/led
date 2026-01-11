import Button from '../../ui/Button';
import { UI_TEXT, SECTION_IDS } from '../../../constants';
import { scrollToElement } from '../../../utils/helpers';
import './Hero.css';

const Hero = () => {
  const handleShopClick = () => {
    scrollToElement(`#${SECTION_IDS.PRODUCTS}`);
  };

  const handleLearnMore = () => {
    scrollToElement(`#${SECTION_IDS.FEATURES}`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{UI_TEXT.HERO.TITLE}</h1>
        <p className="hero-subtitle">{UI_TEXT.HERO.SUBTITLE}</p>
        <div className="hero-buttons">
          <Button variant="primary" size="medium" onClick={handleShopClick}>
            {UI_TEXT.HERO.BUTTONS.SHOP_NOW}
          </Button>
          <Button variant="secondary" size="medium" onClick={handleLearnMore}>
            {UI_TEXT.HERO.BUTTONS.LEARN_MORE}
          </Button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-gradient"></div>
      </div>
    </section>
  );
};

export default Hero;

