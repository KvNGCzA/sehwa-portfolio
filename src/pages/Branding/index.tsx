import './index.scss';
import {Button} from '../../components/Button';

const BRANDING_PARAMS = {
  tagline:    `Livia Beauty is a hair-extensions and cosmetics brand based in the UK. Livia sells quality and affordable products made to accentuate women’s beauty.`,
  buttonText: 'View Livia',
  sections:   [
    {
      title:       'Project Goal',
      description: `Livia's goal is to rebrand by creating a brand identity that really speaks and appeal to the sophistication and beauty of her customers.`
    }, {
      title:       'Methodology',
      description: `I decided to ride off the existing persona of Livia’s customers by using a bold yet classy font with careful and artistically crafted strokes to give it an air of freedom.`
    }
  ]
};

export const Branding = () => {
  return (
    <div className="page page__branding">
      <p className="tagline">{BRANDING_PARAMS.tagline}</p>
      <Button text={BRANDING_PARAMS.buttonText} className="view-btn" />

      <div className="gallery" />

      <div className="sections">
        {BRANDING_PARAMS.sections.map(section =>
          <div className="section-card" key={section.title}>
            <p className="card-title">{section.title}</p>
            <p className="card-description">{section.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
