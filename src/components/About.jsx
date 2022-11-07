import { Link } from "react-router-dom"
import './About.css'
import { Helmet } from "react-helmet-async"
import Mary from "../Assets/img/berry.jpg"
function About() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="This page describe's my  "
        />
      </Helmet>
      <div className="Aboutcontainer">
        <br />
        <img src={Mary} style={{ width: "200px", height: "200px", BorderRadius: "50%" }} />
        <h1> About </h1>
        <p> Hi! my name is Mary, I'm an Aspiring Software Engineer, Content Creator, and Community Engineer. I'm passionate about sharing knowledge, documentation, web engineering and above all I'm a christian.

          Here's a quick summary about me:
          <br />
          😊 Pronouns:She/her
          <br />
          💡 Fun fact: I'm currently studying at AltSchool Africa School of Software Engineering Class of 2022
          <br />
          🌱 I’m currently learning HTML, CSS, JavaScript and React.
          <br />
          😊 I’m looking for help with open source projects, hackathons, internships, and entry-level opportunities.
          <br />
          💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).
          <br />
          📫 You can view my resume and contact me by emailing maryanyah71@gmail.com
    
        </p>

        <button className="button-33">
          <Link className='text-link' to="/">SignOut</Link>
        </button>
        <br>
        </br>
        <button className="button-33">
          <Link className="text-link" to="/">Back</Link>
        </button>
      </div>
    </>

  )
}

export default About;