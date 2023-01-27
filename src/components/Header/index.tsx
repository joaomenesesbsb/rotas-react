import './styles.css'
import homeImg from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav className='nav-main container'>
                <div className='nav-content'>
                    <NavLink to={'/home'} className={({isActive})=> isActive ? "nav-item menu-active" : "nav-item"} >
                        inicio
                    </NavLink>
                    <NavLink to={'/products'} className={({isActive})=> isActive ? "nav-item menu-active" : "nav-item"}>
                        Produtos
                    </NavLink>
                    <NavLink to={'/about'} className={({isActive})=> isActive ? "nav-item menu-active" : "nav-item"}>
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