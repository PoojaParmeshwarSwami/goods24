import '/src/components/footer/footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer =()=>{
    return(<>
      <div className="footerDiv">
            <p style={{ fontSize:"13px",marginLeft:'10px'}}> Developed By <br />
                        <a href="https://www.microdynamicsoftware.com"> Microdynamic Software Pvt.Ltd</a>
                    </p>
                <h3 className='footer-text'>follow Us</h3>
                <a href="https://www.whatsapp.com"><FaWhatsappSquare className='icons' /> </a>
                <a href="https://www.youtube.com"><FaYoutube className='icons' /></a>
                <a href="https://www.instagram.com"><FaInstagram className='icons' /></a>
            </div>

        
        </>)
};export default Footer;