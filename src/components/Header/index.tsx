import './styles.css'
import homeImg from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav className='nav-main container'>
                <div className='nav-content'>
                    <NavLink to={'/home'} className='nav-item'>
                        inicio
                    </NavLink>
                    <NavLink to={'/products'} className='nav-item'>
                        Produtos
                    </NavLink>
                    <NavLink to={'/about'} className='nav-item'>
                        Sobre nos
                    </NavLink>
                </div>
                <NavLink to={'/home'}>
                    <img src={homeImg} alt="home" />
                </NavLink>
            </nav>
        </header>
    );
}