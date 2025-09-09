export const getClientTestimonials = (t: (key: string) => string) => [
  {
    name: 'Jeroen van den Berg',
    role: t('testimonialsData.c1.role'),
    quote: t('testimonialsData.c1.quote'),
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Mehmet Yilmaz',
    role: t('testimonialsData.c2.role'),
    quote: t('testimonialsData.c2.quote'),
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    rating: 4,
  },
  {
    name: 'Clarence Bouterse',
    role: t('testimonialsData.c3.role'),
    quote: t('testimonialsData.c3.quote'),
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
];
