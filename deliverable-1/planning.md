# Master of Science in Applied Computing (MScAC), University of Toronto -- CSC301 MScAC
* [Product Details](#product-details)
  * [Q1: What is the product?](#q1-what-is-the-product)
  * [Q2: Who are your target users?](#q2-who-are-your-target-users)
  * [Q3: Why would your users choose your product? What are they using today to solve their problem/need?](#q3-why-would-your-users-choose-your-product-what-are-they-using-today-to-solve-their-problemneed)
  * [Q4: What are the user stories that make up the Minumum Viable Product (MVP)?](#q4-what-are-the-user-stories-that-make-up-the-minumum-viable-product-mvp)
  * [Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering](#q5-have-you-decided-on-how-you-will-build-it-share-what-you-know-now-or-tell-us-the-options-you-are-considering)

* [Intellectual Property Confidentiality Agreement](#intellectual-property-confidentiality-agreement)
* [Teamwork Details](#teamwork-details)
  * [Q6: Have you met with your team?](#q6-have-you-met-with-your-team)
  * [Q7: What are the roles & responsibilities on the team?](#q7-what-are-the-roles--responsibilities-on-the-team)
  * [Q8: How will you work as a team?](#q8-how-will-you-work-as-a-team)
  * [Q9: How will you organize your team?](#q9-how-will-you-organize-your-team)
  * [Q10: What are the rules regarding how your team works?](#q10-what-are-the-rules-regarding-how-your-team-works)
* [Communications](#communications)
* [Collaboration: (Share your responses to Q8 & Q9 from A1)](#collaboration-share-your-responses-to-q8-q9-from-a1)

## Product Details
 
#### Q1: What is the product?

The project is a visualization and search interface for graduate internship abstracts. It is a web interface to display, filter, and search the public abstracts of the applied research internship projects carried out by students from the MScAC program at the University of Toronto. Our partner is Daniel Giovannini, the Associate Director for MScAC Partnerships.
We are planning to build an interactive, searchable website that is both desktop- and mobile-friendly.


#### Q2: Who are your target users?

  > Short (1 - 2 min' read max)
 * Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
 * **Feel free to use personas. You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).**

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Through this interface, the intended users will have the opportunity to review, filter, and search the public abstracts of MScAC projects from previous years to learn more about the types of projects undertaken by MScAC students and what counts as applied research for the MScAC program’s academic requirements.This interface will play a pivotal role in showcasing the breadth and impact of MScAC. As it provides abstracts of MScAC projects over the years, we believe this product can give insights to future graduate students with their own projects, and is also very helpful for prospective MScAC partner organizations to get a clearer idea of what types of projects have qualified for MScAC's applied-research requirements in previous years.

#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

User stories: https://docs.google.com/document/d/1fA3iWHW_igr3ZypRUNyxh7OzHxANfouvaqs9_6xGdaY/edit?usp=sharing
Evidence of Approval: https://drive.google.com/file/d/1_v_hJyrganxtoAZTdtg2jWclPDmeOAuv/view?usp=sharing


#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

* The product involves both front-end and back-end components. For the front-end, we will be using one of the modern front-end frameworks, likely one of React and Angular, which correspond to Javascript and Typescript, respectively. For the back-end, since the database is already up and running, we will only need a data processor along with some algorithms to determine the relevance of data to the searching criterias, which can be done in python.
* The partner has clarified that the deployment of the interface is not our course team’s responsibility, as they are rebuilding their website. As long as the interface is implemented in the modern framework, they can easily integrate it into their website in a later stage. 
* We will also be using Airtable, which is a cloud database service platform. That’s where the partner’s database is developed and populated, which our product will highly depend on. Instead of calling the API synchronously, we may cache the data before feeding them into the content processor, so that the program runs .
* The architecture is illustrated below(https://www.canva.com/design/DAFZSsiwLXQ/oUos8lBSVdG8nE1OY8iCWg/edit?utm_content=DAFZSsiwLXQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

----
## Intellectual Property Confidentiality Agreement 
* Students can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
* Students can publish source code (e.g., on GitHub), design, and the software 
* Students can use the project and software for job interviews and similar.

----

## Teamwork Details

#### Q6: Have you met with your team?

Yes. We have generate a group on WeChat, and made several group calls.

Here are some fun facts about our team members and our partner:
* ChengYue Zhang likes LEGO
* Yuyang Wang likes CSGO
* Stephanie is a PADI open water diver
* Daniel (our partner):  “I am also an experienced diver (Advanced Open Water Diver) and freediver, although more about scuba than freediving these days.”


#### Q7: What are the roles & responsibilities on the team?

Jiaguan Tang:
* Role: Full Stack developer / Software Architect / Tester / Team Lead & Tech Lead
* Responsibilities:
  * Jump into and develop any part of the project
  * Offer help to teammates better understand Web development
  * Design the overall architecture of the web
  * Write unit tests for the web
  * Discuss with other tech leads and assign coding tasks 
* Strength: React, Django, SQL
* Weakness: UI/UX, Communication skill, leadership

ChengYue Zhang:
* Role: UX / UI designer / Backend developer / Dedicated partner liaison
* Responsibilities:
  * Design the interactive and intuitive user interface
  * Schedule meetings with partner
  * Help with backend development

Fucheng  Zhuang:
* Role: Full  Stack developer / Dedicated partner liaison / Team Lead & Tech Lead
* Responsibilities:
  * Communicate with the partner
  * Back-end development
  * Improve on UX
  * Discuss with other tech leads and assign coding tasks

Peng Du:
* Role: Backend developer/Software Architect / Team Lead & Tech Lead
* Responsibilities:
  * Design and develop the data processor and searching algorithms.
  * Come up with architectural solutions when facing technical issues
  * Apply design patterns to make the product organized and scalable.
  * Discuss with other tech leads and assign coding tasks  

Yuyang Wang
* Role: Frontend Developer
* Responsibilities:
  * HTML CSS
  * Help with SQL development

Stephanie Chen
* Role: Frontend Developer / UX UI Designer
* Responsibilities:
  * HTML CSS, React
  * Design user interface
  * Help with backend development

Ray Xu
* Role: Frontend Developer
* Responsibilities:
  * HTML CSS, React


#### Q8: How will you work as a team?

Meetings with our partner will be held online through zoom, ideally twice before each assignment deadline. The purpose of each meeting is to share the process of the project with our partner, and discuss the details regarding software functions. Members working on the same aspect (i.e. front end) will have weekly meetings and will discuss through Wechat about any issue encountered. Events such as coding sessions, code reviews will be held based on each team member’s own schedule, and ideally there would be a sync group meeting once every week or two weeks. We will be meeting with our partner once every two weeks, starting from the week of Feb.13.

[Link to Meeting Minutes](https://github.com/csc301-2023-winter/project-10-daniel-t/blob/main/deliverable-1/team/minutes/meeting_minutes_files.md)
  
#### Q9: How will you organize your team?

* To-Do list or post issues on GitHub
* TODOs in the code
* Prioritize the tasks that need to be discussed with the partner in the following weeks. Save any extra ideas that are not tailored down within the team to the meeting with the partner, and ask for advice.
* Tasks can be assigned to team members first based on personal preference and capability, then by workload to make sure each person has sufficient time to work on the tasks.
* The status of work can be tracked by holding regular meetings, running the code to display the intermediate results, and see whether there are any issues posted on GitHub waiting to be solved.


#### Q10: What are the rules regarding how your team works?

**Communications:**
* We expect to have weekly meetings through either zoom or Wechat group calls. Any technical questions can be addressed at any time, and we expect to help each other as far as we can. Regarding the process for communicating with our partner Daniel, we expect to first share what we have done up till each meeting, and discuss the details of the project with our partner.

**Collaboration:**
1. How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
  * We would try to find a time slot where all members working on the same aspect of the project (e.g. front end part) are available to have the meeting. Moreover, we would also have meetings as a whole group regularly to make sure the software can run as we expected, and help each other fix bugs. Since each aspect of the project has two or three team members to work on, we can communicate to each other easily to make sure actions are being done. GitHub can also provide information about contributions on the project for each team member.

2. How will you address the issue if one person doesn't contribute or is not responsive?
  * We would talk to this person to see if there is any time conflict with his/her other course assignments, and try to figure out a better way to collaborate. We can also have several team members to keep track of the overall process of the projects to see whether each part is done properly. If not, we would have a talk to the members responsible for the certain part. If the person is not responsive, we would directly phone call the person.

