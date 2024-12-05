# Country-Information-Dashboard



 Software Engineers - Interview Assignment: Country Data Dashboard 
Software Engineers are found within many different teams, each with different responsibilities and focus areas – such as infrastructure, manufacturing, support or web. Whilst the day-to-day of the role can vary, all Software Engineers need to manage different scenarios from stakeholders and be able to respond appropriately with their technical background and business insight. 
This assignment will put you in a situation that a Software Engineer may face within the infrastructure team. The scenario should be something you can relate to, but please keep in mind we are looking at the skills you will need to possess for a Software Engineer role in any of our teams, outlined in the assessment criteria. This is not an assessment of your infrastructure knowledge. 
Summary 
Objective 
Task: Country Information App 
Goal: Build a web application that retrieves country data from the REST Countries API, provides backend APIs for consuming the data, and displays this information on a frontend. 
High-Level Requirements: 
1. Backend (Node.js/Express, TypeScript): 
You will use Node.js with Express (or similar) to build backend APIs that interact with the REST Countries API as the data source. 
•	External API Call: Use the REST Countries API (https://restcountries.com/v3.1/all) to fetch data about countries. 
o	Backend API Endpoints: GET /countries: Fetch a list of all countries (from REST Countries API). 
o	GET /countries/:code: Fetch detailed information about a single country by its country code (e.g., “US” for the United States). 
o	GET /countries/region/:region: Filter countries by region (e.g., Asia, Europe). 
o	GET /countries/search: Search for a country by name. Example: “/countries/search?name=India&region=Asia” ▪ Name: Search for countries by name (e.g., ?name=India). 
o	▪ Capital: Search for countries by capital city (e.g., ?capital=Tokyo). 
o	▪ Region: Search for countries by region (e.g., ?region=Asia). 
o	▪ Timezone: Search for countries by timezone (e.g., ?timezone=UTC+05:30). 
•	Caching: Implement simple caching to reduce the number of external API requests. 
•	Data Processing: Process and structure the data returned from the REST Countries API to fit your needs (e.g., extract necessary fields like country name, population, flag URL, region, and currency). 
•	Error Handling: Properly handle API errors (e.g., 404 for not found, 500 for server issues). 

2. Frontend (React/Next.js + TypeScript): 
The frontend will be built using React/Next and TypeScript. It will communicate with your backend to display country information to the user. 
Features: 
•	Country List Page: Display a list of all countries with basic information (name, flag, region). In Specific, Create & use the card component and provide current display current time of that country (12-hour format).
•	Implement Lazy-Loading and infinite scroll with batch loading (Load default number of countries and Load More options.)
•	Provide filters (by region, time zone) and a search bar to search for countries by name.
•	Country Detail Page: Show detailed information about a selected country (e.g., population, currency, languages, flag, and region).
•	Search & Filter: Provide a search field on the main page to allow users to search countries by name, capital.
•	Implement region-based filtering (e.g., show only countries from Asia, Europe).
•	UI/UX: Clean and responsive design using a CSS framework like Bootstrap, Material-UI, or Tailwind CSS.
o	Display loading states while fetching data.
o	Handle and show error states (e.g., if country data could not be retrieved).
o	Search and filter functionality.
•	Style the app for a responsive UI using CSS or a CSS framework.
•	Handle loading and error states.

Requirements – Scoring Points 
Step-by-Step Breakdown: 
Backend: 
•	Setup a Node.js project with TypeScript and Express. 
•	Create the necessary endpoints to fetch data from the REST Countries API. 
•	Implement data caching and error handling. 
Frontend: 
•	Setup a React project using TypeScript. 
•	Create a service to call your backend API. 
	Build components for: Country List Page (with pagination and filters). 
	Country Detail Page (to show detailed info). 
	Evaluation Points including: 
Backend: 
•	API Design 
•	Caching 
•	Data Processing 
FrontEnd: 
•	Core Pages & Components 
•	Component Design 
•	State Management 
•	Routing 


Overall: 
•	Error Handling 
•	Security 
•	Performance 
•	Code Quality 
•	Documentation 
•	Testing coverage and quality 
•	Git commit messages and Inline documentations. 
•	TypeScript Best Practices 
•	Create a CI/CD pipeline using GitHub Actions or a similar tool. (optional – But will add weightage to scoring) 

Bonus (optional – But will add weightage to scoring) 
•	Implement a feature to compare two countries side by side. 
•	Add a visualization (e.g., a map or chart) using a library of your choice. 

Submission 
•	Provide a GitHub repository link with your solution. 
•	Include a README.md with setup instructions and any additional notes. 
•	Prepare a PPT Slide or two to present your work during the Interview rounds. 

Good luck!
![image](https://github.com/user-attachments/assets/71b351c9-4628-4896-ad46-859c704deddd)
