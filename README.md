# General Assembly Project 3 - TinyHabits
In collaboration with <a href="https://github.com/Borahm">Borahm Cho</a> and <a href="https://github.com/pete-livermore">Pete Livermore</a>, we embarked on an exciting mission to develop a unique habit app. This platform invites users to participate in upcoming 30-day habit challenges, harnessing the power of React, Node JS, Express JS, and MongoDB – the formidable MERN stack.

Immerse yourself in a world of possibilities as you register, create your personalised profile, and embark on a journey of self-improvement by joining captivating events. Capture your triumphant moments as you post your completed habits, engage with other users through thoughtful comments, and spread motivation with uplifting likes.
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
Initially we immersed ourselves in an invigorating brainstorming session. For approximately 5-10 minutes, our minds ran wild, and we unleashed every idea that struck us. No thought was too big or too small; we eagerly jotted them all down. After this exhilarating brainstorm, we thoughtfully reviewed our myriad of ideas, carefully selecting the ones that resonated the most. This process of exploration and refinement laid the foundation for our exciting project ahead.<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837626-f27d783c-92d7-458c-a6ff-e3fbc33345d7.JPG" width="1000">
During the planning phase, we engaged in wireframing sessions to outline the application's visual design and core features. These wireframes formed the basis of our minimal viable product, providing a clear roadmap for its development. By creating these essential visual blueprints, we ensured a professional and well-structured approach to building our application.<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837933-6cc3fc71-f6e9-4625-a503-40b007695b35.JPG" width="1000">
During the meticulous planning process, we devoted considerable thought to crafting our API's structure, data format, and required fields. The envisioned API would facilitate a seamless user experience, empowering users to access an array of events they've joined and their completed habits.

To ensure increased functionality, we designed each event to include an array of joined users (members) and completed habits. These interconnected elements would provide a holistic view of the users' engagement within the application.

Moreover, we carefully considered the habit completed data, intending to capture both the habit's owner (the user who created it) and its associated event. This comprehensive data structure would facilitate efficient data management and enable users to track their habits and event participation with ease.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/160837814-65e31b8c-0856-4f11-8548-b4431cd2417b.JPG" width="500">
As we progressed with the project, we transitioned to Trello to chart our course and allocate time effectively. Collaboratively, we determined the work distribution and identified the tasks each team member would undertake.

Our collective efforts led to the successful completion of the back-end development, where we collaborated closely to ensure a robust and functional foundation.

When we shifted focus to the front-end, we began splitting the workload to maximize efficiency. In this phase, I assumed primary responsibility for key areas, including implementing the image uploader with Cloudinary, crafting captivating front-end profile pages for users, integrating the habits completed feed, ensuring seamless edit and delete functionalities, performing user data seeding, and resolving bugs.

This collaboration enabled us to deliver a polished application that not only met but exceeded our expectations. Each team member's valuable contribution played a pivotal role in shaping the project's success, and the journey showcased the true power of teamwork in delivering a cohesive and well-executed application.
<h3></h3>
<img src="https://user-images.githubusercontent.com/97416784/161279199-00b87a0c-cd8a-4ee0-a341-4370899be3ad.JPG" width="1000">
To improve collaboration, we harnessed the power of GitHub branches to work collectively on the code. By creating separate branches for our individual tasks, we ensured a structured development process. When ready, we merged our changes into the development branch, keeping the codebase cohesive and organized.

To avoid overlapping efforts, we made a conscious effort not to work on the same files simultaneously. In case of merge conflicts, we proactively reviewed and resolved them as a group. This collaborative approach helped maintain code integrity and minimized disruptions.

Daily stand-up meetings on Zoom became a cornerstone of our team's rhythm. Each morning, we gathered to discuss progress, challenges, and upcoming tasks. This open communication allowed us to synchronize our efforts, prevent conflicts, and enhance productivity.

Our teamwork experience was truly gratifying, and the synergy among the team members contributed to the project's success. The camaraderie and dedication we exhibited reinforced our belief in the power of collaboration, leaving us content with the results of our collective efforts.

# Code examples
Register a user and Logging in (Server side):

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

User schema (Server side):

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

Get the data for the user that is logged in (Client side):

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
Throughout this project, I gained valuable experience in collaborating within a software development team and utilising essential tools like GitHub and branching. One of the most rewarding aspects was mastering the installation and utilisation of MongoDB to create and seed databases for the backend, which was entirely new to me. Working with a styling framework, namely Chakra, was also a first for me, and although it took some practice, I found myself enjoying the process of CSS styling within this framework.

Undertaking this project was a significant milestone in my collaborative coding journey. Despite encountering challenges in the form of conflicting ideas and visions, managing divergent branches, and dealing with conflicting code, I learned the immense value of collective problem-solving. Collaborating with others allowed us to spot errors or find solutions more quickly, especially when someone was stuck and needed a fresh perspective.

## Embracing Collaborative Git Workflows
Our journey with Git brought a profound shift in our understanding and utilisation of this powerful version control system. Through collaboration, we delved into the intricacies of branching, merging, and resolving conflicts. When faced with challenges, we found solace in diving into documentation, ultimately empowering ourselves to harness Git's full potential.

## Unveiling the Power of Node/Express
Embarking on our first substantial practical encounter with Node and Express, we discovered a newfound appreciation for these tools. By dedicating a full day to construct and test routes and controllers using Insomnia, we gained valuable insights into the inner workings of these technologies. Though our journey with Node was still in its infancy, we managed to effectively access and utilise the necessary data on the front-end, paving the way for future optimisation.

## Unleashing Flexibility with MongoDB/Mongoose
Venturing into uncharted territory with MongoDB and Mongoose proved to be a captivating yet challenging experience. At first, the flexibility of data model development overwhelmed us, as we grappled with finding the "perfect" approach. However, as we progressed, we discovered the liberation of embracing diverse schemas and relationships. The NoSQL approach eventually revealed its advantages, especially when adapting to evolving requirements.

## Advancing Proficiency in React
While we had prior experience with React, this project elevated our understanding to new heights. The project's complexity demanded mastery of state management with hooks, particularly when implementing functionalities like likes and comments. We were captivated by the intricate interplay between front-end data manipulation and backend communication.

## Embracing Chakra UI for Rapid Development
In pursuit of an efficient UI framework for our project, we embraced Chakra UI, a decision that we found to be highly rewarding. The framework's ease of use and compatibility with our required features made the development process smoother. We particularly admired its flexibility in restyling components and ensuring a responsive design.

## Unleashing Creativity with Vanilla JavaScript
A crowning achievement in our project was the habit completion progress widget. This endeavour pushed our JavaScript skills to new horizons as we engaged in generating dynamic divs, styling them conditionally, and leveraging array methods like mapping and filtering. While we acknowledge the potential for backend optimisation, the experience provided a unique opportunity to master JS methods and access nested data effectively.

## Empowering with Cloudinary Upload API
Navigating the unexplored territory of Cloudinary, we unlocked the potential of integrating file upload functionality. Through React state management and Cloudinary account credentials, we seamlessly facilitated the addition of uploaded image URLs to the backend. This achievement marked yet another milestone in our journey of continuous learning and growth.
