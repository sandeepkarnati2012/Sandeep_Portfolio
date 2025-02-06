import React from "react";

import styles from "./Hero.module.css"
import image from "../../../Assets/hero/sandeep_pic4.jpg"

export const Hero =()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sandeep Karnati</h1>
            <p className={styles.description}>I'm a Full Stack Developer with 2 years 
                of experience in building scalable web 
                applications using Angular, React, Node.js, and Django. 
                I specialize in front-end and back-end integration,
                 API development, and cloud deployments with AWS, Docker,
                  and Kubernetes. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:sandeepkarnati2012@gmail.com" className={styles.contactBtn}>Contact Me</a>

        </div>
        <img src={image} alt="Sandeep Karnati Image" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}