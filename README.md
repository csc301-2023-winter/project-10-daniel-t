# Master of Science in Applied Computing (MScAC), University of Toronto -- CSC301 MScAC


## Table of Content
* [Description](#description)
* [General Info](#general-info)
* [Developing Tools](#developing-tools-required)
* [Instructions for Future Maintainance](#instructions-for-future-maintainance)
* [Folders and Files](#folders-and-files)
* [Setup for Developers](#setup-for-developers)
* [Deployment](#deployment)
* [Features](#features)
* [How are Tasks Managed](#how-are-tasks-managed)
* [Automated testing](#automated-testing)
* [Licences](#licenses)


# Description
The project is a visualization and search interface for graduate internship abstracts. It is a web interface to display, filter, and search the public abstracts of the applied research internship projects carried out by students from the MScAC program at the University of Toronto. Our partner is Daniel Giovannini, the Associate Director for MScAC Partnerships. We are planning to build an interactive, searchable website that is both desktop- and mobile-friendly.

# General Info 
Our application is a web interface that allows easy browsing, filtering, and searching of public abstracts of applied research internship projects carried out by MScAC students at the University of Toronto. It aims to attract technical talent at the graduate level and promote university research collaborations. The platform is designed to meet the needs of both students and industry partners and will be interactive, searchable, and responsive on desktop and mobile devices. With guidance from the Associate Director for MScAC Partnerships, we aim to create an informative and engaging website for all stakeholders.

# Instructions for Future Maintainance
## Developing Tools Required
``` sh
pip3
```
- Python is required for adding required dependencies for backend development.
- Install from https://www.educative.io/answers/installing-pip3-in-ubuntu if not installed yet.

``` sh
Node.js
```
- Node.js is a back-end JavaScript runtime environment which executes JavaScript code outside a web browser. This will enable us to run our API and back-end 
services.

``` sh
npm
```
- npm is the default package manager for the JavaScript runtime environment Node.js.
``` sh
Git
```
- Git and Github will be used for repo version control.

``` sh
Editor
```
- You can use any editor such as VS Code , Webstorm or pycharm.

## Folders and Files
This section explains the purpose and content for each folder in the repository for future reference for the developers.
* __**Backend**__ - Includes the required dependencies for development, stored in __**requirement.txt**__ file, backend is implemented in Flask.
* __**Frontend**__ - Basic UI outlined in html file. The html pages were then transfered into React component in the [frontend/my-app](https://github.com/csc301-2023-winter/project-10-daniel-t/tree/main/frontend/my-app) directory, along with interactive functions implemented in JS.
* __**Testing**__ - Original testing cases for both frontend and backend. For the most updated backend testings, see __**app.py**__ and __**test.py**__ files in [backend](https://github.com/csc301-2023-winter/project-10-daniel-t/tree/main/backend) directory
* __**deploy.sh**__ - Script for website deployment

Future development mainly be working in [frontend/my-app](https://github.com/csc301-2023-winter/project-10-daniel-t/tree/main/frontend/my-app) directory.

## Setup for Developers
Clone the project from github:
``` sh
git clone https://github.com/csc301-2023-winter/project-10-daniel-t.git
```
go to the backend directory
``` sh
cd project-10-daniel-t/backend
```
Add dependencies
``` sh
pip install -r requirements.txt
```
Then go to my-app(React) directory
``` sh
cd ../
cd frontend/my-app
```

Run npm install to load the required packages for React
``` sh
npm install
```
Start React app,
if you run React on a local machine, the home page should be localhost:3000 instead of localhost:3000/search
``` sh
npm start
```

For future development, one can also run yarn to check whether the required packages are loaded. If yarn is not installed, install using the following command:
``` sh
npm install --global yarn
```

Check for success installation
```sh
yarn --version
```

Run yarn. The required packages for the application would be automatically installed.
``` sh
yarn
```

## Deployment
The project is deployed on: http://vm008.teach.cs.toronto.edu/search

### Deployment Process
 <br>The deployment process has been partially automated via a deploy.sh shell script. The steps of shell scripts are explained below <br>
 <br>**1. cd backend <br>
 <br>2. pip install -r requirements.txt: Install all the required packages of backend server <br>
 <br>3. python3 ./search_logic/Import_Abstract.py: Do the logo caching and create dictionaries<br>
 <br>4. nohup python3 app.py &: Run the flask server as a backend process <br>
 <br>5. cd .. <br>
 <br>6. cd frontend <br>
 <br>7. cd my-app <br>
 <br>8. npm install:Install all the required packages for the frontend React server <br>
 <br>9. npm run build: Compile the React project into a production build <br>
 <br>10. cd build <br>
 <br>11. mkdir search: Since the deployed URL has “/search” component, due to the nature of how React projects are served, we need to create a search folder to ensure consistency. <br>
 <br>12. mv * search: Move all the files to the newly created search folder. <br>
 <br>13. npx serve &: Serve the build folder. <br>
 <br>**
Note that The current deployment only works for urls of “.../abstracts” for the backend server and “.../search” for the frontend server, assuming that backend url is reverse proxied to port 8000 and frontend url is reverse proxied to port 3000. If the url and/or the reverse proxy ports changes, the following files/settings will need to be changed accordingly: <br>
 <br>**1. /backend/app.py: change the port number in main** <br>
 <br>**2. /frontend/my-app/package.json: change homepage** <br>
 <br>**3. /frontend/components/... : change the router settings and navigations**<br>

<br>
Please feel free to contact p.du@mail.utoronto.edu if facing any challenges when deploying to DCS. <br>

## Features 
### 1.	Home page interface: 
The link below will direct the user to the home page of the website. Several internship projects would show up at the bottom of the page. If the user is interested in one of the projects and clicks on the Details button, the user would be directed to the project page, which includes more specific details such as the project abstract, organization, and supervisor. 
<br>
![homepage](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/homepage.png)
 <br>
Figure 1. Image of the homepage. 

### 2.	Navigation bar: 
At the top of the page is the navigation bar, where “Home”, “Contact” and “About” are listed. Clicking on each button would prompt the corresponding pages for information about the website (fake information for now).
<br>
 ![navigation_bar](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/nav_bar.png) 
<br>
Figure 2. Navigation bar options
<br>
### 3.	Filtering function: 
There are three scrollable filters for users to use. If the user clicks on the filter, the available options will show up, and by clicking on one of the options, the selected option will replace the word in the filtering box to let the user know which option is chosen. In the next assignment, we will improve this to be a searchable filter, where users can directly search for the option they want. 

Filtering by year will display projects posted in a particular year. Filtering by the organization will return projects carried out by that organization, and filtering by the academic supervisor will show projects supervised by a specific supervisor. Each filter is also searchable, where the user can type in a substring of the option they are looking for, and then only the options that satisfy would show up in the dropdown list.
<br>
![filter](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/filter.png)
![filter-content](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/filter_content.png)
<br>
Figure 3. Options for the internship year filter. The chosen option would show in the filter box.

### 4.	Searching function: 
The search box on the webpage offers a convenient way for users to find specific projects that match their interests. By entering relevant search terms into the search box, users can perform a full-text search that will return all projects containing those terms. This means that the search results will include all projects that mention the entered terms, even if the terms appear in the project's description, title, or other related information. The search function provides a powerful and flexible tool for users to locate projects that match their specific needs or interests. It enables users to quickly and easily find projects related to a particular topic or keyword, making it a highly effective way to navigate through large amounts of project data. It would prompt the user to the results page where the projects that include the search term would be listed. If no results are found, the page would show “No matched results”. Projects with same title but performed by different students would be merged into one, but if the years and abstracts are different, they won't be merged.
<br>
(A) 
![kjahsdf](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/non_exist_search.png)
![no-results](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/no_results_found.png)
 <br>

(B)  
 ![network](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/exist_search.png)
 ![has-results](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/search_result.png)
<br>

(C)
![project-details](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/project_detail.png)
 <br>
Figure 4. (A) Figure shows the case when no results are found with the term “kjahsdf”.
(B)The result page would contain the project whose name contains “network”. 
(C) By clicking on the “Details” button, the detailed information about the project would be displayed.

### 5.	Tags: 
Beneath the search box, you will find a list of tags that are currently trending and represent popular topics of interest. These tags are used to categorize the content and make it easier for users to locate relevant information quickly. Some examples of these popular tags include "machine learning" and "robotics," which are frequently searched for by users. By clicking on these tags, users can view all the content related to that particular topic, enabling them to access the most relevant and up-to-date information available.
<br>
![tags](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/frontend/readme-images/tags.png)
<br>
Figure 5. Tags that would show blue when the cursor is moved onto it.

## Automated testing

### Front end testing and setup:
In front-end testing, we mainly test the search function. 
You can find the test code in [index.test.js](https://github.com/csc301-2023-winter/project-10-daniel-t/tree/main/frontend/my-app/src/components/pages/Index).
Four test cases test all filter and search functions.

```sh
npm install --save-dev jest @testing-library/react
```
Use the above code in console to install Jest and React testing library

```sh
npm test
```
Run this code under my-app will run all tests in my-app file

### Back end testing and setup:

In back-end testing, we mainly test all the API views. 

You can find the test code in [test.py](https://github.com/csc301-2023-winter/project-10-daniel-t/tree/main/backend).

```
cd project-10-daniel-t/backend
```

Use the above code in terminal to go to the backend directory.

```
pip install -r requirements.txt
```

Use the above code to add dependencies if have not do so.

```
pytest test.py -v
```

Run this code under backend directory in terminal will run all tests in test.py file

## How are tasks managed

__**git clone**__ team repository to local
* If clone failed due to authentication, or the repo is private and prevents editing access for teammates, either use a personal access token, or caching GitHub credentials by log into Git through terminal once to allow Git cache account information and permit access to the private repo.

__**git remote -v**__ to set the origin

Frontend and backend work separately and include README file which includes instruction for use.

In local, __**git pull**__ each time before editing the code to fetch the latest data.

After coding is completed, __**git add**__ to add the modified files.

__**git commit**__ with informative message.

__**git push**__ to main branch.


## Licenses 
The license we are using for this project is the MIT License. The reason for selecting the MIT license for our project is that it is focused on social welfare and operates on a non-profit basis. During our conversations with our partner, we discussed confidentiality, and they conveyed their wish for people to be able to update the project to enhance its societal contribution. The MIT license permits individuals to replicate and alter our codebase, aligning with our partner's objectives.


