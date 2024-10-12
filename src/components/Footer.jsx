import React from 'react'
import { Router,Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='Footer'>
            <footer role="navigation">
      <div class="footer-content">
        <div class="footer-logo-section">
          <img
            class="footer-logo"
            src="./media/logo2.png"
            alt="RealHome Logo"
          />
        </div>
        <div class="footer-links">
          <a href="/buy">Buy</a>
          <a href="/rent">Rent</a>
          <a href="/sell">Sell</a>
          <a href="/agents">Agents</a>
          <a href="/favourites">Favourites</a>
        </div>
        <div class="footer-user">
          <a href="/login"><i class="fas fa-user"></i> Login</a>
        </div>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 Powered by Us</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer