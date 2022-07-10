export interface IBlog {
  id: string;
  title: { rendered: string };
  _embedded: { author: { name: string; link: string }[] };
  link: string;
  featured_media: string;
  date: string;
}

export interface IBlogCard {
  headerText: string;
  imgSrc: string;
  title: string;
  author: string;
  date: string;
  footerText: string;
  blogUrl: string;
  authorUrl: string;
}
