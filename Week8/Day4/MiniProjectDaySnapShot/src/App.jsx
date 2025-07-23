import { useState, useEffect } from 'react'
import { createClient } from 'pexels';
import './App.css'
import PhotoGallery from './components/PhotoGallery'


function App() {

  const client = createClient(import.meta.env.VITE_APP_API_KEY);
  const [photos, setPhotos] = useState(null);
  const query = 'Nature';

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await client.photos.search({ query, per_page: 30 });
      setPhotos(response.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <>
      {console.log(photos)}
      <div id="cover">
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
