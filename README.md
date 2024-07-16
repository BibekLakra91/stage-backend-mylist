# My List Feature for OTT Platform

## Overview
This project enhances an OTT platform by adding a "My List" feature, allowing users to save their favorite movies and TV shows to a personalized list. The backend services will manage this list, providing functionality to add, remove, and list saved items.

## Detailed Overview and Problem Statement
[Problem statement with Instructions and guidelines](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/Build%20My%20List%20feature.pdf)
## Objective
Implement scalable and performant APIs for the “My List” feature that any client (web or mobile app) can consume. Ensure comprehensive integration tests are included.

## Functional Requirements

1. **Add to My List**: Add a movie or TV show to the user's list. Each item is uniquely identified and duplicates are not allowed.
2. **Remove from My List**: Remove an item from the user's list using its unique ID.
3. **List My Items**: Retrieve all items in the user's list with pagination support to efficiently handle large lists.

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
    - Create .env file & paste this snippet
    ```
    SERVER_PORT=3001
    SERVER_HOSTNAME=http://localhost
    MONGO_URL=mongodb://127.0.0.1:27017/<db>
    ```
    - Configure the `MONGO_URL` according to your connection string. The defualt connection string should be `mongodb://localhost:27017` in your mongoDB compass. But, recommend `MONGO_URL` should be `mongodb://127.0.0.1:27017`, for smooth operation. 
    - Just replace `localhost` of connection string to `127.0.0.1`. Then replace your database name with `<db>`. Your db structure should look like this: <br>
    ![db](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/assets/db%20structure.png) 
    - Connect database
4. **Run the Application**:
    ```sh
    npm run dev
    ```
    You will see a messege showing like this:<br>
    ![output](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/assets/run%20dev%20op.png). <br>Don't worry, its expected

## Testing
- We have to do manual testing. I will add jest-tesing eventually
- Download postman or install postman extension if you are on vs-code
- Open postman. Postman is really convinient to send all type of requests like `Get`, `Post`, `Patch`, `Delete` etc.
- We can interact with 3 databases named movies, tvshows and usernames
- The routes are shown as below:<br>
![routes](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/assets/routes%20structures.png)
- ### Guildelines for requests
    - #### Request types | Keywords:
        - `POST` : create, update, add
        - `GET` : get
        - `PATCH` : update
        - `DELETE` : delete
    - It is important to send a body if the request type is `POST`, like shown below:<br>
    ![template](https://github.com/BibekLakra91/stage-backend-mylist/blob/main/assets/post%20template.png)
    - Mandatory keys in databases for new entries:
        - `users` : `username`
        - `movies`: `title`
        - `tvshows` : `title`
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