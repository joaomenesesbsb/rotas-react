import { NavLink } from 'react-router-dom';
import './styles.css';

export default function NavProduct(){

    return (
        <main className=' mgt20 container'>
            <div className='card-nav-product'>
            <NavLink to={'/products/computers'} className='category-product'>
                Computadores
            </NavLink>
            <NavLink to={'/products/eletronics'} className='category-product'>
                Eletrônicos
            </NavLink>
            <NavLink to={'/products/books'} className='category-product'>
                Livros
            </NavLink>
            </div>
        </main>
    )
}