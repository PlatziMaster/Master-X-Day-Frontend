import React from "react";
import styles from "./Onboarding.module.css";

const OnBoarding = () => {
  return (
    <div>
      <section id="welcome">
        <h1>Welcome to ID user</h1>
      </section>

      <section id="userimg">
        <figure>
          <img src alt />
        </figure>
      </section>

      <section id="members">
        <h2>Members</h2>

        <div id="member1" className="member">
          <p>Name Member</p>
        </div>

        <div id="member2" className="member">
          <p>Name Member</p>
        </div>
      </section>

      <section id="listcards">
        <p id="list" className="lctitle">
          Lists
        </p>

        <p id="cards" className="lctitle">
          Cards
        </p>
      </section>
    </div>
  );
};

export default OnBoarding;
