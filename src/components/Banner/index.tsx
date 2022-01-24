import './index.scss';

interface BannerProps {
  bannerStyles: any;
  bannerText: string;
}

export const Banner = ({bannerStyles, bannerText}: BannerProps) => {
  return (
    <div className="banner" style={bannerStyles}>
      <p className="banner-text">{bannerText}</p>
    </div>
  );
};
