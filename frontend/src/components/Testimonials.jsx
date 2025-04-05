import './Testimonials.css';

export const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', message: 'The best dining experience I have ever had! The food is amazing and the service is excellent.' },
    { name: 'Jane Smith', message: 'Food Villa offers a variety of delicious dishes that never fail to impress. Highly recommended!' },
    { name: 'Michael Johnson', message: 'Amazing flavors and top-notch service. Food Villa is my go-to place for a great meal.' },
    { name: 'Emily Davis', message: 'I love the ambiance and the food at Food Villa. Every visit is a delightful experience.' },
    { name: 'Robert Brown', message: 'The quality of the food and the friendly staff make this restaurant stand out. A must-visit!' },
    { name: 'Jessica Wilson', message: 'Food Villa always exceeds my expectations. The dishes are creative and delicious.' },
    { name: 'William Jones', message: 'A fantastic place to dine with friends and family. The food and atmosphere are superb.' },
    { name: 'Sophia Martinez', message: 'The best place to enjoy a meal. The flavors are unique and the presentation is beautiful.' },
    { name: 'David Garcia', message: 'Food Villa never disappoints. The food is always fresh and the service is impeccable.' },
    { name: 'Emma Rodriguez', message: 'A wonderful restaurant with a great selection of dishes. The staff is very welcoming.' },
  ];

  return (
    <div className="testimonials-section" id="testimonials">
      <h1 className='dealsheading'>TESTIMONIALS</h1>
      <div className="testimonials-container">
        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p>"{testimonial.message}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};