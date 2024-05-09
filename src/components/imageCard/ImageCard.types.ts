export interface ImageCardProps {
  urls: { regular: string; small: string };
  alt_description: string;
  onShowModal: (imageUrl: string) => void;
}
