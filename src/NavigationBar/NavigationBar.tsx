import styles from './Navigation.module.css'
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";


function NavigationBar() {
    return <>
        <div className={styles.header}>
            <div className={styles.headeritem}>
                <TiThMenu size={30} />
            </div>

            <div className={styles.headeritem}>
                <a href="#"><img src='public\rwslogo.png'></img></a>
            </div>

            <div className={styles.headeritem}>
                <IoIosSearch size={30} />
            </div>

        </div>
    </>
}
export default NavigationBar;