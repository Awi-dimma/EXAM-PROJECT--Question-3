import { Link } from "react-router-dom"
import './About.css'

function About() {
  return (
    <>
      <div className="Aboutcontainer">
        <h1> About </h1>
        <p> Hi! my name is Mary, a software engineering Student of AltSchool. please signin to subcribe to my  channel.  </p>

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