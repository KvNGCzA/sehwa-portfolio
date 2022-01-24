import './index.scss';

interface BannerProps {
  bannerStyles: any;
  bannerText: string;
}

export const Banner = ({bannerStyles, bannerText}: BannerProps) => {
  return (
    <div className="banner" style={bannerStyles}>
      <h1 className="banner-text">{bannerText}</h1>
    </div>
  );
};
