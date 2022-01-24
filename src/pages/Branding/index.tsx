import './index.scss';
import {Layout} from '../../components/Layout';

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

export const Branding = () => <Layout params={BRANDING_PARAMS} />;
