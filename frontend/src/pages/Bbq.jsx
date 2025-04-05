import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './menu.css';

export const Bbq = () => {
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
            <span className="latter">EXPLORE OUR FOOD VILLA</span> "BAR-BE-QUE" </h1>

    <div className="menu-container">
        <h1 className="menu-heading"><marquee>Bar-Be-Que Dishes</marquee></h1>
        <div class="menu">
            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq1.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Behari Boti</h2>
                    <p>Behari Boti is marinated with a blend of yogurt, spices, and papaya paste, giving it a tender texture and a distinctive smoky flavor.</p>
                    <p class="price">PKR 650/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq2.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Chicken Tikka</h2>
                    <p>
                    Chicken Tikka is marinated in a flavorful mixture of yogurt, spices, and lemon juice, resulting in juicy, tender pieces of chicken with a tantalizing charred exterior.</p>
                    <p class="price">PKR 700/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq3.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Seekh Kabab</h2>
                    <p>
                    Seekh Kabab is made with minced meat blended with aromatic spices , skewered onto rods , offering a succulent intense flavor.</p>
                    <p class="price">PKR 600/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq4.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Malai Boti</h2>
                    <p>
                    Malai Boti tender pieces of marinated chicken, infused with a mixture of yogurt, cream, and spices, offering a delightful and richness.</p>
                    <p class="price">PKR 650/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq5.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Mutton Seekh Kabab</h2>
                    <p>
                    Mutton Seekh Kabab boasts spiced minced mutton molded onto skewers and grilled to perfection, offering a succulent taste with a hint of smokiness</p>
                    <p class="price">PKR 800/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

            <div class="menu-item">
            <img className='menu-imgs' src={'/images/bbq6.jpg'} alt="Food Villa Menu" />
                <div class="item-details">
                    <h2>Beef Tikka</h2>
                    <p>
                    Beef Tikka features tender chunks of beef marinated in a flavorful blend of spices and yogurt, delivering a rich and smoky taste with every bite.</p>
                    <p class="price">PKR 750/=</p>
                    <button type="button" onClick={() => setClickedOrder(true)}>Order Now</button>
                </div>
            </div>

        </div>
    </div>
    </div>
   </>
    );
  };