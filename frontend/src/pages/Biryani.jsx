import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './menu.css';


export const Biryani = () => {
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
            <span className="latter">EXPLORE OUR FOOD VILLA</span> "BIRYANI & RICE" </h1>

    <div className="menu-container">
        <h1 className="menu-heading"><marquee>Biryani & Rice Dishes</marquee></h1>
        <div class="menu">
            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b1.png'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Chicken Biryani</h2>
                    <p>Chicken Biryani topped with fried onions, cilantro, added flavor topped with onions, sliced chilies, and fresh leaves.</p>
                    <p class="price">PKR 500/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b2.png'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Beef Biryani</h2>
                    <p>
                        Beef Biryani topped with crispy fried shallots, chopped mint leaves, and roasted cashews for extra crunch and aroma.</p>
                    <p class="price">PKR 600/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b3.png'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Mutton Biryani</h2>
                    <p>
                       Mutton Biryani topped with onions, sliced chilies, and fresh coriander leaves for enhanced flavor.</p>
                    <p class="price">PKR 800/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b4.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Chicken Pulao</h2>
                    <p>
                        Chicken Pulao garnished with fried onions, sliced carrots, and chopped cilantro for added texture and freshness heightened fragrance and taste.</p>
                    <p class="price">PKR 550/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b5.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Beef Pulao</h2>
                    <p>
                      Beef Pulao adorned with golden-fried garlic slices, green peas, and a sprinkle of garam masala for heightened fragrance and taste.</p>
                    <p class="price">PKR 650/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/b6.png'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Mutton Pulao</h2>
                    <p>
                        Mutton Pulao topped with caramelized onions, fried cashews, and aromatic mint leaves for a delightful burst of flavor.</p>
                    <p class="price">PKR 850/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

         
        </div>
    </div>
    </div>
   </>
    );
  };