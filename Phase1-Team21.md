## Prototype in Figma and Connection to the Trello API

We added the views for the Welcome page where you will insert your Trello Dashboard Id, and once submitted it will take you to the Dashboard View.
The Dashboard view will show you a summary of all the lists, members and cards for your project.

FIGMA FILE: https://www.figma.com/file/eGoNpXbCTjkLrssYMCFWLZ/Master-X-Day-Phase-I-Team-21?node-id=2%3A5814

## Connection to Trello API

We connected to the API using postman. We retrieve the following information 
Dashboard by ID
https://api.trello.com/1/boards/B5RGGfnu?key=6ca435b76c2ff6f203f2fa3d14d1ef8c&token=9797273a70bfe373d3a6b85f1e84f3a5bd7a464fdbb1933fcb45d9cdf7cbf105

Name of dashboard members
https://api.trello.com/1/boards/B5RGGfnu/members?key=6ca435b76c2ff6f203f2fa3d14d1ef8c&token=9797273a70bfe373d3a6b85f1e84f3a5bd7a464fdbb1933fcb45d9cdf7cbf105

List in dashboard
https://api.trello.com/1/boards/B5RGGfnu/lists?key=6ca435b76c2ff6f203f2fa3d14d1ef8c&token=9797273a70bfe373d3a6b85f1e84f3a5bd7a464fdbb1933fcb45d9cdf7cbf105

Cards in dashboard
https://api.trello.com/1/boards/B5RGGfnu/cards?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548

https://api.trello.com/1/boards/B5RGGfnu/members?key=6ca435b76c2ff6f203f2fa3d14d1ef8c&token=9797273a70bfe373d3a6b85f1e84f3a5bd7a464fdbb1933fcb45d9cdf7cbf105
