import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Cart.css";
import Header from '../../CompPages/Navbars/Header'
function BeneficiaryList(props) {

  let {userId} = useParams();
  // const [beneficiary, setBeneficiary] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");

  const [cartItem, setCartItem] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);
  const [rentedBooks, setRentedBook] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);
  const [buyBooks, setBuyBooks] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);

  function addFilter(type) {
    if (type === "all") {
      console.log("all")
      setSelectedOption("all");
    }

    if (type === "buy") {
      console.log("buy")
      setSelectedOption("buy");
    }
    if (type === "rent") {
      console.log("rent")
      setSelectedOption("rent");
    }
  }
  
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/cart/getbycustomer/2",{
  //     headers:{
  //       Authorization:"Bearer "+localStorage.getItem("Token")
  //     }
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error(`Request failed with status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((result) => {
  //       const rentedItems = result.filter((item) => item.type === "rent");
  //       const buyItems = result.filter((item) => item.type === "buy");
  //       setRentedBook(rentedItems);
  //       setBuyBooks(buyItems);
  //       setCartItem(result);
  //     })
  //     .catch((error) => {
  //       // Handle error, e.g., display an error message
      
  //       console.error("API request error:", error);
  //     });
  // },[]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/cart/getbycustomer/${userId}`,{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("Token")
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        const rentedItems = result.filter((item) => item.type === "rent");
        const buyItems = result.filter((item) => item.type === "buy");
        setRentedBook(rentedItems);
        setBuyBooks(buyItems);
        setCartItem(result);
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
      
        console.error("API request error:", error);
      });
  },[]);


  function placeOrder()
{
  fetch(`http://localhost:8080/api/myshelf/addtoshelf/${localStorage.getItem('userId')}`,{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("Token")
    }

  }).then((res)=>res.json)
  .then((res)=>{console.log("res")
  window.alert("Your Order Has Been Placed...Please Check Shelf")
  window.location.reload();
  })
  
}


// function placeOrder() {
//   const userId = localStorage.getItem('userId');
//   const authorizationHeader = { "Authorization": "Bearer " + localStorage.getItem("Token") };

//   if (selectedOption === "buy") {
//     // Make API call to add to the user's shelf for buy books
//     fetch(`http://localhost:8080/api/myshelf/addtoshelf/${userId}`, {
//       method: "POST",
//       headers: authorizationHeader,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         window.alert("Your Order for Buy Books Has Been Placed...Please Check Shelf");
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("API request error:", error);
//       });
//   } else if (selectedOption === "rent") {
//     // Make API call to add to the user's library for rent books
//     fetch(`http://localhost:8080/api/library/addtolibrary/${userId}`, {
//       method: "POST",
//       headers: authorizationHeader,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         window.alert("Your Order for Rent Books Has Been Placed...Please Check Library");
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("API request error:", error);
//       });
//   } else {
//     // Handle the case when neither "buy" nor "rent" is selected (you can add an error message or handle it accordingly)
//     console.error("Invalid selectedOption:", selectedOption);
//   }
// }

  
  return (
    <>
               <Header/>
    <div className="scrollable-container">
      <div className="beneficiary-list-container">
        <h2 className="section-heading">Cart Items</h2>
        <div className="add-beneficiary-button"></div>
        <div className="options-container">
          <div className="options-buttons">
            <button
              type="button"
              className="btn btn-rented"
              onClick={() => addFilter("rent")}
            >
              Rented
            </button>
            <button
              id="button_1"
              type="button"
              className="btn btn-build"
              onClick={() => addFilter("buy")}
            >
              Buy
            </button>
            <button
              type="button"
              className="btn btn-build"
              onClick={() => addFilter("all")}
            >
              All
            </button>
          </div>
        </div>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                {/* <th>Quantity</th> */}
                <th>Price</th>
                {/* <th>Total</th> */}
              </tr>
            </thead>

            {selectedOption === "all" && (
              <tbody>
                {cartItem.map((cart) => (
                  <tr key={cart.id}>
                    <td>{cart.id}</td>
                    <td>{cart.productName}</td>
                    {/* <td>{cart.quantity}</td> */}
                    <td>${cart.price}</td>
                    {/* <td>${cart.totalPrice}</td> */}
                  </tr>
                ))}
              </tbody>
            )}

            {selectedOption === "rent" && (
              <tbody>
                {rentedBooks.map((cart) => (
                  <tr key={cart.id}>
                    <td>{cart.id}</td>
                    <td>{cart.productName}</td>
                    {/* <td>{cart.quantity}</td> */}
                    <td>${cart.price}</td>
                    {/* <td>${cart.totalPrice}</td> */}
                  </tr>
                ))}
              </tbody>
            )}

            {selectedOption === "buy" && (
              <tbody>
                {buyBooks.map((cart) => (
                  <tr key={cart.id}>
                    <td>{cart.id}</td>
                    <td>{cart.productName}</td>
                    {/* <td>{cart.quantity}</td> */}
                    <td>${cart.price}</td>
                    {/* <td>${cart.totalPrice}</td> */}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <button id="place" type="button" className="btn btn-primary"onClick={()=>{placeOrder()}}>
            Place Order
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default BeneficiaryList;
