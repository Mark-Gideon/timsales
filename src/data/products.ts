export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
  detailImage: string;
  applications: string[];
  gallery: { src: string; caption?: string }[];
}

export const products: Product[] = [
  {
    slug: 'plywood',
    name: 'Plywood',
    shortName: 'Plywood',
    tagline: 'Versatile engineered wood panels',
    description:
      'Versatile engineered wood panels designed for a wide range of construction, furniture and interior applications.',
    overview:
      'Timsales plywood is manufactured through a controlled process of layering veneers with alternating grain directions, bonded under heat and pressure to produce dimensionally stable panels. Our plywood is engineered for strength, consistency and workability — suitable for structural, decorative and industrial uses.',
    image: '/assets/images/plywood.jpg',
    detailImage: '/assets/images/marineplaywood.jpeg',
    applications: ['Construction', 'Furniture', 'Joinery', 'Interior Fit-Outs', 'Formwork', 'Packaging'],
    gallery: [
      { src: '/assets/images/products/plywood/01.jpg' },
      { src: '/assets/images/products/plywood/02.jpg' },
      { src: '/assets/images/products/plywood/03.jpg' },
    ],
  },
  {
    slug: 'fibreboards',
    name: 'Fibreboards',
    shortName: 'Fibreboards',
    tagline: 'Durable fibre-based panels',
    description:
      'Engineered fibre-based panels designed for practical, durable and versatile applications.',
    overview:
      'Timsales fibreboards are manufactured from wood fibres consolidated under controlled conditions to produce uniform, dense panels. These boards offer a smooth surface, consistent density and reliable performance for furniture, interior fit-outs and general-purpose applications.',
    image: '/assets/images/FIBREBOARDS.jpg',
    detailImage: '/assets/images/FIBREBOARDS.jpg',
    applications: ['Furniture', 'Interior Fit-Outs', 'Joinery', 'Doors', 'Shelving', 'Display Systems'],
    gallery: [
      { src: '/assets/images/products/fibreboards/01.jpg', caption: 'Hardboards' },
      { src: '/assets/images/products/fibreboards/02.jpg', caption: 'Hardboards' },
      { src: '/assets/images/products/fibreboards/03.jpg', caption: 'Softboards' },
      { src: '/assets/images/products/fibreboards/04.jpg', caption: 'Softboards' },
    ],
  },
  {
    slug: 'chipboards',
    name: 'Chipboards',
    shortName: 'Chipboards',
    tagline: 'Versatile laminated wood panels',
    description:
      'Chipboards manufactured from wood residues for furniture, interiors, ceiling boards and general applications.',
    overview:
      'Timsales chipboards are produced from waste recovered from the sawmill and plywood lines. Boards are available in a range of thicknesses and can be laminated in customer-selected colours with suede or matt finishes.',
    image: '/assets/images/chipboard.jpg',
    detailImage: '/assets/images/chipboardline.jpg',
    applications: ['Furniture', 'Interior Fit-Outs', 'Ceiling Boards', 'Joinery', 'Shelving', 'Commercial Projects'],
    gallery: [
      { src: '/assets/images/products/chipboards/01.jpg', caption: 'Ceiling Board' },
      { src: '/assets/images/products/chipboards/02.jpg', caption: 'Chipboard Plain' },
      { src: '/assets/images/products/chipboards/03.jpg', caption: 'Chipboard Plain' },
      { src: '/assets/images/products/chipboards/04.jpg', caption: 'Laminated Chipboard – Various Colours' },
      { src: '/assets/images/products/chipboards/05.jpg', caption: 'Laminated Chipboard' },
      { src: '/assets/images/products/chipboards/06.jpg', caption: 'Laminated Chipboard' },
      { src: '/assets/images/products/chipboards/07.jpg', caption: 'Laminated Chipboard' },
      { src: '/assets/images/products/chipboards/08.jpg', caption: 'Laminated Chipboard' },
      { src: '/assets/images/products/chipboards/09.jpg', caption: 'Laminated Chipboard' },
      { src: '/assets/images/products/chipboards/10.jpg', caption: 'Laminated Chipboard' },
    ],
  },
  {
    slug: 'block-boards',
    name: 'Block Boards',
    shortName: 'Block Boards',
    tagline: 'Strong and stable wood panels',
    description:
      'Strong and stable wood panels suitable for furniture, joinery, doors and interior applications.',
    overview:
      'Timsales block boards feature a solid wood core sandwiched between veneer faces, engineered for dimensional stability and load-bearing performance. They are designed for applications requiring flatness, strength and screw-holding capacity — including furniture, shelving, doors and interior fit-outs.',
    image: '/assets/images/blockboard.jpeg',
    detailImage: '/assets/images/BLOCKBOARD.jpg',
    applications: ['Furniture', 'Joinery', 'Doors', 'Shelving', 'Interior Fit-Outs', 'Commercial Projects'],
    gallery: [
      { src: '/assets/images/products/block-boards/01.jpg' },
      { src: '/assets/images/products/block-boards/02.jpg' },
      { src: '/assets/images/products/block-boards/03.jpg' },
    ],
  },
  {
    slug: 'doors',
    name: 'Doors',
    shortName: 'Doors',
    tagline: 'Reliable, durable door solutions',
    description:
      'Reliable, durable door solutions for residential, commercial and institutional applications.',
    overview:
      'Timsales doors are manufactured with a solid core and quality veneer or laminate faces, engineered for durability, dimensional stability and consistent performance. They are designed for residential, commercial and institutional applications where reliability and appearance matter.',
    image: '/assets/images/FLUSHDOOR1.jpg',
    detailImage: '/assets/images/FLUSHDOOR2.jpg',
    applications: ['Doors', 'Residential', 'Commercial', 'Institutional', 'Interior Fit-Outs', 'Hospitality'],
    gallery: [
      { src: '/assets/images/products/doors/01.jpg', caption: 'Flush Door' },
      { src: '/assets/images/products/doors/02.jpg', caption: 'Flush Door' },
      { src: '/assets/images/products/doors/03.jpg', caption: 'Mahogany Door' },
      { src: '/assets/images/products/doors/04.jpg', caption: 'Mahogany Door' },
      { src: '/assets/images/products/doors/05.jpg', caption: 'Mahogany Door' },
      { src: '/assets/images/products/doors/06.jpg', caption: 'Batten Door' },
      { src: '/assets/images/products/doors/07.jpg', caption: 'Flush Doors' },
      { src: '/assets/images/products/doors/08.jpg', caption: 'Flush Doors' },
    ],
  },
  {
    slug: 'timber',
    name: 'Timber',
    shortName: 'Timber',
    tagline: 'Quality timber products',
    description:
      'Quality timber products for construction, furniture, joinery and general woodworking applications.',
    overview:
      'Timsales timber is sourced, processed and graded for quality and consistency. Our sawmilling operations produce a range of timber dimensions suitable for construction, furniture, joinery and general woodworking — each piece processed to meet professional standards.',
    image: '/assets/images/products/timber/card.jpg',
    detailImage: '/assets/images/products/timber/04.jpg',
    applications: ['Construction', 'Furniture', 'Joinery', 'Roofing', 'Flooring', 'General Woodworking'],
    gallery: [
      { src: '/assets/images/products/timber/01.jpg', caption: 'Kiln Dried Timber' },
      { src: '/assets/images/products/timber/02.jpg', caption: 'Kiln Dried Timber' },
      { src: '/assets/images/products/timber/03.jpg', caption: 'Kiln Dried Treated Timber' },
      { src: '/assets/images/products/timber/04.jpg', caption: 'Sawn Timber' },
      { src: '/assets/images/products/timber/05.jpg', caption: 'Sawn Timber' },
      { src: '/assets/images/products/timber/06.jpg', caption: 'Sawn Timber' },
      { src: '/assets/images/products/timber/07.jpg', caption: 'Sawn Timber' },
    ],
  },
  {
    slug: 'transmission-poles',
    name: 'Transmission Poles',
    shortName: 'Transmission Poles',
    tagline: 'Treated poles for utility infrastructure',
    description:
      'Treated timber poles prepared for power transmission and utility infrastructure applications.',
    overview:
      'Timsales transmission poles are dried and treated through a controlled vacuum-pressure impregnation process to improve durability for utility infrastructure. The treatment line uses preservative systems suited to long-term outdoor service.',
    image: '/assets/images/products/transmission-poles/01.jpg',
    detailImage: '/assets/images/products/transmission-poles/02.jpg',
    applications: ['Power Distribution', 'Utility Infrastructure', 'Outdoor Construction', 'Fencing'],
    gallery: [
      { src: '/assets/images/products/transmission-poles/01.jpg', caption: 'Transmission Poles' },
      { src: '/assets/images/products/transmission-poles/02.jpg', caption: 'Transmission Poles' },
      { src: '/assets/images/products/transmission-poles/03.jpg', caption: 'Raw Transmission Poles' },
      { src: '/assets/images/products/transmission-poles/04.jpg', caption: 'Treated Transmission Poles' },
      { src: '/assets/images/products/transmission-poles/05.jpg', caption: 'Transmission Poles' },
      { src: '/assets/images/products/transmission-poles/06.jpg', caption: 'Transmission Poles' },
    ],
  },
  {
    slug: 'prefabricated-buildings',
    name: 'Prefabricated Buildings',
    shortName: 'Prefab Buildings',
    tagline: 'Practical timber building systems',
    description:
      'Factory-prepared timber panels and components assembled into efficient prefabricated buildings.',
    overview:
      'We provide quality fabricated building structures that are affordable, modern, and quick to install. Our structures can be customized to suit different business needs, with practical designs, durable materials, and comfortable spaces.',
    image: '/assets/images/products/prefabricated-buildings/01.jpg',
    detailImage: '/assets/images/products/prefabricated-buildings/02.jpg',
    applications: ['Residential Buildings', 'Site Offices', 'Commercial Spaces', 'Panelized Construction'],
    gallery: [
      { src: '/assets/images/products/prefabricated-buildings/01.jpg' },
      { src: '/assets/images/products/prefabricated-buildings/02.jpg' },
      { src: '/assets/images/products/prefabricated-buildings/03.jpg' },
      { src: '/assets/images/products/prefabricated-buildings/04.jpg' },
      { src: '/assets/images/products/prefabricated-buildings/05.jpg' },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
