export interface Location {
  name: string;
  role: string;
  address: string;
  phones: string[];
  email: string;
  mapsUrl: string;
}

export const locations: Location[] = [
  {
    name: 'Timsales Elburgon',
    role: 'Head Office & Manufacturing Facility',
    address: 'P.O. Box 12-20102, Elburgon, Kenya',
    phones: ['0722 205 919', '0723 945 279', '0733 123 200', '0733 410 009'],
    email: 'Sales_elburgon@timsales.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Timsales%20Elburgon%2C%20Molo%20Road%2C%20Elburgon%2C%20Kenya',
  },
  {
    name: 'Timsales Nairobi',
    role: 'Regional Office & Distribution',
    address: 'Enterprise Road, Industrial Area, Nairobi, Kenya',
    phones: ['0722 206 961', '0733 333 307', '0737 410 007'],
    email: 'nairobi@timsales.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Timsales%20Nairobi%20Enterprise%20Road%20Industrial%20Area%2C%20Nairobi%2C%20Kenya',
  },
  {
    name: 'Timsales Kisumu',
    role: 'Regional Office & Distribution',
    address: 'Kisumu, Kenya',
    phones: ['0202 129 303'],
    email: 'kisumu@timsales.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Timsales%20Kisumu%2C%20Kenya',
  },
  {
    name: 'Timsales Mombasa',
    role: 'Regional Office & Distribution',
    address: 'Mombasa, Kenya',
    phones: ['0777 033 455', '0110 009 591'],
    email: 'mombasa@timsales.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Timsales%20Mombasa%2C%20Kenya',
  },
  {
    name: 'Timsales Nakuru',
    role: 'Regional Office & Distribution',
    address: 'Nakuru, Kenya',
    phones: ['0758 875 072'],
    email: 'nakuru@timsales.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Timsales%20Nakuru%2C%20Kenya',
  },
];

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export const stats: Stat[] = [
  { value: '90+', label: 'years of experience', sublabel: 'Established in Elburgon in 1932' },
  { value: '3,000+', label: 'direct employees', sublabel: 'Supporting integrated wood manufacturing' },
  { value: '8', label: 'production lines', sublabel: 'From plywood to prefab houses' },
  { value: '4', label: 'Kenyan branches', sublabel: 'Nairobi, Mombasa, Kisumu and Nakuru' },
];

export interface ManufacturingStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const manufacturingSteps: ManufacturingStep[] = [
  {
    number: '01',
    title: 'PLYWOOD LINE',
    description: 'This line produces Plywood’s of various thicknesses. Plywood production entails: Debarking:Removal of barks from logs as it’s not used for making veneer. Steaming of logs: To soften logs for ease of peeling and to remove extractives that may interfere with the strength of glue. Peeling: To produce veneers. Drying: To reduce moisture content for proper spread of glue. Glue spreading: Involves assembly of core veneer and face veneer. Grading and sorting: Finished product is graded into three grades.',
    image: '/assets/images/about_us.jpg',
  },
  {
    number: '02',
    title: 'BLOCKBOARD LINE',
    description: 'Made up of solid strips of wood known as lumber core and veneers. Lumber core, core veneer and face veneer are assembled to produce block boards. The lumber core is assembled using a composer machine after being dried in a kiln drier. Lumber core is produced from multi ripsaw machine.',
    image: '/assets/images/blockboard.jpeg',
  },
  {
    number: '03',
    title: 'FLUSH DOOR LINE',
    description: 'This is the assembly of door frame, veneer-plywood honey comb and door skin to make a flush door. Flush doors are mainly for interior use.',
    image: '/assets/images/FLUSHDOOR1.jpg',
  },
  {
    number: '04',
    title: 'FIBRE BOARDS LINE',
    description: 'Utilizes wastes from sawmill line (off-cuts) and plywood line which are chipped and then cooked in a digester to produce fibers which are pulped into hardboards and soft boards. Hardboards are dried through a hot press and have one smooth surface while softboards are dried through a drier and both surfaces are coarse.',
    image: '/assets/images/FIBREBOARDS.jpg',
  },
  {
    number: '05',
    title: 'SAWMILL LINE',
    description: 'Logs are sawn into lumber/timber for use in construction and making of other secondary products e.g. block board flush door, furniture etc. Latest state of the art woodmizers machines are used and this leads to more recovery and less wastage. Saw dust and barks are used in the thermal boiler for energy generation.',
    image: '/assets/images/sawmill-line.jpg',
  },
  {
    number: '06',
    title: 'CHIPBOARD LINE',
    description: 'The waste from sawmill and plywood line are chipped and used for production of chipboards. We produce chipboards in various thickness from 9mm to 25mm.The designed ceiling boards are also manufactured. We also laminate the boards in various colors as per the customer’s requirements.',
    image: '/assets/images/chipboardline.jpg',
  },
  {
    number: '07',
    title: 'TRANSMISSION POLE TREATMENT LINE',
    description: 'Manufactures power transmission poles which are supplied to Kenya Power Limited Company. Raw poles are dried in steam heated kiln drier and then treated in vacuum pressure impregnating vessel for chemical impregnation. Copper Chrome arsenate and creosote oil chemicals are used.',
    image: '/assets/images/cypress-quarter.jpeg',
  },
  {
    number: '08',
    title: 'PREFABRICATED HOUSES PRODUCTION LINE',
    description: 'Sawn timber are dried in the drier the taken for molding to produce T&G with center groove. The materials are the assembled at the joinery section into panels of different parts of the house. The panels are joined on site to make a house.',
    image: '/assets/images/timber-yard.jpg',
  },
];

export interface Application {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const applications: Application[] = [
  {
    title: 'Construction',
    description: 'Wood products for building and structural applications.',
    image: '/assets/images/timber-yard.jpg',
    icon: 'Building2',
  },
  {
    title: 'Furniture',
    description: 'Panels and timber for furniture manufacturing.',
    image: '/assets/images/office-furniture.jpg',
    icon: 'Sofa',
  },
  {
    title: 'Interior & Joinery',
    description: 'Materials for interior fittings and joinery.',
    image: '/assets/images/kitchen-units.jpg',
    icon: 'DoorOpen',
  },
  {
    title: 'Doors',
    description: 'Wood-based solutions for residential, commercial and institutional doors.',
    image: '/assets/images/door-handle-clockset.jpeg',
    icon: 'DoorClosed',
  },
  {
    title: 'Commercial Projects',
    description: 'Materials for large-scale developments and fit-outs.',
    image: '/assets/images/kitchen-units.jpg',
    icon: 'Building',
  },
  {
    title: 'Industrial Applications',
    description: 'Products for manufacturers and professional users.',
    image: '/assets/images/sawmill-line.jpg',
    icon: 'Factory',
  },
];

export interface Project {
  id: string;
  name: string;
  location: string;
  application: string;
  products: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: '[Add Project Name]',
    location: '[Add Location]',
    application: 'Construction',
    products: 'Plywood, Timber',
    description: '[Add project description — replace this placeholder with verified project information.]',
    image: '/assets/images/office-furniture.jpg',
  },
  {
    id: 'project-2',
    name: '[Add Project Name]',
    location: '[Add Location]',
    application: 'Furniture',
    products: 'Block Boards, Plywood',
    description: '[Add project description — replace this placeholder with verified project information.]',
    image: '/assets/images/kitchen-units.jpg',
  },
  {
    id: 'project-3',
    name: '[Add Project Name]',
    location: '[Add Location]',
    application: 'Interior Fit-Out',
    products: 'Flush Doors, Fibreboards',
    description: '[Add project description — replace this placeholder with verified project information.]',
    image: '/assets/images/door-handle-clockset.jpeg',
  },
];

export interface WhyTimsales {
  title: string;
  description: string;
  icon: string;
}

export const whyTimsales: WhyTimsales[] = [
  {
    title: 'Manufacturing Expertise',
    description: 'Experience across wood processing and manufactured wood products.',
    icon: 'Settings',
  },
  {
    title: 'Product Range',
    description: 'Multiple wood-product categories from one trusted manufacturer.',
    icon: 'Layers',
  },
  {
    title: 'Consistency',
    description: 'Reliable products designed for professional applications.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Local Knowledge',
    description: 'Deep understanding of the Kenyan market.',
    icon: 'MapPin',
  },
  {
    title: 'Regional Reach',
    description: 'Ability to serve customers beyond Kenya.',
    icon: 'Globe',
  },
  {
    title: 'Customer Focus',
    description: 'Professional support from product selection to delivery.',
    icon: 'Headset',
  },
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Markets', path: '/markets' },
  // { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];
