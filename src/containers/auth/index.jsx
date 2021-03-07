import React from 'react';
// import useBoardLists from "../../hooks/useBoardLists";
import TrelloClient from 'react-trello-client';
import { useStateValue } from "../../context";

const Auth = () => {
  const { token } = useStateValue();
  return (
    <>
      {!token && (
        <TrelloClient
          apiKey="9bd9d6de105c7952b848676d6b28f553" // Get the API key from https://trello.com/app-key/
          clientVersion={1} // number: {1}, {2}, {3}
          apiEndpoint="https://api.trello.com" // string: "https://api.trello.com"
          authEndpoint="https://trello.com" // string: "https://trello.com"
          intentEndpoint="https://trello.com" // string: "https://trello.com"
          authorizeName="React Trello Client" // string: "React Trello Client"
          authorizeType="popup" // string: popup | redirect
          authorizePersist={true}
          authorizeInteractive={true}
          authorizeScopeRead={false} // boolean: {true} | {false}
          authorizeScopeWrite={true} // boolean: {true} | {false}
          authorizeScopeAccount={true} // boolean: {true} | {false}
          authorizeExpiration="never" // string: "1hour", "1day", "30days" | "never"
          authorizeOnSuccess={() => window.location.href = '/' } // function: {() => console.log('Login successful!')}
          authorizeOnError={() => console.log('Login error!')} // function: {() => console.log('Login error!')}
          autoAuthorize={false} // boolean: {true} | {false}
          authorizeButton={true} // boolean: {true} | {false}
          buttonStyle="metamorph" // string: "metamorph" | "flat"
          buttonColor="green" // string: "green" | "grayish-blue" | "light"
          buttonText="Login with Trello" // string: "Login with Trello"
        />
      )}
      {token && (
        <button>Comenzar</button>
      )}
    </>
  );
}

export default Auth;