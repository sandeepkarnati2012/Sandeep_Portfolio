import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json"; 
import { getImageUrl } from "../../utils"; 

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img
                          src={getImageUrl(skill.imageSrc)} alt={skill.title} height="75px" width="75px" 
                        />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
            </div>
            <ul className={styles.history}>
                {history.map((histotyItem,id)=>{
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(histotyItem.imageSrc)} alt={`${histotyItem.organisation} Logo`} height="75px" width="75px"/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${histotyItem.role}, ${histotyItem.organisation}`}</h3>
                                <p>{`${histotyItem.startDate} - ${histotyItem.endDate}`}</p>
                                <ul>{histotyItem.experiences.map((experiennce,id)=>{
                                    return <li key={id}>{experiennce}</li>
                                })}</ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  );
};
