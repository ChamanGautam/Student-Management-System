import './Footer.css';
import greylogo from "../Img/graylogokmc.png";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="logo-name">
                <img src={greylogo} alt="" />
                <span>Khwaja Moinuddin Chishti Language
                University, Lucknow</span>
            </div>
            <div className="connect-footer">
                <h2>CONNECT</h2>
                <span><i className="bi bi-facebook"></i> Facebook</span>
                <span><i className="bi bi-instagram"></i> Instagram</span>
                <span><i className="bi bi-youtube"></i> Youtube</span>
            </div>
            <div className="contact-footer">
                <h2>CONTACT US</h2>
                <span><i className="bi bi-geo-alt-fill"></i> Sitapur-Hardoi Bypass Road
                Lucknow-226013</span>
                <span><i className="bi bi-telephone-fill"></i> +919651764530</span>
                <span><i className="bi bi-envelope-at-fill"></i> chaman@gmail.com</span>
            </div>
        </div>

    );
}

export default Footer;