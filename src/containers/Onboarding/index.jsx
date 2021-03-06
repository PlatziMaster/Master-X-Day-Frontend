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
          <img src="" alt="" />
        </figure>
      </section>

      <section id="members">
        <h2>Members</h2>

        <div id="member1" class="member">
          <p>Name Member</p>
        </div>
        <div id="member2" class="member">
          <p>Name Member</p>
        </div>
      </section>

      <section id="listcards">
        <p id="list" class="lctitle">
          Lists
        </p>

        <p id="cards" class="lctitle">
          Cards
        </p>
      </section>
    </div>
  );
};

export default OnBoarding;
