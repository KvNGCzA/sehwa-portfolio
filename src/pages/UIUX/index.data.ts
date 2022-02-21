import { Image, Project } from "../../core/interfaces/index.interface";

const GALLERY_LINK = (link: string) =>
  `${process.env.PUBLIC_URL}/images/gallery/sofri-${link}.png`;

const IMAGES: Image[] = [
  {
    src: GALLERY_LINK("collage"),
    alt: "sofri collage",
  },
  {
    src: GALLERY_LINK("1"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("2"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("3"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("4"),
    alt: "sofri mobile",
  },
];

const WIREFRAMES: Image[] = [
  {
    src: GALLERY_LINK("wireframe-collage"),
    alt: "sofri collage",
  },
  {
    src: GALLERY_LINK("wireframe-1"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("wireframe-2"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("wireframe-3"),
    alt: "sofri mobile",
  },
  {
    src: GALLERY_LINK("wireframe-4"),
    alt: "sofri mobile",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Sofri App",
    mainImages: IMAGES,
    wireframes: WIREFRAMES,
    userFlow: [
      {
        src: GALLERY_LINK("user-flow-1"),
        alt: "sofri userflow",
      },
    ],
    slug: "sofri-app",
    tagline: `1 I am Product designer with experience in UI/UX design, Ux copywriting and illustration based on earth. Passionate about building great products, visual designs, branding& solving user problems through simple, intuitive designs.`,
    buttonText: "Let’s talk",
    sections: [
      {
        title: "Project Goal",
        description: `The goal of the project was to help people form better and healthy habit and it was created during the COVID-19 period in which people were stuck and had their daily routines completely disrupted. No access to the gym, sleep routines were ruined and people wanted a way to get their routine back. Aura mobile app is an all-in-one solution to that problem.`,
        buttonText: "Play prototype",
      },
      {
        title: "Methodology",
        description: `The research stage was somewhat easy to breakdown because the problem was a common issue at the time, which made it easy to create a focus group that a survey was sent to.

  The Survey: A group of 5 people were pulled from different industries and a questionnaire was sent to them.`,
      },
    ],
  },
  {
    name: "Not Sofri App",
    mainImages: IMAGES,
    wireframes: WIREFRAMES,
    slug: "not-sofri-app",
    tagline: `2 I am Product designer with experience in UI/UX design, Ux copywriting and illustration based on earth. Passionate about building great products, visual designs, branding& solving user problems through simple, intuitive designs.`,
    buttonText: "Let’s talk",
    sections: [
      {
        title: "Project Goal",
        description: `The goal of the project was to help people form better and healthy habit and it was created during the COVID-19 period in which people were stuck and had their daily routines completely disrupted. No access to the gym, sleep routines were ruined and people wanted a way to get their routine back. Aura mobile app is an all-in-one solution to that problem.`,
        buttonText: "Play prototype",
      },
      {
        title: "Methodology",
        description: `The research stage was somewhat easy to breakdown because the problem was a common issue at the time, which made it easy to create a focus group that a survey was sent to.

  The Survey: A group of 5 people were pulled from different industries and a questionnaire was sent to them.`,
      },
    ],
  },
  {
    name: "Maybe Sofri App",
    mainImages: IMAGES,
    wireframes: WIREFRAMES,
    slug: "maybe-sofri-app",
    tagline: `3 I am Product designer with experience in UI/UX design, Ux copywriting and illustration based on earth. Passionate about building great products, visual designs, branding& solving user problems through simple, intuitive designs.`,
    buttonText: "Let’s talk",
    sections: [
      {
        title: "Project Goal",
        description: `The goal of the project was to help people form better and healthy habit and it was created during the COVID-19 period in which people were stuck and had their daily routines completely disrupted. No access to the gym, sleep routines were ruined and people wanted a way to get their routine back. Aura mobile app is an all-in-one solution to that problem.`,
        buttonText: "Play prototype",
      },
      {
        title: "Methodology",
        description: `The research stage was somewhat easy to breakdown because the problem was a common issue at the time, which made it easy to create a focus group that a survey was sent to.

  The Survey: A group of 5 people were pulled from different industries and a questionnaire was sent to them.`,
      },
    ],
  },
];
