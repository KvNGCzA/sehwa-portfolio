import './index.scss';
import {BrandingSection} from '../BrandingSection';
import {Button} from '../Button';
import {Gallery} from '../Gallery';

interface LayoutProps {
  children?: any;
  params: any;
}

export const Layout = ({params, children}: LayoutProps) => {
  return (
    <div className="page page__branding">
      <p className="tagline">{params.tagline}</p>
      <Button text={params.buttonText} className="view-btn" />

      <Gallery />

      <BrandingSection sections={params.sections} />
      {children}
    </div>
  );
};
