import './index.scss';
import {Gallery} from '../../components/Gallery';
import {Layout} from '../../components/Layout';

const ILLUSTRATION_PARAMS = {
  tagline:  `Here are some illustrations I did that represents beauty , culture and freedom in beautiful bold colours.`,
  sections: []
};

export const Illustration = () => {
  return <Layout params={ILLUSTRATION_PARAMS} wireframes={false}>
    <div className="wireframes">
      <Gallery />
    </div>
  </Layout>;
};
