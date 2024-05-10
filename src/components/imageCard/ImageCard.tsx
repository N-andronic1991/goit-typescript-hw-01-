import { ImageCardProps } from './ImageCard.types';
import css from './ImageCard.module.css';
const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  onShowModal,
}) => {
  return (
    <div className={css.imgThumb}>
      <img
        onClick={() => urls.regular && onShowModal(urls.regular)}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};
export default ImageCard;
