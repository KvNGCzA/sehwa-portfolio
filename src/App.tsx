import React, {CSSProperties, useEffect, useState} from 'react';
import {Illustration} from './pages/Illustration';
import {UIUX} from './pages/UIUX';
import {Page} from './core/enums/branding.enums';
import {Banner} from './components/Banner';
import {Branding} from './pages/Branding';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';

const getBannerStyles = (path: string): CSSProperties => {
  switch (path) {
    case Page.UIUX:
      return {
        color:           '#FFFEF2',
        backgroundColor: '#4D8886'
      };
    case Page.BRANDING:
      return {
        color:           '#FFFEF2',
        backgroundColor: '#36575A'
      };
    case Page.ILLUSTRATION:
      return {
        color:           '#FFFEF2',
        backgroundColor: '#36575A'
      };
    default:
      return {
        display: 'none'
      };
  }
};

const getBannerText = (path: string): string => {
  switch (path) {
    case Page.BRANDING:
      return 'Branding';
    case Page.UIUX:
      return 'UI/UX design';
    case Page.ILLUSTRATION:
      return 'Illustrations';
    default:
      return '';
  }
};

const App = () => {
  const location                        = useLocation();
  const [bannerStyles, setBannerStyles] = useState<CSSProperties>({});
  const [bannerText, setBannerText]     = useState<string>('');
  const [headerStyles, setHeaderStyles] = useState<{ linksStyle?: CSSProperties; headerStyles?: CSSProperties }>({
    linksStyle:   {},
    headerStyles: {}
  });

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setBannerStyles(() => {
      const styles = getBannerStyles(path);
      setHeaderStyles(!Boolean(path) ? {} : {
        linksStyle:   {color: '#FFFEF2'},
        headerStyles: {backgroundColor: styles.backgroundColor}
      });
      return styles;
    });
    setBannerText(getBannerText(path));

  }, [location]);

  return (
    <div className="App">
      <Header styles={headerStyles} />
      <Banner bannerStyles={bannerStyles} bannerText={bannerText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={Page.BRANDING} element={<Branding />} />
        <Route path={Page.UIUX} element={<UIUX />} />
        <Route path={Page.ILLUSTRATION} element={<Illustration />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
