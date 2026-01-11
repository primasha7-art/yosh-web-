
import { Freelancer, Service, Feedback, PortfolioItem } from './types';

// --- මෙතැනින් වෙබ් අඩවියේ ප්‍රධාන තොරතුරු වෙනස් කරන්න ---
export const SITE_CONFIG = {
  name: "LankaFreelance Hub",
  shortName: "L",
  email: "info@lankafreelance.com",
  phone: "+94 11 234 5678",
  address: "Level 12, World Trade Center, Colombo 01",
  tagline: "Hire Top-Tier Sri Lankan Freelance Talent.",
  description: "The ultimate platform connecting skilled Sri Lankan freelancers with global clients. We bridge the gap between talent and opportunity."
};

// --- About Us පිටුවේ තොරතුරු ---
export const ABOUT_CONTENT = {
  title: "Empowering Talent, Bridging Borders.",
  mission: "LankaFreelance Hub was founded with a single goal: to showcase the immense digital talent hidden within Sri Lanka to the global market.",
  description: "Unlike traditional marketplaces where you're left to fend for yourself, we act as a quality-controlled bridge. Every freelancer in our hub is vetted, and every project is monitored by our agency team to ensure success.",
  bullets: [
    'Vetted and trusted professionals only',
    'Managed workflow through our central agency',
    'Transparent pricing with no hidden fees',
    'Commitment to ethical business practices'
  ]
};

// --- සේවකයින්ගේ (Employees) තොරතුරු ---
export const INITIAL_FREELANCERS: Freelancer[] = [
  {
    id: '1',
    name: 'Kasun Perera',
    role: 'Full-Stack Developer',
    expertise: ['React', 'Node.js', 'PostgreSQL'],
    bio: 'Experienced in building scalable web applications with 5+ years of experience.',
    rating: 4.9,
    completedProjects: 45,
    imageUrl: 'https://picsum.photos/seed/kasun/200/200',
    hourlyRate: 25,
    reviews: [
      { id: 'r1', clientName: 'Alice', comment: 'Amazing developer!', rating: 5, date: '2023-10-15' },
      { id: 'r2', clientName: 'Bob', comment: 'Very professional.', rating: 4, date: '2023-11-02' }
    ]
  },
  {
    id: '2',
    name: 'Nimali Silva',
    role: 'UI/UX Designer',
    expertise: ['Figma', 'Adobe XD', 'Prototyping'],
    bio: 'Passionate about creating user-centric designs that drive engagement.',
    rating: 4.8,
    completedProjects: 38,
    imageUrl: 'https://picsum.photos/seed/nimali/200/200',
    hourlyRate: 20,
    reviews: [
      { id: 'r3', clientName: 'Charlie', comment: 'Great eye for detail.', rating: 5, date: '2023-09-20' }
    ]
  },
  {
    id: '3',
    name: 'Amara Fonseka',
    role: 'Content Strategist',
    expertise: ['SEO', 'Copywriting', 'Marketing'],
    bio: 'Helping brands find their voice and connect with audiences through storytelling.',
    rating: 4.7,
    completedProjects: 62,
    imageUrl: 'https://picsum.photos/seed/amara/200/200',
    hourlyRate: 15,
    reviews: []
  },
];

// --- සේවාවන් (Services) ---
export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Development',
    description: 'Custom websites built with the latest technologies for speed and reliability.',
    icon: 'fa-code',
    priceRange: '$200 - $5000',
  },
  {
    id: 's2',
    title: 'Mobile App Design',
    description: 'Intuitive and beautiful mobile interfaces for iOS and Android platforms.',
    icon: 'fa-mobile-screen',
    priceRange: '$300 - $3000',
  },
  {
    id: 's3',
    title: 'Digital Marketing',
    description: 'Grow your business with data-driven SEO and social media strategies.',
    icon: 'fa-chart-line',
    priceRange: '$100 - $1000/mo',
  },
];

// --- ගනුදෙනුකරුවන්ගේ අදහස් (Feedback) ---
export const FEEDBACKS: Feedback[] = [
  {
    id: 'f1',
    clientName: 'Dilshan Mendis',
    company: 'TechLanka Solutions',
    comment: 'The team delivered our project ahead of schedule and the quality was top-notch.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/client1/100/100',
  },
  {
    id: 'f2',
    clientName: 'Priyantha Jayakody',
    company: 'Island Goods',
    comment: 'Exceptional communication and brilliant execution of our e-commerce site.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/client2/100/100',
  },
];

// --- කළ වැඩ වල රිසාල්ට් (Portfolio) ---
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'E-commerce Platform',
    category: 'Development',
    imageUrl: 'https://picsum.photos/seed/p1/600/400',
    description: 'A full-scale online store for a local retail chain.',
  },
  {
    id: 'p2',
    title: 'Banking Dashboard',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/seed/p2/600/400',
    description: 'Simplified complex financial data into a sleek user interface.',
  },
];
