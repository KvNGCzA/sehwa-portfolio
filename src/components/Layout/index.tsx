import './index.scss';
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
}

export const Layout = ({params, children}: LayoutProps) => {
  return (
    <div className="page page__branding">
      <p className="tagline">{params.tagline}</p>
      {params.buttonText ? <Button text={params.buttonText} className="view-btn" /> : null}

      <Gallery />

      <BrandingSection sections={params.sections} />
      {children}
    </div>
  );
};
