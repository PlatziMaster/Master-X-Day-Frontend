# Platzi Master X Day
## Trello clone for Platzi Master
# Getting started
## Is the design of your prototype complete?
Use Figma as a collaborative tool to design and define the Site Interface, colour palette and UI Kit.
## How would you improve this phase in the future?
We would create 3 branches for the development of the web app, provide & request constant feedback to each of the members of the team to check the progress of it & finally deliver a robust and bold project.
## Describe other alternatives that you considered:
We consider using vanilla JavaScript to connect to the API but based on the skills, knowledge & abilities of each member of the group we switch to React. Adobe XD was another option to use for the mockup, design & UI for the site but doesn't offer the option does not offer a collaborative license it would be very difficult to contribute and see how the design progresses for the web app. 
## How did you connect to the API?
We are going to use the Axios library, to which we are going to pass a constructor with the URL, the method and the data to be consumed.
1. We create a context.js file to manage the context throughout the application.
2. We import Axios into the context.js file to provide the library services in the application.
3. We cover the application routes with the context provider. 
4. In the different components where we are going to use context, we use the hook useContext to consume the functions created.
5. Finally, we map the data in each component of the application.

# Deployment in production
In production mode, we install the libraries corresponding to the project:
`npm install`
Run the project with
`npm start`