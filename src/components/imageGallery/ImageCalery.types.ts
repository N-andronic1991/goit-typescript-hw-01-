import { Photo } from '../app/App.types';
export interface ImageGalleryProps {
  photos: Photo[];
  onShowModal: (imageUrl: string) => void;
}
