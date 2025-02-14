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
                            <h3>Education</h3>
                            <h4>Master of Science in Computer Science - GPA: 3.4 </h4>
                            <p>Wright State University, Dayton, OH (April 2024)</p>
                            <h4>Bachelor of Science in Information Technology - GPA: 3.3</h4>
                            <p>Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam, India (May 2022)</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={pic2} alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>I build responsive UIs with Angular and React, using NgRx and Redux for state management.
                                 On the back-end, I develop RESTful APIs and microservices with Node.js and Django, 
                                 optimizing performance with Redis caching.I deploy apps using AWS services and 
                                 automate CI/CD with Jenkins and GitLab CI. Docker and Kubernetes help with 
                                 containerization and scaling. For security, I implement JWT, OAuth2, and encryption, 
                                 while monitoring performance with New Relic and AWS CloudWatch.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={pic3} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Goal</h3>
                            <p>My goal is to create technology that makes a real impact—building scalable, secure,
                                 and user-centric applications that solve real-world problems. I strive to continuously learn,
                                  innovate, and push the boundaries of Full Stack Development and Cloud technologies. 
                                  Beyond technical work, I am passionate about knowledge-sharing, fostering innovation, 
                                  and developing leadership skills to drive meaningful change in the tech industry.</p>
                        </div>
                    </li>
                
                
                </ul>
            </div>
        </section>
    )
}