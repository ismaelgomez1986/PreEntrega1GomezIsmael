import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import CartWidget from './CartWidget';

function NavBar({ img}) {

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 mx-auto">
                <img src={img} className="h-8 mr-3 sm:h-9 md:h-10" />
                <Link className="btn btn-ghost normal-case text-xl italic">SportWorld Store</Link>
                <CartWidget />
            </div>
            <div className="navbar-end hidden lg:flex mx-auto">
                <ul className="menu menu-horizontal p-0">
                <Link to={'/'}>
                            <li className='btn-ghost mx-6 px-1 cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/category/zapatillas'}>
                            <li className='btn-ghost mx-6 px-1 cursor-pointer dropdown dropdown-end'>Zapatillas</li>
                        </Link>
                        <Link to={'/category/poleras'}>
                            <li className='btn-ghost mx-6 px-1 cursor-pointer'>Poleras</li>
                        </Link>
                </ul>
            </div>
            <div className="dropdown navbar-end mx-auto">
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                <Link to={'/'}>
                            <li className='btn-ghost cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/category/zapatillas'}>
                            <li className='btn-ghost cursor-pointer dropdown dropdown-end'>Zapatillas</li>
                        </Link>
                        <Link to={'/category/poleras'}>
                            <li className='btn-ghost cursor-pointer'>Poleras</li>
                        </Link>
                </ul>
                <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    )
}
export default NavBar