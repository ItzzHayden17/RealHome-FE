import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home'>
          <header>
      <nav class="navbar">
        <div class="logo">
          <a href="index.html" class="logo">
            <img
              href="index.html"
              src="./media/logo3.png"
              alt="RealHome Logo"
            />
          </a>
        </div>
        <ul class="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/buy">Buy</Link></li>
          <li><Link to="/rent">Rent</Link></li>
          <li><Link to="/sell">Sell</Link></li>
          <li><Link to="/agents">Agents</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
      <section class="hero">
      <div class="search-bar">
        <input type="text" placeholder="Search by location, price, type..." />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>
    </section>

    <section class="featured-listings">
      <h2>Featured <span >Listings</span></h2>
      <div class="listings">

        <div class="listing-card">
          <img src="./media/homepage2.jpg" alt="Property Image" />
          <h3>3 Bedroom House</h3>
          <p class="price">ZAR 123 456 789</p>
          <p class="location">Moreleta Park, Pretoria</p>
          <p class="reference">Reference: 111223533</p>
        </div>


        <div class="listing-card">
          <img src="./media/homepage2.jpg" alt="Property Image" />
          <h3>3 Bedroom Townhouse</h3>
          <p class="price">ZAR 123 456 789</p>
          <p class="location">Moreleta Park, Pretoria</p>
          <p class="reference">Reference: 111223533</p>
        </div>

        <div class="listing-card">
          <img src="./media/homepage2.jpg" alt="Property Image" />
          <h3>5 Bedroom House</h3>
          <p class="price">ZAR 123 456 789</p>
          <p class="location">Moreleta Park, Pretoria</p>
          <p class="reference">Reference: 111223533</p>
        </div>

        <div class="listing-card">
          <img src="./media/homepage2.jpg" alt="Property Image" />
          <h3>1 Bedroom Apartment</h3>
          <p class="price">ZAR 123 456 789</p>
          <p class="location">Moreleta Park, Pretoria</p>
          <p class="reference">Reference: 111223533</p>
        </div>


        <div class="listing-card">
          <img src="./media/homepage2.jpg" alt="Property Image" />
          <h3>2 Bedroom Townhouse</h3>
          <p class="price">ZAR 123 456 789</p>
          <p class="location">Moreleta Park, Pretoria</p>
          <p class="reference">Reference: 111223533</p>
        </div>
      </div>
      <div>
        <a href="buy.html" class="view-all-btn">View All Properties</a>
      </div>
    </section>

    <section class="about-us">
      <div class="about-us-title">
        <h2>About <span>RealHome</span></h2>
      </div>
      <div class="about-body">
        <p>
          RealHome is an innovative real estate listing platform designed to
          connect agents and public users in one seamless online space. Whether
          you're looking to buy, sell or rent, RealHome offers a user-friendly
          experience where properties can be easily listed, browsed, and
          managed. Built to cater to both real estate professionals and
          individuals, RealHome aims to simplify the property market by
          providing a centralized, accessible platform for all your real estate
          needs. Whether you're an agent looking to expand your listings or a
          user searching for your next home, RealHome is your trusted digital
          destination.
        </p>
      </div>
    </section>

    <section class="our-agents">
      <h2>Our <span>Agents</span></h2>
      <div class="agents">
        <div class="agent-card">
          <img src="./media/HS1.jpg" alt="Agent Photo" />
          <h3>Piet Pompies</h3>
          <p>Property Practitioner</p>
        </div>
        <div class="agent-card">
          <img src="./media/HS2.jpg" alt="Agent Photo" />
          <h3>Scooby Doo</h3>
          <p>Property Practitioner</p>
        </div>
        <div class="agent-card">
          <img src="./media/HS3.jpg" alt="Agent Photo" />
          <h3>Tannie Sannie</h3>
          <p>Property Practitioner</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home