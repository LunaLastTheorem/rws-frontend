import styles from "./FooterComp.module.css"

function FooterComp(){
    return (<>
        <div className= {styles.foot}>
            <div className= {styles.top}>
                <div className= {styles.title}>
                    <img src="./public/rwslogo.png" />
                </div>
                <div className= {styles.links}>
                    <ul id="help">
                        <li>help</li>
                        <li>how to play</li>
                        <li>calculator</li>
                        <li>faq</li>
                    </ul>
                    <ul id="contact">
                        <li>contact</li>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>discord</li>
                        <li>email</li>
                        <li>feedback</li>
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
                <h3>© 2018 - 2024 CBB Blue Chips. All Rights Reserved.</h3>
            </div>
        </div>
    </>)
}
export default FooterComp;