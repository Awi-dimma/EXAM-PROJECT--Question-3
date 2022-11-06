import './Home.css'
import {Outlet, Link} from 'react-router-dom'
import useLoggedIn from '../hooks/LoggedInUser'


function Home() {
  const user = useLoggedIn()

  return (
    <div className ="Homecontainer"> 
       <nav className="Navigation">
         <button className = "button-33">
        <Link className='text-link'to="/about">About</Link> {" "}
         </button>
      </nav>
      <Outlet />
      <h1>Hello! {user.name}, my name is Mary. I'm a christian and an software engineering Student at Altschool Africa and it's been an Amazing journey. please signup to know more and keep up with my journey. 
      #maytheforcebewithyou#</h1>
    </div>

  )
}

export default Home;