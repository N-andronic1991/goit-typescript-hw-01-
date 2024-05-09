import { ImageCardProps } from './ImageCard.types';
const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  onShowModal,
}) => {
  return (
    <div>
      <img
        onClick={() => onShowModal(urls.regular)}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};
export default ImageCard;
