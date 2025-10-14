
const Footer = ()=>{
    return(
        <>
            <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h4>My Company</h4>
          <p>Innovating your digital future.</p>
        </div>

        <div className="footer-section links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025  My Company. All rights reserved.</p>
      </div>
    </footer>
        </>
    )
}

export default Footer;