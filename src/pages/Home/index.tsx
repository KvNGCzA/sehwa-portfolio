import './index.scss';
import {Button} from '../../components/Button';
import Sewa from '../../assets/images/sewa.svg';

interface CategoryCardProps {
  image: string;
  text: string;
}

const SECTION_TWO = [
  {
    image: 'uiux',
    text:  'UI/UX design'
  }, {
    image: 'branding',
    text:  'Branding'
  }, {
    image: 'illustration',
    text:  'Illustration'
  }
];

const SectionOne = () =>
  <div
    className="section section__one" style={{
    background: `url('${Sewa}') no-repeat center`
  }}>
    <div className="intro-text">
      <p className="content">
        I am Product designer with experience in <b>UI/UX design</b>, <b>UX
                                                                         copywriting</b> and <b>illustration</b> based
        on earth.
        Passionate about building great products, visual designs, branding & solving user problems through simple,
        intuitive designs.
      </p>

      <Button text="Let's talk" className="lets-talk" />
    </div>
  </div>;

const CategoryCard = ({text, image}: CategoryCardProps) =>
  <div className="category-card">
    <img src={`${process.env.PUBLIC_URL}/images/${image}.png`} className="category-image" alt={text} />
    <p className="category-title">{text}</p>
  </div>;

const SectionTwo = () => {
  return (
    <div className="section section__two">
      {SECTION_TWO.map(section => <CategoryCard {...section} key={section.text} />)}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="main">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};
