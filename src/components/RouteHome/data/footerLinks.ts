// data/footerLinks.ts

export type FooterLinkItem = {
  name: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

export const footerLinks: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Resources", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Cookies Policy", href: "/cookies" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Platform", href: "/platform" },
      { name: "Changelog", href: "#" },
      { name: "Technology", href: "/technology" },
      { name: "Performance", href: "#" },
      { name: "Intelligence", href: "#" },
      { name: "Debug", href: "#" },
    ],
  },
];
