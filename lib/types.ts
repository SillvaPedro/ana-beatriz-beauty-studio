export type course = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: string;
  image?: string;
  price: string;
  oldPrice?: string;
  priceOptions?: { label: string; value: string }[];
  highlights: string[];
};

export type portfolioItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
};
