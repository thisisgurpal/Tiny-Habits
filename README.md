# General Assembly Project 3 - TinyHabits
My third project at General Assembly was with <a href="https://github.com/Borahm">Borahm Cho</a> and <a href="https://github.com/pete-livermore">Pete Livermore</a>. We chose to develop a habit app that allows you to join upcoming 30 day habit challenges using React, Node JS, Express JS and MongoDB (MERN stack). You will be able to register, create a profile then add your habits to events when they are live and also comment on events. For this project I helped create our own API of events, users and habits. My main responsibilities were to help build the back end, bug fixing, design the front end profile page pages for users, adding the habits completed feed, ensuring you are able to edit and delete where necessary and also seeding the users. The idea behind this application is to help others build a habit, something that can a lot of us can find difficult and struggle with. You can find this application <a href="https://tiny-habits-sei61.herokuapp.com/">here</a>.
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
* Have visually impressive design.

# Code Installation
* Clone or download the repo
* Install dependencies: `yarn`
* Seed the database: `yarn seed`
* Set up the back end server: `yarn serve`
* Start the front end server: `yarn start`

# Technologies used
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

# Planning & organisation
Initially to start with comming up with ideas and compenents for this application we brain stormed for about 5-10 minutes. Any idea that comes to mind we put down and then narrowed it down upon review.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837626-f27d783c-92d7-458c-a6ff-e3fbc33345d7.JPG" width="1000">
We then started to wireframe what we wanted the application to look like, this is going to be our minimal viable product.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837933-6cc3fc71-f6e9-4625-a503-40b007695b35.JPG" width="1000">
In this planning process we also thought about how we want our API to look, the data structure and teh fields needed. The user will have an array of events they have joined and habits they have completed. The event will have an array of users joined (members) and habits completed. The habit completed will have the owner (user that created the habit) and the associated event.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837814-65e31b8c-0856-4f11-8548-b4431cd2417b.JPG" width="500">
We then started to move onto trello to plan out our time for this project. How we will work and who will be working on what. We all made a valuable contribution to complete the back end. Then we were able to start to split up the work when we moved onto the front end. I was mainly resposible for helping to build the back end, implemementing the image uploader using cloudinary, designing the front end profile page pages for users, adding the habits completed feed, ensuring you are able to edit and delete where necessary, seeding the users and also bug fixing. 
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161279199-00b87a0c-cd8a-4ee0-a341-4370899be3ad.JPG" width="1000">
To work together on the code as group we used branches on github and then when merging to the developement branch. We tried our best to not work on the same files at the same time and whenever we did have merge conflicts we reviewed them as group. It was a great team working experience and I'm happy with how we work together.

# Walk through
<h3>Home page</h3>
When you land on the home page you will be able to see the current events that have either passed or available to join. To join events you will need to log in.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161271850-45a3badf-255b-4b29-9fc9-7546abc09fff.JPG" width="1000">
<h3>Login and Register</h3>
To register you will need to input your details into the register form, and then you will be able to log in. If relevant details are missing these forms will prompt you with an error.
<h3></h3>
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272113-0686fa12-069d-4bc2-b357-793de3d0f1cd.JPG" width="500"></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272137-c5a2021f-dc7d-4641-ad85-b75238444656.JPG" width="500"></td>
  </tr>
</table>
<h3>Home page - Logged in</h3>
Once logged in you will see the home page is a little different. You can now see the events you have joined at the top from which you can filter through them.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272078-3af64464-823d-4e38-bc7f-0f0666bd79c8.JPG" width="1000">
<h3>Profile page</h3>
You are now able to head over to your profile page where you can edit your personal details and view your joined events. You can also view, edit or delete all your habits completed.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272222-7507210e-d179-4a0a-ac9a-684ab99a8742.JPG" width="1000">
<h3>Event page</h3>
If you click on an event you will be taken to the event page. Here you can see the details of the event and view all the habits completed for this event. You are also able to like the event and add a comment on the event.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272322-70b21bdf-cb22-414e-a3f7-6133544c49a9.JPG" width="1000">

# Code examples
For the schemas of the events, users and habits we ensured all the fields we needed were included and also where necessary we used virtual field, for example the password confirmation on the user schema is a virtual field.
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
To implement the image uploader I had to use my cloudinary details in an environment file which I pulled into a JavaScript file. The image upload code will add the image to a cloudinary folder, retreive the url create from cloudianry and use that to display the image on the front end. 
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161280267-84afa9b3-5fbd-44f5-a017-8f50c5059e78.JPG" width="500">

# Challenges
The challenge understanding how to build the back end of a full stack application and how to link this to the front end. Once I realised how this all works it made a lot more sense on creating and seeding your own database.

# Wins
My biggest win for this project was building a full stack application and working in a group using GitHub to merge branches together. 
