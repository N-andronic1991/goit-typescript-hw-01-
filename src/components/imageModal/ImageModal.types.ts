export interface ImageModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  onClose: () => void;
  imageUrl: string;
}
