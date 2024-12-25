import { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import logo from '/rwslogo.svg';
import { Squash as Hamburger } from 'hamburger-react'
import { CiSearch } from "react-icons/ci";
import SearchBar from './SearchBar/SearchBar';

function Navbar() {

    const [searchBar, openSearchBar] = useState(false);
    const [menuBar, openMenuBar] = useState(false);

    useEffect(() => {
        console.log(menuBar ? 'Menu Open' : 'Menu Closed');
        const toggableMenu = document.getElementById('toggableMenu');
        if (toggableMenu) {
            if (menuBar) {
                toggableMenu.style.display = 'flex';
                toggableMenu.animate([
                    { transform: 'translateX(-100%)' },
                    { transform: 'translateX(0)' }
                ], {
                    duration: 500,
                    fill: 'forwards'
                })
            }
            else {
                toggableMenu.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-100%)' }
                ], {
                    duration: 500,
                    fill: 'forwards'
                })
                setTimeout(() => {
                    toggableMenu.style.display = 'none';

                }, 500);
            }

        }
    }, [menuBar]);

    useEffect(() => {
        console.log(searchBar ? 'Search Open' : 'Search Closed');

    }, [searchBar]);

    const handleClick = () => {
        openMenuBar(!menuBar);
    }

    const handleClick2 = () => {
        openSearchBar(!searchBar);
    }

    return (
        <>
            <SearchBar />
            <nav className={style.navbar}>
                <div id='menu' className={style.menuButton}>
                    <Hamburger toggled={menuBar} toggle={handleClick} duration={0.5} color='white' />
                </div>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <CiSearch className={style.search} onClick={handleClick2} color='white' size="2rem" />
            </nav>
        </>
    );
}

export default Navbar;