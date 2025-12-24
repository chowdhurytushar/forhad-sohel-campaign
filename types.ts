export interface ManifestoItem {
  id: number;
  title: string;
  category: string;
  videoUrl: string; // Placeholder for video/image
  thumbnailUrl?: string; // Thumbnail image for the card
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
}

export interface VideoItem {
  id: number;
  thumbnailUrl: string;
  title: string;
  duration: string;
}

export enum FeedbackType {
  NAMED = 'NAMED',
  ANONYMOUS = 'ANONYMOUS'
}