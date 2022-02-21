export interface Section {
  title: string;
  description: string;
  buttonText?: string;
}

export interface Project {
  name?: string;
  slug?: string;
  tagline: string;
  buttonText?: string;
  sections: Section[];
  mainImages?: Image[];
  wireframes?: Image[];
  userFlow?: Image[];
}

export interface Image {
  src: string;
  alt: string;
}

export interface LayoutProps {
  children?: any;
  images?: Image[];
  params: {
    buttonText?: string;
    tagline?: string;
    sections: any[];
  };
  wireframes?: boolean;
}
