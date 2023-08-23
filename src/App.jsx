import './styles/App.scss';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import searchImages from './components/apiCall';
import { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import './styles/Spinner.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSubmit('Cat');
  }, []);

  const handleSubmit = async (value) => {
    try {
      setIsLoading(true);
      const searchResult = await searchImages(value);

      if (searchResult.length === 0) {
        toast.error('İçerik bulunamadı!', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: true,
          theme: "dark",
        });
      } else {
        setImages(searchResult);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
      value = '';
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchForm search={handleSubmit} />
      <ToastContainer />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <span>Görseller hazırlanıyor...</span>
        </div>
      ) : (
        <ImageList imagesPlaceholder={images} />
      )}
    </div>
  );
}

export default App;