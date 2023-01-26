import { NavLink } from 'react-router-dom';
import './styles.css';

export default function NavProduct(){

    return (
        <main className='card-nav-product mgt20 container'>
            <NavLink to={'/'} className='category-product'>
                Computadores
            </NavLink>
            <NavLink to={'/'} className='category-product'>
                Eletrônicos
            </NavLink>
            <NavLink to={'/'} className='category-product'>
                Livros
            </NavLink>
        </main>
    )
}