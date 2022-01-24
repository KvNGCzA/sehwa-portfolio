import React, {CSSProperties, useEffect, useState} from 'react';
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
      return 'Illustration';
    default:
      return '';
  }
};

const App = () => {
  const location                        = useLocation();
  const [bannerStyles, setBannerStyles] = useState<CSSProperties>({});
  const [bannerText, setBannerText]     = useState<string>('');
  const [linksStyle, setLinksStyle]     = useState<CSSProperties>({});

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setBannerStyles(getBannerStyles(path));
    setBannerText(getBannerText(path));
    setLinksStyle(!Boolean(path) ? {} : {
      color: '#FFFEF2'
    });
  }, [location]);

  return (
    <div className="App">
      <Header linksStyle={linksStyle} />
      <Banner bannerStyles={bannerStyles} bannerText={bannerText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
