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
  specs: { label: string; value: string }[];
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
    specs: [
      { label: 'Product', value: 'Plywood' },
      { label: 'Dimensions', value: '[Add specification]' },
      { label: 'Thickness', value: '[Add specification]' },
      { label: 'Grade', value: '[Add specification]' },
      { label: 'Finish', value: '[Add specification]' },
      { label: 'Application', value: '[Add specification]' },
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
    specs: [
      { label: 'Product', value: 'Fibreboards' },
      { label: 'Dimensions', value: '[Add specification]' },
      { label: 'Thickness', value: '[Add specification]' },
      { label: 'Grade', value: '[Add specification]' },
      { label: 'Finish', value: '[Add specification]' },
      { label: 'Application', value: '[Add specification]' },
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
    specs: [
      { label: 'Product', value: 'Chipboards' },
      { label: 'Sheet Size', value: "8' x 4'" },
      { label: 'Thickness', value: '9mm, 10mm, 12mm, 16mm, 18mm and 25mm' },
      { label: 'Finish', value: 'Suede or matt; laminated colours available' },
      { label: 'Material', value: 'Recovered sawmill and plywood-line residues' },
      { label: 'Application', value: 'Furniture, interiors and ceiling boards' },
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
    specs: [
      { label: 'Product', value: 'Block Boards' },
      { label: 'Dimensions', value: '[Add specification]' },
      { label: 'Thickness', value: '[Add specification]' },
      { label: 'Grade', value: '[Add specification]' },
      { label: 'Finish', value: '[Add specification]' },
      { label: 'Application', value: '[Add specification]' },
    ],
  },
  {
    slug: 'flush-doors',
    name: 'Flush Doors',
    shortName: 'Flush Doors',
    tagline: 'Reliable, durable door solutions',
    description:
      'Reliable, durable door solutions for residential, commercial and institutional applications.',
    overview:
      'Timsales flush doors are manufactured with a solid core and quality veneer or laminate faces, engineered for durability, dimensional stability and consistent performance. They are designed for residential, commercial and institutional applications where reliability and appearance matter.',
    image: '/assets/images/FLUSHDOOR1.jpg',
    detailImage: '/assets/images/FLUSHDOOR2.jpg',
    applications: ['Doors', 'Residential', 'Commercial', 'Institutional', 'Interior Fit-Outs', 'Hospitality'],
    specs: [
      { label: 'Product', value: 'Flush Doors' },
      { label: 'Dimensions', value: '[Add specification]' },
      { label: 'Thickness', value: '[Add specification]' },
      { label: 'Grade', value: '[Add specification]' },
      { label: 'Finish', value: '[Add specification]' },
      { label: 'Application', value: '[Add specification]' },
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
    image: '/assets/images/Sawn-timber.jpeg',
    detailImage: '/assets/images/timber-yard.jpg',
    applications: ['Construction', 'Furniture', 'Joinery', 'Roofing', 'Flooring', 'General Woodworking'],
    specs: [
      { label: 'Product', value: 'Timber' },
      { label: 'Dimensions', value: '[Add specification]' },
      { label: 'Thickness', value: '[Add specification]' },
      { label: 'Grade', value: '[Add specification]' },
      { label: 'Finish', value: '[Add specification]' },
      { label: 'Application', value: '[Add specification]' },
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
    image: '/assets/images/Cypress quarter round 1.jpeg',
    detailImage: '/assets/images/Cypress timber.jpeg',
    applications: ['Power Distribution', 'Utility Infrastructure', 'Outdoor Construction', 'Fencing'],
    specs: [
      { label: 'Product', value: 'Transmission Poles' },
      { label: 'Treatment', value: 'Vacuum-pressure impregnation' },
      { label: 'Material', value: 'Cypress timber' },
      { label: 'Application', value: 'Power transmission and utility infrastructure' },
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
      'Timsales prefabricated building systems use kiln-dried and moulded timber components assembled into panels for efficient site installation. The system supports practical timber buildings with consistent factory preparation and joinery.',
    image: '/assets/images/img1.jpg',
    detailImage: '/assets/images/img2.jpg',
    applications: ['Residential Buildings', 'Site Offices', 'Commercial Spaces', 'Panelized Construction'],
    specs: [
      { label: 'Product', value: 'Prefabricated Buildings' },
      { label: 'Construction', value: 'Factory-prepared timber panels' },
      { label: 'Assembly', value: 'Panelized on-site installation' },
      { label: 'Application', value: 'Residential and commercial buildings' },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
