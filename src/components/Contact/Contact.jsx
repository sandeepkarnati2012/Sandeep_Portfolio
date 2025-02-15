import React from "react";
import styles from './Contact.module.css';
import pic1 from '../../../Assets/contact/emailIcon.png';
import pic2 from '../../../Assets/contact/githubIcon.png';
import pic3 from '../../../Assets/contact/linkedinIcon.png';

export const Contact= () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={pic1} alt="Email Icon" />
                <a href="mailto:sandeepkarnati2012@gmail.com">sandeepkarnati2012@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={pic3} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/sandeep-karnati-424a022b0/">LinkedIn.com</a>
            </li>
            <li className={styles.link}>
                <img src={pic2} alt="Github Icon" />
                <a href="https://github.com/sandeepkarnati2012?tab=repositories">Github</a>
            </li>
        </ul>
    </footer>
}