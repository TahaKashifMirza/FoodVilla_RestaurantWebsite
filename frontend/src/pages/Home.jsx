
import './Home.css';
import {DealsSection} from '../components/Deals';
import { Analytics } from "../components/Analytics";
import {Testimonials} from '../components/Testimonials';


export const Home = () => {

  return (
    <div>
      <div className="home-section" id="home">
        <div className="text-content">
          <h1 className="homeheading">WELCOME TO FOOD VILLA</h1>
          <p className="homepara">Discover A World Of Flavors At Food Villa</p>
          <p className="homepara">Cooked to order, always served hot!</p>
        </div>
        <div className="image-content">
          <img src={'/images/homelogo.png'} alt="Food Villa Home Logo" />
        </div>
      </div>
      <br/>
      <DealsSection />
      <br/>
      <Analytics />
      <Testimonials />
      <br/>
        {/* Location Section */}
        <div className="location-section" id="location">
        <h1 className='dealsheading'>OUR LOCATION</h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1X2dyZZLflB-a76-ep7TbKmliufg&hl=en&ehbc=2E312F"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};