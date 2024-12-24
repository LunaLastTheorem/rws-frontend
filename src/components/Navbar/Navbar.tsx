import { useState } from 'react';
import style from './NavBar.module.css';
import logo from '/rwslogo.svg';

function Navbar() {

    const [menubar, openMenuBar] = useState(true);
    const [searchBar, openSearchBar] = useState(true);

    const handleClick = () => {
        console.log(menubar);
        openMenuBar(!menubar);
        console.log(menubar ? 'Menu is open' : 'Menu is closed');
    }

    const handleClick2 = () => {
        console.log(searchBar);

        openSearchBar(!searchBar);
        console.log(searchBar ? 'Search is open' : 'Search is closed');
    }

    return (
        <nav className={style.navbar}>
            <button onClick={handleClick}>Menu</button>
            <a href="#"><img src={logo} alt="logo"></img></a>
            <button onClick={handleClick2}>Search</button>
        </nav>
    );
}

export default Navbar;