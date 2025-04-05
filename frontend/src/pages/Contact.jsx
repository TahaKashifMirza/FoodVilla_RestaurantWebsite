import "./Contact.css"
import { useState } from 'react';

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  }) ;
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setContact({
      ...contact,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  
  return (
    <>
      <section className="section-contact">
        <div className='contact-content container'>
         
          <h1 className='book-table-heading'>
            <span className="latter">BOOK YOUR TABLE</span> ON TABLE TREK
          </h1>
        </div>
        <br/>

        
        <div className='container grid grid-two-cols'>
          <div className='contact-img'>
            <img src={'/images/logo.png'} alt='logo' />
          </div>
          
          
          <section className='section-form'>
          <h1 className="main-heading"> Have a Question? Contact Us!</h1>
            <form onSubmit={handleSubmit}>
              <div className=''>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' id="username" onChange={handleInput}
                value={contact.username} autoComplete='off' placeholder="Enter your username..." required />
              </div>
              <div className=''>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id="email" onChange={handleInput}
                value={contact.email} autoComplete='off' placeholder="Enter your email..." required />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea type='text' name='message' id="message" onChange={handleInput}
                value={contact.message} autoComplete='off' placeholder="Enter your message..." required cols="30" rows="6" />
              </div>
              <div>
                <br />
                <button type='submit'><strong>Submit</strong></button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};