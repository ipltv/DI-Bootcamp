import { useState, useEffect } from 'react'
import { createClient } from 'pexels';
import './App.css'
import PhotoGallery from './components/PhotoGallery'


function App() {

  const client = createClient(import.meta.env.VITE_APP_API_KEY);
  const [photos, setPhotos] = useState(null);
  const [query, setQuery] = useState('Nature');
  const [page, setPage] = useState(1);


  const fetchPhotos = async (customQuery = query, pageNum = page) => {
    if (customQuery) {
      const response = await client.photos.search({ query: customQuery, per_page: 30, page: pageNum });
      setPhotos(response.photos);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleSearch = (customQuery = query) => {
    const newPage = 1;
    setPage(newPage);
    fetchPhotos(customQuery, newPage);
  };

  const handlePrev = () => {
    const newPage = page - 1;
    setPage(newPage);
    fetchPhotos(query, newPage);
  };

  const handleNext = () => {
    const newPage = page + 1;
    setPage(newPage);
    fetchPhotos(query, newPage);
  };
  return (
    <>
      <div id="cover">
        <div className='predefine-filters'>
          <button onClick={() => {setQuery("Mountain"); handleSearch("Mountain")}}>Mountain</button>
          <button onClick={() => {setQuery("Beaches"); handleSearch("Beaches")}}>Beaches</button>
          <button onClick={() => {setQuery("Birds"); handleSearch("Birds")}}>Birds</button>
          <button onClick={() => {setQuery("Food"); handleSearch("Food")}}>Food</button>
        </div>
        <div className='search-bar'>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search photos..." />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className='pagination-controls'>
          <button disabled={page === 1} onClick={handlePrev}>
            ← Prev
          </button>
          <button onClick={ handleNext }>
            Next →
          </button>
        </div>
        <h2 className='picture-header'>{query} Pictures</h2>
        {photos ? (
          <PhotoGallery photos={photos} />
        ) : (
          <p>Loading photo...</p>
        )}
      </div>
    </>
  )
}

export default App
