# General Assembly Project 3 - TinyHabits
My third project at General Assembly was with <a href="https://github.com/Borahm">Borahm Cho</a> and <a href="https://github.com/pete-livermore">Pete Livermore</a>. We chose to develop a habit app that allows you to join upcoming 30 day habit challenges using React, Node JS, Express JS and MongoDB (MERN stack). You can register, create a profile, join events, post your completed habits, comment on events and like events. My main responsibilities were to help build the back end, bug fixing, designing the front end profile page pages for the users, adding the completed habits feed, ensuring you are able to edit and delete where necessary and also seeding the users. The idea behind this application is to help others build a habit, something that a lot of us can find difficult and struggle with. You can find this application <a href="https://tiny-habits-sei61.herokuapp.com/">here</a>.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160813446-b3cfeb0a-2bdc-4fa1-bcda-4a5a6963053f.JPG" width="1000">

# Links
<h3>Application</h3>
TinyHabits: https://tiny-habits-sei61.herokuapp.com/
<h3>Contact</h3>
Gurpal Gohler (LinkedIn): https://www.linkedin.com/in/gurpal-gohler/

# Brief
* Build a full-stack application using an Express API to serve our data from a Mongo database. 
* Consume our API with a seperate front-end built in react.
* Have a visually impressive design.

# Code Installation
* Clone or download the repo
* Install dependencies: `yarn`
* Seed the database: `yarn seed`
* Set up the back end server: `yarn serve`
* Start the front end server: `yarn start`

# Technologies and tools used
* JavaScript
* MongoDB
* Mongoose
* JWT
* Express
* Node.js
* React
* Chakra
* Axios
* SASS
* CSS
* Cloudinary
* Insomnia
* Heroku
* Visual Studio Code

# Planning & organisation
Initially to start with coming up with ideas and components for this application we brainstormed for about 5-10 minutes. Any idea that comes to mind we put down and then narrowed it down upon review.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837626-f27d783c-92d7-458c-a6ff-e3fbc33345d7.JPG" width="1000">
We then started to wireframe what we wanted the application to look like, this is going to be our minimal viable product.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837933-6cc3fc71-f6e9-4625-a503-40b007695b35.JPG" width="1000">
In this planning process we also thought about how we want our API to look, the data structure and the fields needed. The user will have an array of events they have joined and habits they have completed. The event will have an array of users joined (members) and habits completed. The habit completed will have the owner (user that created the habit) and the associated event.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837814-65e31b8c-0856-4f11-8548-b4431cd2417b.JPG" width="500">
We then started to move onto trello to plan out our time for this project. How we will work and who will be working on what. We all made a valuable contribution to complete the back end. Then we were able to start to split up the work when we moved onto the front end. I was mainly responsible for helping to build the back end, implementing the image uploader using cloudinary, designing the front end profile page pages for users, adding the habits completed feed, ensuring you are able to edit and delete where necessary, seeding the users and also bug fixing. 
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161279199-00b87a0c-cd8a-4ee0-a341-4370899be3ad.JPG" width="1000">
To work together on the code as a group we used branches on github and then when merging to the development branch. We tried our best to not work on the same files at the same time and whenever we did have merge conflicts we reviewed them as a group. Every morning we had a stand up on zoom to discuss how we were getting on with the work and organising what everyone is doing. This really helped to prevent conflicts and productivity. It was a great team working experience and I'm happy with how we work together. 


# Walk through
<h3>Home page</h3>
These events you can see have been seeded in the back end manually by us whilst also adding the relevant controllers to get the data on a request. After doing this we were then able to do an Axios get request on the front end to retrieve the event information and then display them. Each of these events are wrapped in a Link tag from React Router DOM which takes to an event path using the event id. Further we create a nav bar that remains at the top of the page that include links to the register and login pages as well as the TinyHabit logo which will take you to the home page.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161271850-45a3badf-255b-4b29-9fc9-7546abc09fff.JPG" width="1000">
<h3>Login and Register</h3>
To create the register and login forms we used the FormControl tag from Chakra framework. The forms have a handleSubmit function when they are submitted. This function will do an Axios post request of the inputted data using a controller created on the back end. To input the data and save it in order to do the post request we had to create two states and a function to update them when inputs are changed. One of them is a state that contains information that has been input into the fields, and the other one contains the error messages if the data the user tried to submit was not in the correct format. If there are any error messages the form will not submit and the messages are shown under the input fields.
<h3></h3>
In the back end controller we made sure that a token is created for each new user. Within the handleSubmit function for the login form, it will take the token created on the back end and set it to the local storage. This lets us know what user is currently logged into the application.
<h3></h3>
In the register form input there is a profile picture uploader which is a task that I was responsible for. This uploader was not only used here but also on the habits completed form, it is also included on the forms that allow the user to edit their habits submitted and profile pictures too. This is done using cloudinary, so when an image is uploaded it gets sent to cloudinary to retrieve a hosted path for the image which is then sent back to be displayed and saved into the state on the front end.
<h3></h3>
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272113-0686fa12-069d-4bc2-b357-793de3d0f1cd.JPG" width="500"></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272137-c5a2021f-dc7d-4641-ad85-b75238444656.JPG" width="500"></td>
  </tr>
</table>
<h3>Home page - Logged in</h3>
We now know the user is logged in due to the token saved in the local storage, we wanted the home page to be personal to the user so you can now see at the top of the page the user is welcomed and their joined events are shown. This can be done through sending the token with a get request, and on the back end we made a controller that will gather the users details which is what we used to display the information. We also changed the nav bar when the user is logged in to show the profile and log out buttons.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272078-3af64464-823d-4e38-bc7f-0f0666bd79c8.JPG" width="1000">
<h3>Profile page</h3>
The profile page is something that I was mainly responsible for, I made sure to include the users name, profile picture, events and feed of the habits they have completed. I've also added an edit functionality which takes you to a form with the users current details, they will then be able to change the details needed and submit them again which will run an Axios put request to update the user on the back end. 
<h3></h3>
To create the habits completed feed I took the data of all the completed habits and displayed them with their event name, habit picture, data completed and description. Then I thought about how the user might want to filter through these to look back at their activity, so I added a filter functionality to look at specific events and dates if needed. Further if the user needs to delete a habit or edit one I made sure it's possible to do so. When delete is clicked an Axios delete request is run using the users token from local storage so we know they are authorised. If they need to edit their details a form will be shown to let them do so, once the new details are submitted an Axios put request is run which updates the users habit in the back end. I used the map array method on the habits data to show them, also I sorted them in data order so you can see the most recent at the top.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272222-7507210e-d179-4a0a-ac9a-684ab99a8742.JPG" width="1000">
<h3>Event page</h3>
To develop the event page we first had to get the event data from the back end. This is done using a get request to a path using the event id. This event id is retrieved using the useParams method from React Router DOM. We ensured to show on the description, image, members, dates, comments and habits feed on this page. We used the Link tag on the members avatars and names in order to take you to their profile pages.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272322-70b21bdf-cb22-414e-a3f7-6133544c49a9.JPG" width="1000">

# Code examples
For the schemas of the events, users and habits we ensured all the fields we needed were included and also where necessary we used virtual fields, for example the password confirmation on the user schema is a virtual field.
<h3></h3>
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/160844392-87a9da00-e215-4655-bc1f-8515bd4450c4.JPG" width="300"></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/160844449-ef2cd10b-86be-451e-bd4c-cc73fdece0d2.JPG" width="300"></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/160844486-f5b86822-16c3-4925-b533-024f9ef09ffe.JPG" width="300"></td>
  </tr>
</table>
To retrieve the information needed we created our controllers. This example below is a controller to retrieve the habits completed for a user with populating certain fields where necessary.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161279803-f7c5c6d3-0599-4c9d-bd62-8196bdc211f7.JPG" width="1000">
This controller has to run through an authorisation process (secureRoute) for the user before getting the habit data from the specified route.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161281869-2ac3b60a-09a5-48ba-96db-493d246e6487.JPG" width="500">
To implement the image uploader I had to use my cloudinary details in an environment file which I pulled into a JavaScript file. The image upload code will add the image to a cloudinary folder, retrieve the url created from cloudinary and use that to display the image on the front end. 
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161280267-84afa9b3-5fbd-44f5-a017-8f50c5059e78.JPG" width="500">

# Key learning and takeaways
My main learning for this project was understanding how Full-Stack applications work, from building the back end and the front end. Learning how to install MongoDB and use it to create a database to be used in the back end is something I haven’t done before and was great to learn and implement. This is the first project of mine where I used a styling framework (in this case it was Chakra framework). I quite enjoy doing CSS styling so it took some practice to get used to the way you can style using frameworks. However the more I styled using the framework I could see how easy it was to use and read.

Another big win for me I would say is how I worked with my team, as we were organised, efficient and effective. I learnt how to do branching on github repositories and merge branches together, also I found that we split up the work well and played to each other's strengths. Using tools like Miro and Trello helped our organisation so we prevented as many conflicts with the code as possible.

Further it was nice to learn how to seed the database by creating our own seed files. I was mainly responsible for the user seeding, so this was a great experience to get more of an experience of working with data and structuring it for the application.

A challenge I found on this project was not being so comfortable with creating the Schema models, including adding virtual fields in the models. After working on the event and user Schema’s and implementing some of the virtual fields I felt much more comfortable and confident in my ability for this area now. 


