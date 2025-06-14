                                  Team CodeRed


This project is a full-stack web application built using React for the frontend and Node.js with
Express for the backend, integrating MongoDB as the database. The application allows users to
register and log in to a personalized news dashboard where they can search for news articles using
the NewsAPI.

The news API used is https://newsapi.org/ . 

The user authentication system is kept simple, allowing users to register with a name, username,
and password. Upon logging in, the system greets them with a personalized message like "Hello,
[username]". All login and registration interfaces are styled with a light green background, centered
input fields, and a clean UI. A motivating tagline "Dive into the news that matters to you" is shown on
both login and registration pages.


Once logged in, users can search for news based on keywords, date range, language, source
domain, and desired number of articles. Articles are fetched from NewsAPI and presented in a clean
card layout. The interface includes a logout feature and uses localStorage to maintain login state for
simplicity.


The React app is connected to a backend API server that handles user authentication, while article
data is fetched directly from NewsAPI via client-side requests using axios. Overall, the project
showcases the integration of modern JavaScript technologies to deliver a personalized and
user-friendly news discovery experience .

Team Members:-
Aryan Sankar Namboodiri
Dhruva PV
Likhith Ksheerasagr
