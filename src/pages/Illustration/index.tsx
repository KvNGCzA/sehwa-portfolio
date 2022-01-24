import './index.scss';
import {Gallery} from '../../components/Gallery';
import {Layout} from '../../components/Layout';

const ILLUSTRATION_PARAMS = {
  tagline:  `Here are some illustrations I did that represents beauty , culture and freedom in beautiful bold colours.`,
  sections: []
};

export const Illustration = () => {
  return <Layout params={ILLUSTRATION_PARAMS}>
    <div className="wireframes">
      <h2 className="wireframes__header">Wireframes</h2>
      <Gallery />

      <h2 className="wireframes__header">User Flow</h2>
      <Gallery />
    </div>
  </Layout>;
};
