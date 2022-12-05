function NavBar({ img, children }) {

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 mx-auto">
                <img src={img} className="h-8 mr-3 sm:h-9 md:h-10" />
                <a className="btn btn-ghost normal-case text-xl italic">ChessWorld Store</a>
                <div>{children}</div>
            </div>
            <div className="navbar-end hidden lg:flex ml-20 pl-20">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Prices</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="dropdown navbar-end ml-20">
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Prices</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About Us</a></li>
                </ul>
                <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    )
}
export default NavBar