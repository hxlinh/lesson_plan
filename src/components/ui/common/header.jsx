import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <h1 className='header-title'>SCISTU25</h1>
            </header>
    );
}

export default Header;