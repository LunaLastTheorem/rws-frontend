import styles from './Navigation.module.css'
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";


function NavigationBar(){
    return <>
        <div className={styles.header}>
            <TiThMenu size={30}/>
            <a href="#"><img src='public\rwslogo.svg'></img></a>
            <IoIosSearch size={30}/>
        </div>
    </>
}
export default NavigationBar;