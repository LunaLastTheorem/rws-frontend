import styles from './Navigation.module.css'
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";


function NavigationBar() {

    const openMenu = () => {
        console.log("open menu");
    }

    const openSearch = () => {
        console.log("open search")
    }

    return <>
        <div className={styles.header}>
            <div className={styles.headeritem + ' ' + styles.leftbutton} >
                <TiThMenu onClick= {openMenu} className={styles.icon} size={30}/>
                <h1>Menu</h1>
            </div>

            <div className={styles.headeritem}>
                <a href="#"><img src='./rwslogo.png'></img></a>
            </div>

            <div className={styles.headeritem + ' ' + styles.rightbutton}>
                <IoIosSearch onClick = {openSearch} className={styles.icon} size={30}/>
            </div>

        </div>
    </>
}
export default NavigationBar;