# Phase-2-Code-Challenge-Bank-of-Flatiron
The Bank of flatiron is a React Application that displays list of the recent bank transcations and other features .

# Set up
 To create the Application run :npx create-react-app bank-of-flatiron
 cd bank-of-flatiron
 Since when you run json-server --watch db.json the app run at port 3000, we add the following scripts in the package.json 
 "start": "PORT=8000 react-scripts start",
 "server": "json-server --watch db.json -p 8001"
 You can now run
 Run npm run server.This will run the backend on port 8001
 create Db.json this will load at(http://localhost:8001) 
 In another terminal run npm start. The react app will run on port 8000

open http://localhost:8001/transactions in the browser to verify that backend is working 

# The base URL for your backend is: http://localhost:8001


# Core Deliverables
As a user, I should be able to:
See a table of the transactions.
Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.



# Advanced Deliverables

As a user, I should be able to:

Sort transactions alphabetically by category or description.
Delete a transaction which will remove it from the table and delete it from the backend.
# Author
Grace kungu

# License
This project is licenced under: MIT
