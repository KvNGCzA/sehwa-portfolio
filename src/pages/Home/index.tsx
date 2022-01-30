import './index.scss';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';
import Sewa from '../../assets/images/sewa.svg';

//import Typewriter from 'typewriter-effect';

interface CategoryCardProps {
  image: string;
  link: string;
  text: string;
}

const SECTION_TWO = [
  {
    image: 'uiux',
    link:  'uiux',
    text:  'UI/UX design'
  }, {
    image: 'branding',
    link:  'branding',
    text:  'Branding'
  }, {
    image: 'illustration',
    link:  'illustration',
    text:  'Illustration'
  }
];

const SectionOne = () => {
  const handleLetsTalk = () => {
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
  };

  return (
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

        <Button text="Let's talk" className="lets-talk" handleClick={handleLetsTalk} />
      </div>
    </div>);
};

//const SectionOne = () => {
//  const [typingDone, setTypingDone] = useState(false);
//  const handleLetsTalk              = () => {
//    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
//  };
//
//  const handleSetShowButton = (value: boolean): void => {
//    setTypingDone(value);
//  };
//
//  useEffect(() => {
////    const header = document.getElementById('header') as HTMLElement;
////    if (!typingDone) {
////      document.body.style.position = 'fixed';
////      header.style.display         = 'none';
////    } else {
////      document.body.style.position = 'relative';
////      header.style.display         = 'flex';
////    }
//  }, [typingDone]);
//
//  return (
//    <div
//      className="section section__one" style={{
//      background: `url('${Sewa}') no-repeat center`
//    }}>
//      <div className="intro-text">
//        <p className="content">
//          <Typewriter
//            onInit={(typewriter) => {
//              typewriter
//                .changeDelay(80)
//                .typeString('<b>Hi!</b>')
//                .pauseFor(2000)
//                .deleteAll()
//                .typeString(`<b>I'm Adesewa</b>`)
//                .pauseFor(500)
//                .typeString(`<b>!!!</b>`)
//                .pauseFor(2000)
//                .deleteAll()
//                .typeString(INTRO_STRING)
//                .pauseFor(2000)
//                .typeString(INTRO_STRING_TWO)
//                .pauseFor(3000)
//                .callFunction(() => {
//                  handleSetShowButton(true);
//                })
//                .start();
//            }}
//            options={{
//              autoStart:        true,
//              loop:             false,
//              wrapperClassName: ''
//            }}
//          />
//        </p>
//
//        {typingDone ? <Button text="Let's talk" className="lets-talk" handleClick={handleLetsTalk} /> : null}
//      </div>
//    </div>);
//};

const CategoryCard = ({text, image, link}: CategoryCardProps) =>
  <div className="category-card">
    <img src={`${process.env.PUBLIC_URL}/images/${image}.png`} className="category-image" alt={text} />
    <Link className="category-title" to={link}>{text}</Link>
  </div>;

const SectionTwo = () => {
  return (
    <div className="section section__two">
      {SECTION_TWO.map(section => <CategoryCard {...section} key={section.text} />)}
    </div>
  );
};

export const Home = ({setBannerStyles, setBannerText, setHeaderStyles}: any) => {
  useEffect(() => {
    setBannerStyles({
      display: 'none'
    });
    setBannerText('');
    setHeaderStyles({
      linksStyle:   {color: '#4B4B4B'},
      headerStyles: {backgroundColor: '#36575A'}
    });
  }, [setBannerStyles, setBannerText, setHeaderStyles]);

  return (
    <div className="main">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};
