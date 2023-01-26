import './styles.css'
import homeImg from '../../assets/home.png';

export default function Header() {

    return (
        <header>
            <nav className='nav-main container'>
                <div className='nav-content'>
                    <div className='nav-item'>inicio</div>
                    <div className='nav-item'>Produtos</div>
                    <div className='nav-item'>sobre nós</div>
                </div>
                <img src={homeImg} alt="home" />
            </nav>
        </header>
    );
}