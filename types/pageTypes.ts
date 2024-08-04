export interface Hero {
  heroImage: string;
  heading: string;
  tagline: string;
}

export interface Content {
  heading: string;
  tagline: string;
  excerpt: string;
}

export interface ImageOverlay {
  heading: string;
  imageOverlay: string;
}

export interface ImageType {
  url: string;
}

export interface Gallery {
  imageUrls: ImageType[];
}

export interface Expertise {
  heading: string;
  url: string;
}

export interface HomepageData {
  Hero: Hero;
  Content: Content;
  SectionImageOverlay: ImageOverlay;
  Gallery: Gallery;
  Expertises: Expertise[];
}