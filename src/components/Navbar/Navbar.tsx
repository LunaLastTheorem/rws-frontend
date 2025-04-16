import { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import logo from '/rwslogo.svg';
import { Squash as Hamburger } from 'hamburger-react'
import { CiSearch } from "react-icons/ci";
import SearchBar from './SearchBar/SearchBar';

function Navbar() {

    const [searchBar, openSearchBar] = useState(false);
    const [menuBar, openMenuBar] = useState(false);
    const duration = 300;

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
                    duration: duration,
                    fill: 'forwards'
                })
            }
            else {
                toggableMenu.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-100%)' }
                ], {
                    duration: duration,
                    fill: 'forwards'
                })
                setTimeout(() => {
                    toggableMenu.style.display = 'none';

                }, duration);
            }

        }
    }, [menuBar]);

    useEffect(() => {
        console.log(searchBar ? 'Search Open' : 'Search Closed');
        const toggableSearchBar = document.getElementById("searchcontainer");
        if (toggableSearchBar) {
            if (searchBar) {
                toggableSearchBar.style.display = 'flex';
                toggableSearchBar.animate([
                    { transform: 'translateY(-100%)' },
                    { transform: 'translateY(0)' }
                ], {
                    duration: 250,
                    fill: 'forwards'
                })
            }
            else {
                toggableSearchBar.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-100%)' }
                ], {
                    duration: 250,
                    fill: 'forwards'
                })
                setTimeout(() => {
                    toggableSearchBar.style.display = 'none';

                }, 250);
            }
        }

    }, [searchBar]);

    const toggleMenuBar = () => {
        openMenuBar(!menuBar);
    }

    const toggleSearchBar = () => {
        openSearchBar(!searchBar);
    }

    const doNothing = () => {
        console.log("secret!")
    }

    return (
        <>
            <SearchBar />
            <nav className={style.navbar}>
                <div id='menu' className={style.menuButton}>
                    <Hamburger toggled={menuBar} toggle={toggleMenuBar} duration={duration / 1000} color='white' />
                </div>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                {/* <CiSearch className={style.search} onClick={toggleSearchBar} color='white' size="2rem" /> */}
                <CiSearch className={style.searchInv} onClick={doNothing} color='white' size="2rem" />
            </nav>
        </>
    );
}

export default Navbar;