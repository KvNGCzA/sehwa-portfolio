import './index.scss';
import {Button} from '../../components/Button';
import Sewa from '../../assets/images/sewa.svg';

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

const SectionTwo = () => {
  return (
    <div className="section section__two">

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
