import './index.scss';
import {Button} from '../Button';

interface BrandingSectionProps {
  sections: any[];
}

interface BrandingCardProps {
  buttonText?: string;
  description: string;
  title: string;
}

const BrandingCard = ({title, description, buttonText}: BrandingCardProps) => {
  return (
    <div className="section-card" key={title}>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      {buttonText ? <Button text={buttonText} /> : null}
    </div>
  );
};

export const BrandingSection = ({sections}: BrandingSectionProps) => {
  return (
    <div className="sections">
      {sections.map(section =>
        <BrandingCard key={section.title} {...section} />
      )}
    </div>
  );
};
