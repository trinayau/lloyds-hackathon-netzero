import {Outlet} from 'react-router-dom';
import {Navbar, Footer} from '../components';
import './index.css';

const Layout = () => {
    return ( <>
        <Navbar />
        <Outlet/>
        <Footer />
    </> );
}
 
export default Layout;
