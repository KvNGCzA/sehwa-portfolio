import './index.scss';

interface BrandingSectionProps {
  sections: any[];
}

interface BrandingCardProps {
  description: string;
  title: string;
}

const BrandingCard = ({title, description}: BrandingCardProps) => {
  return (
    <div className="section-card" key={title}>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
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
