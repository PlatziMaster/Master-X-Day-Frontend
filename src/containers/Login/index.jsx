import React from "react";
import styles from "./Login.module.css";
import { FaTrello } from 'react-icons/fa';
import { SiPlatzi } from 'react-icons/si';
import TrelloClient from 'react-trello-client';

const Login = () => {
  return (
    <section className={styles.body}>
      <h1 class={styles.title}>Platzi Trello</h1>

      <div className={styles.logos}>
        <figure>
          <FaTrello size={100} color='#fff' />
        </figure>
        <figure>
          <SiPlatzi size={100} color='#fff' />
        </figure>
      </div>

      <TrelloClient
          apiKey="9bd9d6de105c7952b848676d6b28f553"
          clientVersion={1}
          apiEndpoint="https://api.trello.com"
          authEndpoint="https://trello.com"
          intentEndpoint="https://trello.com"
          authorizeName="React Trello Client"
          authorizeType="popup"
          authorizePersist={true}
          authorizeInteractive={true}
          authorizeScopeRead={false}
          authorizeScopeWrite={true}
          authorizeScopeAccount={true}
          authorizeExpiration="never"
          authorizeOnSuccess={() => window.location.href = '/onboarding' }
          authorizeOnError={() => console.log('Login error!')}
          autoAuthorize={false}
          authorizeButton={true}
          buttonStyle="metamorph"
          buttonColor="green"
          buttonText="Login with Trello"
        />
    </section>
  );
};

export default Login;
