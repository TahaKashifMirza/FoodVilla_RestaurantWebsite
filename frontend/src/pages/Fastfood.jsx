import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './menu.css';

export const Fastfood = () => {
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
                    // Here you can add code to submit the order or perform any other action after saving
                } else if (result.isDenied) {
                    Swal.fire("Your Order Has Been Cancled!", "", "info");
                }
            });
        }
    }, [clickedOrder]);


    return(
   <>
     <div className="background-img">
    <h1 className='menu-heading'>
            <span className="latter">EXPLORE OUR FOOD VILLA</span> "FAST FOOD" </h1>

    <div className="menu-container">
        <h1 className="menu-heading"><marquee>Fast Food Dishes</marquee></h1>
        <div class="menu">
            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff1.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Classic Chicken Burger</h2>
                    <p>Chicken burger features a juicy grilled or breaded chicken patty topped with fresh lettuce, tomato, onion, and creamy mayo, all nestled between soft burger buns.</p>
                    <p class="price">PKR 699/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff2.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Classic Zinger Burger</h2>
                    <p>
                    Zinger burger comprises juicy and a spicy fried chicken fillet topped with lettuce, mayonnaise, and a tangy chili sauce, all encased in a sesame seed bun all served on a toasted bun.</p>
                    <p class="price">PKR 899/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff3.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>BBQ Bacon Burger</h2>
                    <p>
                    BBQ Bacon Burger consists of a juicy beef patty topped with crispy bacon, melted cheddar cheese, caramelized onions, lettuce, tomato, and tangy BBQ sauce, all served on a toasted bun.</p>
                    <p class="price">PKR 1000/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff4.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Chicken Club Sandwich</h2>
                    <p>
                    Chicken Club Sandwich features layers of grilled or roasted chicken breast, crispy bacon, lettuce, tomato, and mayonnaise, stacked between three slices of toasted bread.</p>
                    <p class="price"> PKR 999/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff5.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Grilled Chicken Sandwich</h2>
                    <p>
                    Grilled Chicken Sandwich consists of tender grilled and juicy chicken breast topped with lettuce, tomato, onions, and a choice of different types of sauce, served on a toasted bun.</p>
                    <p class="price">PKR 1250/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/ff6.jpeg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Classic Chicken Shawarma</h2>
                    <p>
                    Shawarma thinly sliced marinated chicken piled into warm pita bread along with fresh vegetables, tomatoes, onions, and cucumbers, topped with garlic sauce.</p>
                    <p class="price">PKR 550/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

        </div>
    </div>
    </div>
   </>
    );
  };