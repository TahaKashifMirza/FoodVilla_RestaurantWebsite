import './Deals.css';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const DealsSection = () => {
  const deals = [
    { title: 'Deal 1', description: '2 Classic Zinger Burger + 1 Classic Chicken Shawarma', price: 'PKR 4000/=' },
    { title: 'Deal 1', description: '1 Behari Boti + 2 Seekh Kabab + 1 Malai Bti', price: 'PKR 5500/=' },
    { title: 'Deal 3', description: '1 Chicken Biryani + 1 Beef Biryani + 1 Chicken Pulao', price: 'PKR 6000/=' },
    { title: 'Deal 4', description: '1 Mutton Biryani + 1 Mutton Seekh Kabab + 1 BBQ Burger', price: 'PKR 10,000/=' },
  ];

  const [clickedOrder, setClickedOrder] = useState(false);

  useEffect(() => {
      if (clickedOrder) {
          Swal.fire({
              title: "Do you want to order?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Yes",
              denyButtonText: "No"
          }).then((result) => {
              if (result.isConfirmed) {
                  Swal.fire("Your Order Has Been Placed!", "", "success");
              } else if (result.isDenied) {
                  Swal.fire("Your Order Has Been Cancled!", "", "info");
              }
          });
      }
  }, [clickedOrder]);


  return (
    <div className="deals-section" id="deals">
      <h1 className='dealsheading'>OUR EXCLUSIVE DEALS</h1>
      <div className="deals-container">
        {deals.map((deal, index) => (
          <div className="deal-item" key={index}>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <span className="price">{deal.price}</span>
            <button className="order-now"  type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};