import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/esm/Spinner';
import { withRouter } from 'react-router-dom';

export default function Authorpage() {
    const { id } = useParams();
    const [autor, setautor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate()


    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const autor = await axios.get('http://localhost/S3-L5-PROGETTO-SETTIMANALE-BACKEND2-/Backend/wp-json/wp/v2/users/'+id);
            setautor(autor.data);
    
            
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

console.log(autor)
  return (
   <Container>
     <h1 className='text-center my-5'>Dettaglio del Profilo</h1>
  {loading ? <div className='mx-auto text-center'> <Spinner  animation="grow" variant="success" /></div> : <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={autor.avatar_urls[96]} />
      <Card.Body>
        <Card.Title>{autor.name}</Card.Title>
        <Card.Text>
        {autor.description}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(-1)}>Torna indietro</Button>
       
      
      </Card.Body>
    </Card>}
  
  
   

   </Container>
  )
}
