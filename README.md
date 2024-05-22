# My List Feature for OTT Platform

## Overview
This project enhances an OTT platform by adding a "My List" feature, allowing users to save their favorite movies and TV shows to a personalized list. The backend services will manage this list, providing functionality to add, remove, and list saved items.

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

3. **Setup Database**:
    - Ensure MongoDB is running.
    - Load initial data using provided scripts.
    - create .env file & paste this snippet
    ```
    SERVER_PORT=3001
    SERVER_HOSTNAME=http://localhost
    MONGO_URL=mongodb://127.0.0.1:27017/<db>
    ```
    replace your database name with `<db>`
4. **Run the Application**:
    ```sh
    npm run dev
    ```

5. **Run Tests**:
    ```sh
    npm test
    ```

## Design Choices

- **Performance**: Optimized database queries and indexed frequently accessed fields to ensure quick data retrieval.
- **Scalability**: Implemented pagination in the "List My Items" API to handle large datasets efficiently.
- **Tech Stack**: Chose TypeScript for its strong typing and maintainability; MongoDB for its flexibility with hierarchical data.

## Assumptions

- Users are authenticated
- The initial dataset provided is sufficient for testing the feature.

By adhering to these guidelines and considerations, the "My List" feature will be robust, efficient, and ready for production deployment.

## Deployment
This is deployed using varcel