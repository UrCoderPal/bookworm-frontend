import React, { useEffect, useState } from 'react';
import './EBookList.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';
import Header from '../Navbars/Header';

function openPdfInNewTab(pdfUrl) {
  window.open(pdfUrl, '_blank');
}
function EBookList() {
  const [list, setList] = useState([
    {
      "id": 1,
      "productName": "eBook",
      "price": 0.0,
      "isRentable": true,
      "isLibrary": true,
      "rentPerDay": 0.0,
      "minRentDays": 0.0
    }
  ]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/products/getByType/1", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("Token")
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log("Result ", result);
        setList(result);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function addToCart(productId, type) {
    {if (!localStorage.getItem("Token")) {
      window.location.href = "SignIn"; // Redirect to SignIn page
}}
    const customerId = 1;

    fetch("http://localhost:8080/api/cart/addtocart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("Token")
      },
      body: JSON.stringify({
        productId: productId,
        customerId: customerId,
        type: type
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.error("Error", error);
      });
  }

  return (<>

<Header/>
    <div className='container'>
      <h1 className='text-center'>EBook List</h1>
      <div className='row'>
        {list.map((listing, index) => (
          <div
            key={index}
            className='col-md-4 mb-4'
          >
            <div className='card' style={{ cursor: 'pointer' }}>
              <img
                style={{ height: '300px', objectFit: 'cover', borderTop: '10px solid white' }}
                src={`Images/image${index + 1}.jpg`}
                alt={listing.productName}
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>{listing.id}</h5>
                <h5 className='card-title'>{listing.productName}</h5>
                <p className='card-text'>{listing.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className='btn btn-primary'
                    onClick={() => addToCart(listing.id, "buy")}
                  >
                    Buy
                  </button>

                  


                  <button
                    className='btn btn-primary'
                    onClick={() => addToCart(listing.id, "rent")}
                  >
                    Rent
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default EBookList;
