
export interface Review {
  id: string;
  clientName: string;
  comment: string;
  rating: number;
  date: string;
}

export interface Freelancer {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  rating: number;
  completedProjects: number;
  imageUrl: string;
  hourlyRate: number;
  reviews: Review[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface Feedback {
  id: string;
  clientName: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
