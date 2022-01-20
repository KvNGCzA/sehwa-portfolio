import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import {Button} from '../Button';

const LINKS = [
  {
    link: '/',
    text: 'Work'
  }

//  , {
//    link: '/uiux',
//    text: 'UI/UX Design'
//  }, {
//    link: '/branding',
//    text: 'Branding'
//  }, {
//    link: '/illustration',
//    text: 'Illustration'
//  }
];

const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'nav__item nav__active' : 'nav__item';

export const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <Link to="/"><h1>A.A.Adesewa</h1></Link>
      </div>
      <ul className="nav">
        {LINKS.map(({link, text}) =>
          <NavLink className={isActive} key={text} to={link}><Button text={text} className="header-link" /></NavLink>
        )}
      </ul>
    </header>
  );
};
