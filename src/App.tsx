import React, {CSSProperties, useCallback, useState} from 'react';
import {Illustration} from './pages/Illustration';
import {UIUX} from './pages/UIUX';
import {Banner} from './components/Banner';
import {Branding} from './pages/Branding';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import './App.scss';
import {Routes, Route} from 'react-router-dom';

interface RouteProps {
  component: JSX.Element;
  path: string;
  routes?: RouteProps[];
}

const routes = (props: any): RouteProps[] => [
  {
    path:      '/',
    component: <Home {...props} />
  }, {
    path:      '/uiux',
    component: <UIUX {...props} />,
    routes:    [
      {
        path:      '/uiux/:project',
        component: <UIUX {...props} />
      }
    ]
  }, {
    path:      '/branding',
    component: <Branding {...props} />
  }, {
    path:      '/illustration',
    component: <Illustration {...props} />
  }, {
    path:      '*',
    component: <Home {...props} />
  }
];

const App = () => {
  const [bannerStyles, setBannerStyles] = useState<CSSProperties>({});
  const [bannerText, setBannerText]     = useState<string>('');
  const [headerStyles, setHeaderStyles] = useState<{ linksStyle?: CSSProperties; headerStyles?: CSSProperties }>({
    linksStyle:   {},
    headerStyles: {}
  });

  return (
    <div className="App">
      <Header styles={headerStyles} />
      <Banner bannerStyles={bannerStyles} bannerText={bannerText} />
      <Routes>
        {routeWithSubRoutes(routes({
          setHeaderStyles: useCallback(setHeaderStyles, [setHeaderStyles]),
          setBannerStyles: useCallback(setBannerStyles, [setBannerStyles]),
          setBannerText:   useCallback(setBannerText, [setBannerText])
        }))}
      </Routes>
      <Footer />
    </div>
  );
};

const routeWithSubRoutes = (pageRoutes: RouteProps[]) =>
  pageRoutes.map((route) => (
    <Route
      path={route.path}
      element={route.component}
      key={route.path}
    >
      {route.routes?.length ? routeWithSubRoutes(route.routes) : ''}
    </Route>
  ));

export default App;
