export interface ImageType {
  src: string;
  alt: string;
  title?: string;
  content: string;
}

export interface DuoImageType {
  back: {
    src: string;
    alt: string;
    title?: string;
  };
}
