export const site = {
  title: "Jan Bulling",
  description: "Personal portfolio of Jan Bulling",
  author: "Jan Bulling",
};

export const projects = {
  title: "Projects",
  description: "Projects I lately worked on",
};

export const work = {
  title: "Experiences",
  description: "My work experiences",
};

// Links
export const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Experiences",
    href: "/experiences",
  },
  {
    text: "Projects",
    href: "/projects",
  },
];

// Socials
type Socials = {
  name: string;
  text: string;
  href: string;
}[];

export const socials: Socials = [
  {
    name: "Email",
    text: "jan.bulling@gmx.de",
    href: "mailto:jan.bulling@gmx.de",
  },
  {
    name: "Github",
    text: "janbulling",
    href: "https://github.com/janbulling",
  },
  {
    name: "LinkedIn",
    text: "Jan Bulling",
    href: "https://www.linkedin.com/in/jan-bulling/",
  },
];
