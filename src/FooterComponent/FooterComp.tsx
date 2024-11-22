import styles from "./FooterComp.module.css"
import logo from "/public/rwslogo.png";

function FooterComp(){
    return (<>
        <div className= {styles.foot}>
            <div className= {styles.top}>
                <div className= {styles.title}>
                    <img src={logo} />
                </div>
                <div className= {styles.links}>
                    <ul id="contact">
                        <li>contact</li>
                        <li>email</li>
                    </ul>
                    <ul id="legal">
                        <li>legal</li>
                        <li>privacy</li>
                        <li>terms</li>
                        <li>rules</li>
                    </ul>
                </div>
            </div>

            <div className= {styles.copyright}>
                <h3>© 2023 - 2024 Rose Window Studios. All Rights Reserved.</h3>
            </div>
        </div>
    </>)
}
export default FooterComp;