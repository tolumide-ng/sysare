## Basic React Tempate

### How to run this application

Backend:

-   Start the backend on the backend repository on PORT 3000

Frontend:

-   Clone this repository
-   install the packages using `npm i` (You would need to be using >= node v17) - I have intentions of dockerizing the entire application over the weekend
-   Create a .env file on the cloned frontend repository and add the following

```
BASE_URL = "/api"
PROXY_URL = "http://localhost:3000"
```

-   Run the project using `npm run dev`

Features:

1. Load Users (employs infinite scrolling to load the users lazily)
2. View a specific User
