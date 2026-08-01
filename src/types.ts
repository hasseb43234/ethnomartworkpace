export type ViewMode = 'landing' | 'select-community' | 'community-hub' | 'forum' | 'jobs' | 'events';

export interface Community {
  id: string;
  name: string;
  activeMembers: string;
  flagUrl: string;
  greeting?: string;
  leaderName?: string;
  leaderAvatar?: string;
  description?: string;
}

export interface MarketplaceCategory {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  productsCount: number;
  items: MarketplaceItem[];
}

export interface MarketplaceItem {
  id: string;
  name: string;
  category: string;
  price: number;
  origin: string;
  rating: number;
  imageUrl: string;
  description: string;
  artisanName: string;
}

export interface EventItem {
  id: string;
  title: string;
  month: string;
  day: string;
  location: string;
  price: number;
  category: string;
  description: string;
  imageUrl?: string;
}

export interface CartItem {
  product: MarketplaceItem;
  quantity: number;
}

export interface JobItem {
  id: string;
  title: string;
  community: string;
  location: string;
  type: string;
  stipend: string;
  description: string;
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  community: string;
  timeAgo: string;
  replies: number;
  likes: number;
  tag: string;
}
