import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our world of delicious recipes and fast food! We are passionate about
          bringing you the best culinary experiences, from mouth-watering recipes you can 
          easily make at home to the latest trends in fast food.
        </p>
        <p>
          Whether you're a cooking enthusiast looking for new recipes or a fast food lover 
          exploring new flavors, you'll find something exciting here.
        </p>
        <h3>Our Mission</h3>
        <p>
          To inspire and delight food enthusiasts with creative and flavorful recipes, and 
          to explore the world of fast food with innovative and delicious offerings.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have a question or feedback? Feel free to reach out to us at -
          <a href="mailto:bilalxd512@gmail.com">bilalxd512@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
