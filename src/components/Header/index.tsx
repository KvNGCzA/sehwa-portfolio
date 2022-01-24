import './index.scss';
import {CSSProperties} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Button} from '../Button';

const LINKS = [
  {
    link: '/uiux',
    text: 'UI/UX Design'
  }, {
    link: '/branding',
    text: 'Branding'
  }, {
    link: '/illustration',
    text: 'Illustration'
  }
];

const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'nav__item nav__active' : 'nav__item';

export const Header = ({linksStyle}: { linksStyle: CSSProperties }) => {
  return (
    <header id="header">
      <div className="logo">
        <Link to="/" style={linksStyle}><h1>A.A.Adesewa</h1></Link>
      </div>
      <ul className="nav">
        {LINKS.map(({link, text}) =>
          <NavLink className={isActive} key={text} to={link}><Button
            text={text}
            className="header-link"
            styles={linksStyle} /></NavLink>
        )}
      </ul>
    </header>
  );
};
