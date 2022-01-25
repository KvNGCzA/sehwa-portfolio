import './index.scss';

interface BannerProps {
  bannerStyles: any;
  bannerText: string;
}

export const Banner = ({bannerStyles, bannerText}: BannerProps) => {
         return (
           <div className="banner" style={bannerStyles}>
             <div className="banner-text">
               <h1><span>{bannerText}</span> <span>{bannerText}</span></h1>
             </div>
             <div className="banner-text banner-text--two">
               <h1><span>{bannerText}</span> <span>{bannerText}</span></h1>
             </div>
           </div>
         );
       }
;
