import styles from './AboutUs.module.css'

function AboutUs() {
    return (
        <div className={styles.wrapper} id="about">
            <h1 className='title'>
                Rose Window Studios makes films.
            </h1>
            <h2>
                Rose Window Studios is the student media organization at Pacific Lutheran University that specializes in creating short films.
            </h2>
            <div className={styles.centerText}>
                <h3>
                    We are:
                </h3>
                <ul>
                    <li className='listItem'>Student led</li>
                    <li className='listItem'>Putting practical filmaking skills first</li>
                    <li className='listItem'>Allowing student to lean what the professional filmmaking process is like</li>
                    <li className='listItem'>Open to all students of any majot/minor or year</li>
                    <li className='listItem'>Always growing</li>
                </ul>
                <h3>
                    We Value:
                </h3>
                <ul>
                    <li className='listItem'>Prcatical skill development</li>
                    <li className='listItem'>Student advocacy in the film industry</li>
                    <li className='listItem'>Local film-community ivolvement</li>
                    <li className='listItem'>Every student's creative vision</li>
                    <li className='listItem'>Film as an artform</li>
                    <li className='listItem'>Collaboration on every project</li>
                </ul>
            </div>
            <h4>
                We see film as a beautiful opportunity to work together with like-minded creatives.<br />
                We want to urge others to not see it as content or a single-person's work.<br />
                Everything you see in our projects are produced from scratch by our team that year!<br />
            </h4>
            <h5>
                Follow our social media to stay updated with our projects! <br />
                Find out more about PLU’s other Student Media organizations <a href='https://www.plu.edu/studentmedia/' target='_blank'>here</a>
            </h5>
        </div>
    );
}

export default AboutUs;