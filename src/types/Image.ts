export interface ImageType {
  src: string;
  alt: string;
  title?: string;
}

export interface DuoImageType {
  front: {
    src: string;
    alt: string;
    title?: string;
  };
  back: {
    src: string;
    alt: string;
    title?: string;
  };
}
