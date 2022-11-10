import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return ( <footer>
        <ul className="list-unstyled d-flex justify-content-around flex-wrap" >
            <li class="font-weight-bold">Contact:</li>
            <li><LocalPhoneIcon fontSize='small'/> 07489384726</li>
            <li><MailOutlineIcon fontSize='small'/> <a class="text-decoration-none" href="mailto:contact@carbonaltdel.com">contact@carbonaltdel.com</a></li>
        </ul>
    </footer> );
}
 
export default Footer;
