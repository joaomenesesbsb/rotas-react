import { NavLink } from 'react-router-dom';
import './styles.css';

export default function NavProduct(){

    return (
        <main className=' mgt20 container'>
            <div className='card-nav-product'>
            <NavLink to={'/products/computers'} className={({isActive})=> isActive ? "category-product menu-active" : "nav-item"}>
                Computadores
            </NavLink>
            <NavLink to={'/products/eletronics'} className={({isActive})=> isActive ? "category-product menu-active" : "nav-item"}>
                Eletrônicos
            </NavLink>
            <NavLink to={'/products/books'} className={({isActive})=> isActive ? "category-product menu-active" : "nav-item"}>
                Livros
            </NavLink>
            </div>
        </main>
    )
}