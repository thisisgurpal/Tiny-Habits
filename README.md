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
* Time frame for the build was 8 days.
* Build a full-stack application using an Express API to serve our data from a Mongo database. 
* Consume our API with a seperate front end built in React.
* Implement CRUD (Create, Read, Update, Delete) functionality.
* Have a visually impressive design.

# Technologies and tools used
* Git + Github
* JavaScript
* MongoDB
* Mongoose
* JWT
* Express
* Node.js
* React
* Chakra UI
* Axios
* CSS
* Cloudinary Image Upload API
* Heroku deployment
* Visual Studio Code

# Walk through
<h3>Home page</h3>
On the Home landing page you are welcomed to the application, and can see the Login and Register buttons in the navbar as well as the various challenges that are available.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161271850-45a3badf-255b-4b29-9fc9-7546abc09fff.JPG" width="1000">
<h3>Login and Register</h3>
Users can register to create a profile and log in using their email address and created password.
<h3></h3>
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272113-0686fa12-069d-4bc2-b357-793de3d0f1cd.JPG" width="500"></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/97416784/161272137-c5a2021f-dc7d-4641-ad85-b75238444656.JPG" width="500"></td>
  </tr>
</table>
<h3>Home page - Logged in</h3>
Once user is logged in, the navbar will change so the user can access their profile and also Logout button. The home page now shows their current challenges that they have joined which they can filter through and keep track of when they are starting.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272078-3af64464-823d-4e38-bc7f-0f0666bd79c8.JPG" width="1000">
<h3>Profile page</h3>
On the profile page, the user can see there profile photo and name, they can also edit this if needed. Further they can view the challenges they have joined, as well as the posts they have made which are display that they have completed their habit.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272222-7507210e-d179-4a0a-ac9a-684ab99a8742.JPG" width="1000">
<h3>Event page</h3>
The event page gives the information needed to understand the challenge and also specifies who created the event. We can see who has currently joined the challenge too (it's worth noting that we also view other people's profile by clicking there photo), when the start and end dates are, comments, likes and also any posts that people have made to submit the completion of their habit.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161272322-70b21bdf-cb22-414e-a3f7-6133544c49a9.JPG" width="1000">

# Planning & organisation
Initially to start with coming up with ideas and components for this application we brainstormed for about 5-10 minutes. Any idea that came to mind we put down and then narrowed it down upon review.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837626-f27d783c-92d7-458c-a6ff-e3fbc33345d7.JPG" width="1000">
We then started to wireframe what we wanted the application to look like, this become our minimal viable product.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837933-6cc3fc71-f6e9-4625-a503-40b007695b35.JPG" width="1000">
In this planning process we also thought about how we want our API to look, the data structure and the fields needed. The user will have an array of events they have joined and habits they have completed. The event will have an array of users joined (members) and habits completed. The habit completed will have the owner (user that created the habit) and the associated event.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837814-65e31b8c-0856-4f11-8548-b4431cd2417b.JPG" width="500">
We then started to move onto Trello to plan out our time for this project. How we will work and who will be working on what. We all made a valuable contribution to complete the back end. Then we were able to start to split up the work when we moved onto the front end. I was mainly responsible for helping to build the back end, implementing the image uploader using cloudinary, designing the front end profile page pages for users, adding the habits completed feed, ensuring you are able to edit and delete where necessary, seeding the users and also bug fixing. 
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161279199-00b87a0c-cd8a-4ee0-a341-4370899be3ad.JPG" width="1000">
To work together on the code as a group we used branches on GitHub and then when merging to the development branch. We tried our best to not work on the same files at the same time and whenever we did have merge conflicts we reviewed them as a group. Every morning we had a stand up on zoom to discuss how we were getting on with the work and organising what everyone is doing. This really helped to prevent conflicts and productivity. It was a great team working experience and I'm happy with how we work together. 

# Code examples
Register a user and Loggin in:

```javascript
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    const token = jwt.sign({ sub: newUser._id }, process.env.SECRET, { expiresIn: '7 days' })
    return res.status(202).json({ message: 'Registration Successful',token: token  })
    
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)
    const userToLogin = await User.findOne({ email: email })
    console.log(userToLogin)
    // console.log(userToLogin.validatePassword(password))
    if (!userToLogin || !userToLogin.validatePassword(password)) {
      return res.status(401).json({ message: 'Unauthorised' })
    }
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '7 days' })
    return res.status(200).json({ message: `Welcome back, ${userToLogin.firstName}`, token: token })
  } catch (err) {
    console.log(err)
    return res.status(401).json(err)
  }
}
```

User schema:

```javascript
const userSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 30 },
  lastName: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  habitCompletions: [habitSchema],
  // events: [joinedGroupSchema],
  events: [{ event: { type: Schema.ObjectId, ref: 'Event' } }],
})
```

Get the data for the user that is logged in:

```javascript
 useEffect(() => {
        const getLoggedInProfile = async () => {
            try {
                const token = localStorage.getItem('tinyhabits-token')
                console.log(token)
                const { data } = await axios.get(`/api/profile`, {
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    }
                })
                // console.log('data', data)
                setLoggedInProfile(data)
            } catch (err) {
                console.log(err)
            }
        }
        getLoggedInProfile()
    }, [])
```

# Key learning and takeaways
My main learning for this project was understanding how full-stack applications work, from building the back end and the front end. Learning how to install MongoDB and use it to create a database to be used in the back end is something I haven’t done before and was great to learn and implement. This is the first project of mine where I used a styling framework (in this case it was Chakra framework). I quite enjoy doing CSS styling so it took some practice to get used to the way you can style using frameworks. However the more I styled using the framework I could see how easy it was to use and read.

Another big win for me I would say is how I worked with my team, as we were organised, efficient and effective. I learnt how to do branching on GitHub repositories and merge branches together, also I found that we split up the work well and played to each other's strengths. Using tools like Miro and Trello helped our organisation so we prevented as many conflicts with the code as possible.

Further it was nice to learn how to seed the database by creating our own seed files. I was mainly responsible for the user seeding, so this was a great experience to get more of an experience of working with data and structuring it for the application.

A challenge I found on this project was not being so comfortable with creating the Schema models, including adding virtual fields in the models. After working on the event and user Schema’s and implementing some of the virtual fields I felt much more comfortable and confident in my ability for this area now. 

In the future I would like to add a feature of letting users be able to add there own events, and then also a messenger section that allows users to interact with eacthother making it more of a social application.
