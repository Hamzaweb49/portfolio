import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerContainer container">
            <h1 className="footerTitle">Hamza</h1>
            <ul className="footerList">
                <li>
                    <a href="#about" className="footerLink">About</a>
                </li>
                
                <li>
                    <a href="#services" className="footerLink">Services</a>
                </li>
                <li>
                    <a href="#portfolio" className="footerLink">Portfolio</a>
                </li>
            </ul>

            <div className="footerSocial">
                <a href="https://www.instagram.com/_itxhamza_/" className="footerSocialIcon" target='_blank'><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/hamza-azam-885493248/" className="footerSocialIcon" target='_blank'><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/Hamzaweb49" className="footerSocialIcon" target='_blank'><i class="bx bxl-github"></i></a>
            </div>
            <span className='footerCopy'>Copyright &#169; DeveloperHamza. All rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer
