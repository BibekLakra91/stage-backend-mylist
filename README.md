# Backend for OTT Platform

## Overview
This project enhances an OTT platform by adding a "My List" feature, allowing users to save their favorite movies and TV shows to a personalized list. The backend services will manage this list, providing functionality to add, remove, and list saved items.

## Detailed Overview and Problem Statement
[Problem statement with Instructions and guidelines](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/Build%20My%20List%20feature.pdf)
## Objective
Implement scalable and performant APIs for the “My List” feature that any client (web or mobile app) can consume. Comprehensive integration tests are to be included. For now manual tesing is provided

## Functional Requirements

1. **Add to My List**: Add a movie or TV show to the user's list. Each item is uniquely identified and duplicates are not allowed.
2. **Remove from My List**: Remove an item from the user's list using its unique ID.
3. **List My Items**: Retrieve all items in the user's list. Pagination support to be added to efficiently handle large lists.

## Setup and Running Instructions

1. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Setup Database and .env File**:
    - Install mongoDB compass
    - Create .env file in the code base & paste this snippet 
    ```
    SERVER_PORT=<PORT>     #3001
    SERVER_HOSTNAME=<HOST URL>  #http://localhost
    MONGO_URL=<DB_URL>     #mongodb://127.0.0.1:27017/<db>
    ```
    - Configure the `MONGO_URL` according to your connection string. The defualt connection string should be `mongodb://localhost:27017` in your mongoDB compass. But, I recommend `MONGO_URL` should be `mongodb://127.0.0.1:27017`, for smooth operation. 
    - Just replace `localhost` of connection string to `127.0.0.1`. Then replace your database name with `<db>`. Your db structure should look like this: <br>
    ![db](/assets/db%20structure.png) 
    - Connect database
4. **Run the Application**:
    ```sh
    npm run dev
    ```
    If you open the URL, you will see a messege showing like this:<br>
    ![output](/assets/run%20dev%20op.png). <br>Don't worry, its expected

## Manual Testing

[![version](https://img.shields.io/badge/Zetflix-1.0.0-red)](https://github.com/BibekLakra91/Zetflix)
- Click the above github shield to access the Zetflix repository
- Follow instruction to run Zetflix on local host
- Download and open mongoDB compass
- Make sure stage-backend and mongoDB are also running in the backend

[![version](https://img.shields.io/badge/Postman-1.1.0-orange)](https://www.postman.com/downloads/)
- Download postman by clicking the above github shield or install postman extension if you are on vs-code
- Open postman. Postman is really convinient to send all type of requests like `Get`, `Post`, `Patch`, `Delete` etc.
- We can interact with 3 databases named movies, tvshows and usernames
- The routes are shown as below:<br>
![routes](/assets/routes%20structures.png)
- ### Guildelines for requests
    - #### Request types | Keywords:
        - `POST` : create, update, add
        - `GET` : get
        - `PATCH` : update
        - `DELETE` : delete
    - Necessary attributes for each action is provided below. It is important to send a body, like shown below:<br>
    ![template](/assets/Post%20template.png)
    - If you test through Zetflix, this parsing body will not bother you. Mandatory attributes for different function:
        - add user, delete user : `{username}`
        - update user : `{username, newName}`
        - add movie : `{titleMovie}`
        - delete movie : `{movieId}`
        - update movie : `{movieId, newTitle}`
        - add movie : `{titleTvshow}`
        - delete movie : `{tvshowId}`
        - update movie : `{tvshowId, newTitle}`
       
<!-- ## Design Choices

- **Performance**: Optimized database queries and indexed frequently accessed fields to ensure quick data retrieval.
- **Scalability**: Implemented pagination in the "List My Items" API to handle large datasets efficiently.
- **Tech Stack**: Chose TypeScript for its strong typing and maintainability; MongoDB for its flexibility with hierarchical data.

## Assumptions

- Users are authenticated
- The initial dataset provided is sufficient for testing the feature.

By adhering to these guidelines and considerations, the "My List" feature will be robust, efficient, and ready for production deployment.

## Deployment
This is deployed using varcel -->

## Author
Bibek Lakra