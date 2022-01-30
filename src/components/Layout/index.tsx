import './index.scss';
import {Fragment} from 'react';
import {BrandingSection} from '../BrandingSection';
import {Button} from '../Button';
import {Gallery} from '../Gallery';

interface LayoutProps {
  children?: any;
  params: {
    buttonText?: string;
    tagline?: string;
    sections: any[];
  };
  wireframes?: boolean;
}

export const Layout = ({params, children, wireframes = true}: LayoutProps) => {
  return (
    <div className="page page__branding">
      <p className="tagline">{params.tagline}</p>
      {params.buttonText ? <Button text={params.buttonText} className="view-btn" /> : null}

      {wireframes ?
        <Fragment>
          <Gallery />
          <BrandingSection sections={params.sections} />
        </Fragment> :
        null}

      {children}
    </div>
  );
};
