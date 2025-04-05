import { Analytics } from "../components/Analytics";

import "./About.css";

export const About = () => {
    return(
      <div className="forbackground">
      <div className="about-us-container">
      <section className="history-section">
      <p class="subpara">Welcome to <strong>Food Villa</strong>, where passion for food and community come together to create memorable dining experiences.</p>
    
        <h2>Our History</h2>
        <p>
        Welcome to Food Villa, where every dish tells a story and every meal is an adventure. Our journey began decades ago, in the bustling streets of a vibrant culinary landscape. Inspired by the diverse flavors and rich traditions of Desi, Chinese, Barbecue, and Fast Food cuisines, our founders set out to create a dining experience like no other.

        The seeds of Food Villa were sown in the heart of a bustling market, where the tantalizing aroma of spices mingled with the sizzle of grills and the laughter of friends gathered around shared meals. It was here that the vision for Food Villa took root—a vision to celebrate the melting pot of flavors that define our cultural heritage.

        With boundless passion and unwavering dedication, our team embarked on a culinary expedition, scouring the globe for the finest ingredients and time-honored recipes. From the bustling streets of Lahore to the vibrant markets of Beijing, we traversed continents in search of culinary treasures, weaving together a tapestry of flavors that would captivate the senses and delight the palate.

        Our journey was not without its challenges. We weathered storms and navigated uncharted waters, but through it all, our commitment to excellence never wavered. Each dish that graces our menu is a testament to our relentless pursuit of perfection—a fusion of tradition and innovation, crafted with love and served with pride.

        As the sun sets on another day, we invite you to join us on a culinary voyage like no other. Whether you crave the fiery spices of Desi cuisine, the delicate flavors of Chinese delicacies, the smoky allure of Barbecue classics, or the indulgent comforts of Fast Food favorites, Food Villa promises an unforgettable dining experience that will transport you to distant lands and leave you craving more.

        Come, embark on a journey of flavor with us. Let your taste buds be your guide as you explore the culinary wonders that await at Food Villa. Adventure awaits at every turn, and every meal is an opportunity to discover something new. Welcome aboard—your table is waiting.
        </p>
      </section>

      <Analytics />

      <section className="vision-goals-section">
        <h2>Our Vision & Our Mission</h2>
        <div className="vision">
          <h3>Our Vision</h3>

          <section class="vision">
              <div class="vision-content">
                <p class="vision-para">Become leading name in Restaurant Business in National and International level & by becoming first choice of Indo-Pak Grill foods.</p>
              </div>
              <div class="vision-image">
                <img src={'/images/vision.jpeg'} alt="Vision Image"></img>
              </div>
            </section>

        </div>

       <br />

        <div className="mission">
          <h3>Our Mission</h3>

          <section class="mission">
              <div class="mission-content">
                <p class="mission-para">Become leading name in Restaurant Business in National and International level & by becoming first choice of Indo-Pak Grill foods.</p>
              </div>
              <div class="mission-image">
                <img src={'/images/mission1.jpeg'} alt="Mission Image"></img>
              </div>
            </section>
            
        </div>
      </section>

      <section className="extra-section">
        <h2>What Makes Us Amazing</h2>
        <p>
        "At Food Villa, we pride ourselves on delivering an unparalleled dining experience that transcends mere sustenance. Our commitment to excellence permeates every aspect of our establishment, from the meticulously curated menu showcasing a fusion of flavors from around the globe to the warm and inviting ambiance that envelops our guests from the moment they step through our doors. But what truly sets us apart is our unwavering dedication to creating moments of pure culinary delight. Each dish is not just a masterpiece of flavor and presentation but a testament to the passion and creativity of our culinary artisans. From our signature dishes bursting with bold, vibrant flavors to our commitment to using only the freshest, locally sourced ingredients, every detail is crafted with care to ensure a dining experience that is nothing short of extraordinary. At Food Villa, we invite you to embark on a journey of gastronomic exploration, where every bite is a revelation and every meal is an unforgettable adventure."
        </p>
      </section>
    </div>
    </div>
    );
  };