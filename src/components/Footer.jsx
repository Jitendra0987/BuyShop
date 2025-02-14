
import "../css/Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are committed to delivering exceptional services and innovative solutions to our customers.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Business St, Tech City</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 YourCompany | All Rights Reserved | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
