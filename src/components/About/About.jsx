import React from "react";
import pic from '../../../Assets/about/aboutImage.png';
import pic1 from '../../../Assets/about/cursorIcon.png';
import pic2 from '../../../Assets/about/serverIcon.png';
import pic3 from '../../../Assets/about/uiIcon.png';
import styles from './About.module.css'


export const About=()=>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={pic} alt="Me Sitting with a laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={pic1} alt="Cursor Icon"  />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={pic2} alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized backend systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={pic3} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created systems as well</p>
                        </div>
                    </li>
                
                
                </ul>
            </div>
        </section>
    )
}