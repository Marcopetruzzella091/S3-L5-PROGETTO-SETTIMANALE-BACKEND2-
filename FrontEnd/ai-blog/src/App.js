import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './Components/Navbartop';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function App() {
  const [data, setData] = useState([]);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setimage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await axios.get('http://localhost/S3-L5-PROGETTO-SETTIMANALE-BACKEND2-/Backend/wp-json/wp/v2/posts');
        setData(postData.data);

        const mediaData = await axios.get('http://localhost/S3-L5-PROGETTO-SETTIMANALE-BACKEND2-/Backend/wp-json/wp/v2/media/');
        setMedia(mediaData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchImage = async (imageId) => {
    try {
      const response = await axios.get(`http://localhost/S3-L5-PROGETTO-SETTIMANALE-BACKEND2-/Backend/wp-json/wp/v2/media/${imageId}`);
      console.log(setimage(response.data));
    } catch (error) {
      console.error('Si è verificato un errore durante il recupero dei dettagli dell\'immagine:', error);
    }
  };

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Si è verificato un errore: {error.message}</div>;

  return (
    <>
      <Navbartop />
      <Container>
        <h1 className='text-center my-5'>Tutti gli articoli</h1>
        <div className='row'>
          {data.map((post) => {
            const featuredMedia = media.find(mediaItem => mediaItem.id === post.featured_media);
            const imageUrl = featuredMedia ? featuredMedia.source_url : null;

            return (
              <Card className='col-md-4 m-3 p-2' key={post.id} style={{ width: '18rem' }}>
                {imageUrl && <Card.Img variant="top" src={imageUrl} />}
                <Card.Body>
                  <Card.Title>{post.title.rendered}</Card.Title>
                  <Card.Text>
                    {post.excerpt.rendered}
                  </Card.Text>
               {   <Button variant="primary" onClick={() => fetchImage(post.featured_media)}>Dettagli immagine</Button> } 
                    
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default App;
