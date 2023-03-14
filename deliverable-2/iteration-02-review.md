# Team Number 10, CSC301-MScAC

## Iteration 2 - Review & Retrospect

 * When: March.13, 2023
 * Where: Microsoft Team

## Process - Reflection

#### Q1. What worked well
Several strategies were implemented that worked well for us to ensure progress and team cohesion. 

Firstly, whenever a problem was encountered, it was immediately posted in the group chat for discussion. Team members would then contribute thoughts and suggestions, leading to the eventual resolution of the issue. Peng Du and Jiaguan Tang, the software architectures of our project, plays important role in answering the technical questions. Finally, clear work division was established, with each team member being responsible for their own parts. Ray Xu reviews writing documents regularly, and Stephanie Chen organizes the format of the documents, including diagrams and figures used in the report, plus contributing to UI design. This helped to ensure accountability and prevent overlap or confusion regarding tasks. 

Secondly, the documenting files such as team reports, iteration-02-review.md are first being kept in Google Doc, and is shared among team mates. This strategy eases everyone to add TODOs, write about the content, comment on the content, and make modifications. After the editing is finished and agreed by all teammates, ChengYue Zhang is responsible for managing the contents into Markdown format, and push the file onto GitHub team repo. For reference to our Google Drive, see [this link](https://drive.google.com/drive/folders/1M5KyfLhumrCV2pxUpo3Xoz6zC9K4cD5F?usp=sharing).

Thirdly, in-group meetings were hold regularly by Fucheng Zhuang, with most team members participating in discussions. This helped to facilitate collaboration and ensure that everyone's ideas and opinions were heard. 

Besides, regular meetings with our partner were held every two weeks, which allowed for the reporting of progress and the exchange of advice and comments. This helped us to ensure that everyone was on the same page and that any potential issues could be addressed in a timely manner. 

Throughout the project, these strategies proved effective in promoting communication, collaboration, and accountability within our team.

#### Q2. What did not work well
Due to having multiple coursework requirements outside of CSC301, we started the assignments later than anticipated. This led to time constraints and a need for more efficient collaboration to make up for lost time. Besides, some team members may have had ideas or suggestions that they considered to be "harsh" or critical, leading them to refrain from expressing them. However, it is important for all of us to encourage open communication and the sharing of all ideas, even those that may be initially difficult to hear, as they could ultimately help our team work more effectively. By addressing these challenges and fostering a culture of open communication, our team could work together more productively and efficiently.

#### Q3(a). Planned changes
To expand on our plans for continued collaboration, we recognize that maintaining effective communication and collaboration will be key to the success of the project. 

Firstly, we understand the importance of sharing thoughts and ideas to promote innovation and collaboration within the team. As such, we will continue to encourage each other to speak up and share their thoughts, whether about the development of the website or how we can work together more effectively as a team. This will allow us to leverage our collective strengths and experiences to achieve the best possible outcomes for the project. 

Secondly, we will continue to address any problems encountered as a team, drawing on the diverse perspectives and expertise of each team member to find the best solutions. To manage our time effectively, we will have brief discussions together about the assignments once they are posted, allowing us to gain a general understanding of the task at hand. This will enable teammates with less urgent assignment dues to start earlier and make better use of their time.

Moreover, Jiaguan Tang and Yuyang Wang, who belongs to the Testing subgroup in Assignment 2, decided to contribute to front end development as well, since our project is front end intense, which require more members to work on it.

In addition, we will continue holding regular in-group meetings every Thursday to keep everyone on the same page and facilitate productive discussions. We also plan to maintain our reporting process to our partner to ensure that we are meeting expectations and receiving feedback as needed.

#### Q3(b). Integration & Next steps
Front end would be working on building React, transfering the html blocks previously developed into single components in javascript, and then process the data accessed from backend database. Front end will also work on the design of the UI, and responsiveness of the website.

The backend subteam will continue working on the optimizations of searching algorithms, as well as collaborating with the frontend team and develop any further API that are needed. Another major task is to deploy the server on DCS and provide guidance to testing team to testify the APIs.



## Product - Review

#### Q4. How was your product demo?
#### Front End
#### Demo reported to partner:
We presented our progress with demonstration of our deployed website, showcasing how the search function would work and how the internship project information would be displayed on the page. We also demonstrated the user experience when searching for a keyword, including the prompt to the search results page. In the event that no results were found, we made sure that the user would be directed back to the previous page where the search was initiated. In the Contact page, Google Map API is implemented to show the location of MScAC office, with a location pin pointing out the place in the map, and a re-centering button to re-center the map such that when the user drags the map to see surrounding locations, he/she can go back to the spot with office location at the middle of the map.


#### Feedback from partner:
Daniel recommended displaying one internship project per row, rather than three, as this would accommodate the potentially extensive information stored for each project. The filters are recommended to be searchable, that is, by clicking it would be a drop down menu listing all the options, but with a small search bar, and then the user can directly search for an option, rather than searching through each option one by one.


#### Learnings:
Displaying project one per row is particularly helpful as it highlights the importance of considering the information architecture when designing the user interface. By taking into account what information is stored in the database, we can design an interface that maximizes usability and user experience. The searchable filters also considers users’ ease of viewing on the options they are looking for, which can make it more efficient for the users to find the information they want.


#### Back end
#### Demo reported to partner:
We demonstrated the multiple searching functionalities for the  backend server through a basic UI interface.  We demonstrated 2 main functions, first is a universal search bar. After successfully retrieving the data, we demonstrated our spell checking functionality, which is similar to the auto-correct feature in Google search. Then we demonstrated how users can retrieve detailed articles by searching with specific identifiers such as ID or year. This functionality will be crucial in allowing users to easily access more detailed research pages.

#### Feedback from partner:
Daniel suggests that the database should be refreshed on a regular basis, because the database is updated regularly and  we want to keep the searching results most up-to-date.

Daniel suggested to us: to avoid the possibility of duplicates, we should change our searching ID from “Name + Company name” to a unique identifier for each research.

In addition, Daniel has also suggested that we should deploy our server on DCS instead of AWS, which would help transition it into the production phase once the CSC301 project ends.

#### Learnings:
There are a couple of takeaways from the partner’s review. When building the backend server in the case of a database being maintained by another team, an automation tool should be developed to synchronize the database updates. In addition, we have also realized the importance of communication; if we had talked to the MScAc team earlier, we could have saved the effort of deploying on AWS and deliver the results more efficiently.



