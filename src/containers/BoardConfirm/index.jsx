import React from "react";
import styles from "./BoardConfirm.module.css";
import ButtonBoard from "../../components/ButtonBoard";
import ButtonSecondary from "../../components/ButtonSecondary";

const BoardConfirm = () =>
{
    
    return(
        <main id={styles.main}>
        <section id={styles.welcome}>
            <p>Is this the board you want to export?</p>
        </section>
        <section id={styles.members}>
            <h2>Members</h2>
            <div id={styles.member1} className={styles.member}>
                <figure>
                    <img src="" alt=""/>
                </figure>
                <p>Name Member</p>
            </div>
            <div id={styles.member2} className={styles.member}>
                <figure>
                    <img src="" alt=""/>
                </figure>
                <p>Name Member</p>
            </div>
        </section>
        <section id={styles.listcards}>
            <p id="list" className={styles.lctitle}>Lists</p>
            <p id="cards" className={styles.lctitle}>Cards</p>
        </section>
        <form id="buttons">
            <ButtonBoard>Continue</ButtonBoard>
            <ButtonSecondary>Back</ButtonSecondary>
        </form> 
    </main>
    );
};

export default BoardConfirm;