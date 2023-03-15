
# CSC301-MScAC Deliverable-2

## Table of Content
* [General Info](#general-info)
* [Setup](*setup)
* [Features](#features)
* [Workflow](#workflow)
* [Licences](#licenses)


## General Info 
Our application is a web interface that allows easy browsing, filtering, and searching of public abstracts of applied research internship projects carried out by MScAC students at the University of Toronto. It aims to attract technical talent at the graduate level and promote university research collaborations. The platform is designed to meet the needs of both students and industry partners and will be interactive, searchable, and responsive on desktop and mobile devices. With guidance from the Associate Director for MScAC Partnerships, we aim to create an informative and engaging website for all stakeholders.


## Setup
Go to the webpage by clicking the following URL: 

## Features 
### 1.	Home page interface: 
The link below will direct the user to the home page of the website. Several internship projects would show up at the bottom of the page. If the user is interested in one of the projects and clicks on the project name, the user would be directed to the project page, which includes more specific details such as the project abstract, organization, and supervisor. Alternatively, if the user clicks on the link of the organization or supervisor, the user would be promoted to the company’s website or the supervisor’s profile page. 
<br>
![homepage](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/homepage.png)
 <br>
Figure 1. Image of the homepage. 

### 2.	Navigation bar: 
At the top of the page is the navigation bar, where “Home”, “Contact” and “About” are listed. Clicking on each button would prompt the corresponding pages for information about the website (fake information for now).
<br>
 ![navigation_bar](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/nav_bar.png) 
<br>
Figure 2. Navigation bar options
<br>
### 3.	Filtering function: 
There are three scrollable filters for users to use. If the user clicks on the filter, the available options will show up, and by clicking on one of the options, the selected option will replace the word in the filtering box to let the user know which option is chosen. In the next assignment, we will improve this to be a searchable filter, where users can directly search for the option they want. 

Filtering by year will display projects posted in a particular year. Filtering by the organization will return projects carried out by that organization, and filtering by the academic supervisor will show projects supervised by a specific supervisor. For D2, the searching function restricting to these filter values are still under construction.
<br>
![filter](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/filter.png)
![filter-content](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/filter_content.png)
<br>
Figure 3. Options for the internship year filter. The chosen option would show in the filter box.

### 4.	Searching function: 
The search box on the webpage offers a convenient way for users to find specific projects that match their interests. By entering relevant search terms into the search box, users can perform a full-text search that will return all projects containing those terms. This means that the search results will include all projects that mention the entered terms, even if the terms appear in the project's description, title, or other related information. The search function provides a powerful and flexible tool for users to locate projects that match their specific needs or interests. It enables users to quickly and easily find projects related to a particular topic or keyword, making it a highly effective way to navigate through large amounts of project data. It would prompt the user to the results page where the projects that include the search term would be listed. If no results are found, the page would show “No matched results”. In the next assignment, projects with same title but performed by different students, such as the example shown in Figure (B) below, would be merged into one.
<br>
(A) 
![kjahsdf](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/non_exist_search.png)
![no-results](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/no_results_found.png)
 <br>
 
(B)  
 ![network](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/exist_search.png)
 ![has-results](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/search_result.png)
<br>

(C)
![project-details](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/project_detail.png)
 <br>
Figure 4. (A) Figure shows the case when no results are found with the term “kjahsdf”.
(B)The result page would contain the project whose name contains “network”. 
(C) By clicking on the “Details” button, the detailed information about the project would be displayed.

### 5.	Tags: 
Beneath the search box, you will find a list of tags that are currently trending and represent popular topics of interest. These tags are used to categorize the content and make it easier for users to locate relevant information quickly. Some examples of these popular tags include "machine learning" and "robotics," which are frequently searched for by users. By clicking on these tags, users can view all the content related to that particular topic, enabling them to access the most relevant and up-to-date information available.
<br>
![tags](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-2/readme-images/tags.png)
<br>
Figure 5. Tags that would show blue when the cursor is moved onto it.

## Workflow
 

To get started working on the team repository, use Git to clone it onto your local machine. If you encounter issues during the cloning process due to authentication or private repository access problems, you can either use a personal access token or cache GitHub credentials by logging into Git through the terminal once. This will allow Git to cache your account information and grant access to the private repo. After cloning, set the origin using git remote -v. The frontend and backend teams should work separately, and each team should include a README file that contains instructions for use. To ensure that you're working with the latest code, run git pull on your local machine each time before editing the code. Once you've made changes to the code, use git add to add the modified files. Then, use git commit with an informative message to commit the changes. Finally, push the changes to the main branch using git push.


## Licenses 
The license we are using for this project is the MIT License. The reason for selecting the MIT license for our project is that it is focused on social welfare and operates on a non-profit basis. During our conversations with our partner, we discussed confidentiality, and they conveyed their wish for people to be able to update the project to enhance its societal contribution. The MIT license permits individuals to replicate and alter our codebase, aligning with our partner's objectives.
 
Deployment

After discussing with our partner Daniel, we have deployed the front&backend servers on UofT DCS virtual machine. 
At the current stage, our backend flask server is running as a background process on the virtual machine 24-7. The web requests sent to http://vm008.teach.cs.toronto.edu/abstracts are reversed-proxied to our flask server and handled accordingly. Note that it is still a development server and not yet in production state, so high-volume traffic is not expected. In later stages of development, we will convert it into a production server using WSGI tools, such as Gunicorn.
The frontend server is currently deployed on netlify, as we encountered permission and app-building issues on DCS. The frontend server can be accsessed through   
https://mscacresearch.netlify.app/. Note that the frontend is already connected with backend, and the searching/filtering functionalities are already up and running. We will continue to work with DCS staffs and figure out a way to deploy frontend on DCS as soon as possible.
