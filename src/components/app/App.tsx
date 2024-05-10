import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import SearchBar from '../searchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../imageGallery/ImageGallery';
import ErrorMessage from '../errorMessage/ErrorMessage';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import { requestImagesByQuery } from '../../services/api';
import ImageModal from '../imageModal/ImageModal';
import { Photo } from './App.types';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchImages() {
      try {
        setIsError(false);
        setLoading(true);
        const data: { results: Photo[]; total_pages: number } =
          await requestImagesByQuery(searchQuery, page);
        setPhotos(prevPhotos => {
          if (prevPhotos === null) {
            return data.results;
          }
          return [...prevPhotos, ...data.results];
        });

        setShowBtn(data.total_pages > page);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = (searchTerm: string): void => {
    setSearchQuery(searchTerm);
    setPhotos([]);
    setPage(1);
  };

  const loadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (imageUrl: string): void => {
    setShowModal(true);
    setSelectedImgUrl(imageUrl);
  };

  // const openModal: ShowModalFunction = (imageUrl: string): void => {
  //   setShowModal(true);
  //   setSelectedImgUrl(imageUrl);
  // };
  const closeModal = (): void => {
    setShowModal(false);
    setSelectedImgUrl(null);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        position="top-center"
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      {loading && <Loader />}
      {isError && (
        <ErrorMessage message="Oops, something went wrong, please reload the page!" />
      )}
      {photos && <ImageGallery photos={photos} onShowModal={openModal} />}
      {Array.isArray(photos) && photos.length !== 0 && showBtn && (
        <LoadMoreBtn onLoadMore={loadMore} />
      )}
      {selectedImgUrl && (
        <ImageModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={closeModal}
          imageUrl={selectedImgUrl}
        />
      )}
    </>
  );
};

export default App;
