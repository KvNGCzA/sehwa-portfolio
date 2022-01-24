import './index.scss';
import {CSSProperties, useCallback, useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Page} from '../../core/enums/branding.enums';
import {Button} from '../Button';

const LINKS = [
  {
    link: Page.UIUX,
    text: 'UI/UX Design'
  }, {
    link: Page.BRANDING,
    text: 'Branding'
  }, {
    link: Page.ILLUSTRATION,
    text: 'Illustration'
  }
];

const isActive = ({isActive}: { isActive: boolean }): string =>
  isActive ? 'nav__item nav__active' : 'nav__item';

export const Header = ({linksStyle}: { linksStyle: CSSProperties }) => {
  const [scrollStyles, setScrollStyles] = useState<CSSProperties | null>();
  const [headerStyles, setHeaderStyles] = useState<CSSProperties | null>();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 400 && !scrollStyles) {
      setScrollStyles({
        color: '#4B4B4B'
      });
      setHeaderStyles({
        backgroundColor: 'rgba(255, 254, 242, 0.3)'
      });
      return;
    }

    if (window.scrollY <= 400 && scrollStyles) {
      setScrollStyles(null);
      setHeaderStyles({});
    }
  }, [scrollStyles, setScrollStyles, setHeaderStyles]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header id="header" style={{...headerStyles}}>
      <div className="logo">
        <Link to="/" style={{...linksStyle, ...scrollStyles}}><h1>A.A.Adesewa</h1></Link>
      </div>
      <ul className="nav">
        {LINKS.map(({link, text}) =>
          <NavLink
            className={isActive}
            key={text}
            to={link}
            children={({isActive: isActiveLink}) =>
              <Button
                text={text}
                className="header-link"
                styles={{...linksStyle, ...scrollStyles}}
                isActive={isActiveLink}
                isDark={Boolean(headerStyles?.backgroundColor)}
              />}
          ></NavLink>
        )}
      </ul>
    </header>
  );
};
