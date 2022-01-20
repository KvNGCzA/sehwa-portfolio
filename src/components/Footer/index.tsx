import './index.scss';

const SOCIAL_ICONS: {
  link: string;
  image: string;
  alt: string;
}[] = [
  {
    link:  'mailto:aadefolaa@gmail.com',
    image: 'mail',
    alt:   'mail'
  }, {
    link:  'https://www.linkedin.com/in/sewa-ademeso-4081b415b/',
    image: 'linkedin',
    alt:   'linkedin'
  }, {
    link:  'https://dribbble.com/Sewaa',
    image: 'dribbble',
    alt:   'dribbble'
  }
];

export const Footer = () => {
  return (
    <footer>
      <span className="connect">Connect with me</span>
      <div className="social-icons">
        {SOCIAL_ICONS.map(({link, image, alt}) =>
          <a href={link} key={alt} target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/${image}.svg`}
              alt={alt}
            />
          </a>)}
      </div>
    </footer>
  );
};
