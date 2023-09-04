import React from 'react'
import './myshelf.css'
import { useEffect,useState } from 'react';
import Header from '../Navbars/Header'

const Library = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:8080/api/myshelf/customer/1", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
           Authorization: "Bearer " + localStorage.getItem("Token")
        }
      })
      .then(res => res.json())
      .then(data => {
       
        setBooks(data); 
         console.log(data)
setLoading(false)
      });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    console.log(books.name);

  return (<>
  <Header/>
  
  <header>
    <h1>My Library</h1>
  </header>

  <div className='row'>
  <div className='card' style={{ cursor: 'pointer',display: 'flex'}}>
  {books.map((book,index) => (
        
        <>
        <img
                style={{ maxHeight: '300px',maxWidth:'500px', objectFit: 'cover', borderTop: '10px solid white' }}
                src={`Images/image${index + 1}.jpg`}
                alt={'image'}
                className='card-img-top'
                width='500'
              />
              <div className='card-body'>
                <h5 className='card-title'>{book?.name}</h5>
              </div>
        </>
        
      ))}
</div>

</div>
  </>
  )
}

export default Library